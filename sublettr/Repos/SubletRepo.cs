using Microsoft.EntityFrameworkCore;
using sublettr.DataAccess;
using sublettr.DataAccess.Elastic;
using sublettr.Entities;
using sublettr.Mappers;
using sublettr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.ComponentModel;

namespace sublettr.Repos
{
    public class SubletRepo
    {

        private readonly RDSContext _context;
        private readonly SubletMapper _mapper;
        private readonly ElasticClient _elastic;

        public SubletRepo(RDSContext context, SubletMapper mapper, ElasticClient elastic)
        {
            _context = context;
            _mapper = mapper;      
            _elastic = elastic;
        }

        public SubletModel GetSublet(int id)
        {
            SubletModel sr = _context.Sublets.Where(s => s.ID == id).FirstOrDefault();

            return sr;
        }

        public IList<SubletModel> GetSublets()
        {
            return _context.Sublets.ToList();
        }

        public FullSubletModel GetFullSublet(int id)
        {
            SubletModel sm = _context.Sublets.Where(s => s.ID == id).FirstOrDefault();
            SubletDataEntity sde = _context.SubletData.Where(sd => sd.SubletID == id && sd.Email.Equals(sm.Email)).FirstOrDefault();

            List<string> tags = (from t in _context.Tags
                                          join ti in _context.TagIndex on t.TagID equals ti.ID into t_ti
                                          from s in t_ti.DefaultIfEmpty()
                                          where t.SubletID == id
                                          select s.Tag ).ToList();
            RoommateEntity[] roommates = _context.Roommates.Where(r => r.SubletID == id).ToArray();
            FullSubletModel fsm = _mapper.Map(sm, sde, tags.ToArray(), roommates);
            return fsm;
        }

        public SubletModel[] GetSaved(string email)
        {
            List<SubletModel> saved = new List<SubletModel>();
            List<int> ids = _context.SavedSublets.Where(ss => ss.Email.Equals(email)).Select(ss => ss.SubletID).ToList();
            foreach(var id in ids)
            {
                saved.Add(GetSublet(id));
            }
            return saved.ToArray();
        }

        public SubletModel[] GetPosted(string email)
        {
            return _context.Sublets.Where(s => s.Email.Equals(email)).ToArray();
        }

        public int CreateSublet(FullSubletModel fsm)
        {
            try
            {
                SubletDataEntity sde = _mapper.ExtractDataEntity(fsm);
                SubletModel sm = new SubletModel(fsm.Email, fsm.Address, fsm.Description, fsm.ImageUrl, fsm.Price, fsm.Rating);
               
                var newSub = _context.Sublets.Add(sm);
                _context.SaveChanges();

                sde.SubletID = newSub.Entity.ID;
                fsm.ID = newSub.Entity.ID;
                _context.SubletData.Add(sde);
                _context.SaveChanges();

                UpdateTags(fsm);
                CreateRoommates(fsm);

                SubletType esSublet = new SubletType {
                    ID = fsm.ID,
                    Address = fsm.Address,
                    Description = fsm.Description,
                    Tags = fsm.Tags
                };
                _elastic.IndexSublet(esSublet);

                return newSub.Entity.ID;
                
            } catch(DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public JObject DeleteSublet(int id)
        {
            try
            {
                foreach (var t in _context.Tags.Where(t => t.SubletID == id).ToList())
                {
                    _context.Tags.Remove(t);
                }
                _context.SaveChanges();
                foreach (var s in _context.Sublets.Where(t => t.ID == id).ToList())
                {
                    _context.Sublets.Remove(s);
                }
                foreach (var d in _context.SubletData.Where(t => t.SubletID == id).ToList())
                {
                    _context.SubletData.Remove(d);
                }
                foreach (var s in _context.SavedSublets.Where(t => t.SubletID == id).ToList())
                {
                    _context.SavedSublets.Remove(s);
                }
                foreach (var r in _context.Roommates.Where(t => t.SubletID == id).ToList())
                {
                    _context.Roommates.Remove(r);
                }
                _context.SaveChanges();
                _elastic.DeleteSublet(id);
                dynamic jsonResult = new JObject();
                jsonResult.Result = "Success";
                jsonResult.SubletID = id;
                return jsonResult;
            } catch (DbUpdateException e)
            {
                dynamic jsonResult = new JObject();
                jsonResult.Result = "Failed";
                jsonResult.Error = "DbUpdateException: " + e.ToString();
                return jsonResult;
            }
        }

        internal JsonResult Filter(FilterParameters param)
        {
            IList<SubletModel> sm = GetSublets();
            if (param.MinPrice != -1)
                foreach (var s in _context.Sublets.Where(s => s.Price < param.MinPrice))
                    sm.Remove(s);
            if (param.MaxPrice != -1)
                foreach (var s in _context.Sublets.Where(s => s.Price > param.MaxPrice))
                    sm.Remove(s);
            if (param.MinRating != -1)
                foreach (var s in _context.Sublets.Where(s => s.Rating < param.MinRating))
                    sm.Remove(s);
            if (param.MaxRating != -1)
                foreach (var s in _context.Sublets.Where(s => s.Rating > param.MaxRating))
                    sm.Remove(s);
            if (param.IsFurnished != -1)
            {
                if (param.IsFurnished > 0)
                    foreach (var s in _context.SubletData.Where(s => s.IsFurnished == false))
                        sm.Remove(GetSublet(s.SubletID));
                else 
                    foreach (var s in _context.SubletData.Where(s => s.IsFurnished == true))
                        sm.Remove(GetSublet(s.SubletID));
            }
            if (param.Tags.Any())
            {
                foreach (var t in param.Tags)
                {
                    foreach (var s in _context.TagIndex.Where(s => !s.Tag.Equals(t)))
                        sm.Remove(GetSublet(s.ID));
                }
            }
            return new JsonResult(sm);
        }

        public void CreateRoommates(FullSubletModel fsm)
        {
            try
            {
                foreach (RoommateEntity r in fsm.Roommates)
                {
                    r.SubletID = fsm.ID;
                    _context.Roommates.Add(r);
                    _context.SaveChanges();
                }
            }
            catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public int UpdateSublet(int id, FullSubletModel fsm)
        {
            try
            {
                FullSubletModel oldFsm = GetFullSublet(id);
                fsm.Email = oldFsm.Email;
                fsm.ID = oldFsm.ID;

                _mapper.FillNulls(oldFsm, fsm);

                SubletDataEntity sde = _mapper.ExtractDataEntity(fsm);
                SubletModel sm = new SubletModel(fsm.Email, fsm.Address, fsm.Description, fsm.ImageUrl, fsm.Price, fsm.Rating);
                SubletModel oldSm = _context.Sublets.Where(s => s.ID == id).FirstOrDefault();
                oldSm.Address = sm.Address;
                oldSm.Description = sm.Description;
                oldSm.Price = sm.Price;
                oldSm.Rating = sm.Rating;
                oldSm.ImageUrl = sm.ImageUrl;

                _context.Sublets.Update(oldSm);
                _context.SaveChanges();

                SubletDataEntity oldSde = _context.SubletData.Where(sd => sd.SubletID == id).FirstOrDefault();
                oldSde.SubletID = id;
                oldSde.Email = sde.Email;
                oldSde.IsFurnished = sde.IsFurnished;
                oldSde.Description = sde.Description;
                oldSde.OpenHouse = sde.OpenHouse;

                _context.SubletData.Update(oldSde);
                _context.SaveChanges();


                UpdateTags(fsm);
                UpdateRoommates(fsm);
                SubletType esSublet = new SubletType 
                {
                    ID = fsm.ID,
                    Description = fsm.Description,
                    Address = fsm.Address,
                    Tags = fsm.Tags
                };

                _elastic.IndexSublet(esSublet);
                return id;

            } catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public double UpdateRating(int id, int rating)
        {
            SubletModel sm = GetSublet(id);
            sm.RatingNumber += 1;
            sm.RatingTotal += rating;
            sm.Rating = (double) sm.RatingTotal / sm.RatingNumber;

            _context.Sublets.Update(sm);
            _context.SaveChanges();
            return sm.Rating;
        }

        public void UpdateTags(FullSubletModel fsm)
        {
            try
            {
                if (_context.Tags.Any(t => t.SubletID == fsm.ID))
                {
                    var collection = _context.Tags.Where(t => t.SubletID == fsm.ID).ToArray();
                    // remove all tag associations
                    _context.Tags.RemoveRange(collection);
                    _context.SaveChanges();
                }

                foreach (string s in fsm.Tags)
                {
                    if (!_context.TagIndex.Any(ti => ti.Tag == s))
                    {
                        // tag not found, add tag to index
                        TagIndexEntity tagIndexToAdd = new TagIndexEntity { Tag = s };
                        _context.TagIndex.Add(tagIndexToAdd);
                        _context.SaveChanges();
                    }
                    // add association
                    int tagToAddID = _context.TagIndex.Where(t => t.Tag == s).First().ID;
                    TagEntity tagToAdd = new TagEntity { SubletID = fsm.ID, TagID = tagToAddID };

                    _context.Tags.Add(tagToAdd);
                    _context.SaveChanges();
                }
            } catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public void UpdateRoommates(FullSubletModel fsm)
        {
            try
            {
                if (_context.Roommates.Any(i => i.SubletID == fsm.ID))
                {
                    var oldRoommates = _context.Roommates.Where(i => i.SubletID == fsm.ID).ToArray();
                    _context.Roommates.RemoveRange(oldRoommates);
                    _context.SaveChanges();
                }

                CreateRoommates(fsm);
            }
            catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public void SaveSublet(int id, string email)
        {
            if(!_context.SavedSublets.Any(ss => ss.Email.Equals(email) && ss.SubletID == id))
            {
                _context.SavedSublets.Add(new SavedSubletEntity() { Email = email, SubletID = id });
                _context.SaveChanges();
            } else {
                SavedSubletEntity toUnFav = new SavedSubletEntity() { Email = email, SubletID = id };
                _context.SavedSublets.Attach(toUnFav);
                _context.SavedSublets.Remove(toUnFav);
                _context.SaveChanges();
            }
        }

        public List<JObject> GetTags()
        {
            List<JObject> returnJson = new List<JObject>();
            var tags = _context.TagIndex.Select(t => t.Tag).Distinct().ToList();
            foreach (var t in tags)
            {
                dynamic jsonObject = new JObject();
                jsonObject.label = t;
                jsonObject.value = t;
                returnJson.Add(jsonObject);
            }
            return returnJson;
        }

        public List<JObject> GetAmenities()
        {
            List<JObject> returnJson = new List<JObject>();
            var tags = _context.TagIndex.Where(t => t.IsAmen == true).Distinct().ToList();
            foreach (var t in tags)
            {
                dynamic jsonObject = new JObject();
                jsonObject.label = t;
                jsonObject.value = t;
                returnJson.Add(jsonObject);
            }
            return returnJson;
        }

        public JsonResult Search(string terms)
        {
            if(string.IsNullOrEmpty(terms)) {
                return new JsonResult(new List<FullSubletModel>());
            }

            var response = _elastic.SearchSublets(terms);

            var result = response.Hits
                .Select(fsm => GetFullSublet(int.Parse(fsm.Id)))
                .ToList();

           return new JsonResult(result);
        }
    }
}
