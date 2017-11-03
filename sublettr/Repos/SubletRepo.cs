using Microsoft.EntityFrameworkCore;
using sublettr.DataAccess;
using sublettr.Entities;
using sublettr.Mappers;
using sublettr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Repos
{
    public class SubletRepo
    {

        private readonly RDSContext _context;
        private readonly SubletMapper _mapper;

        public SubletRepo(RDSContext context, SubletMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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
           List<string> imageUrls = (from i in _context.SubletImages
                                      where i.SubletID == id
                                      select i.ImageUrl).ToList();
            RoommateEntity[] roommates = _context.Roommates.Where(r => r.SubletID == id).ToArray();
            FullSubletModel fsm = _mapper.Map(sm, sde, tags.ToArray(), imageUrls.ToArray(), roommates);
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
                SubletModel sm = new SubletModel(fsm.Email, fsm.Address, fsm.Description);

                var newSub = _context.Sublets.Add(sm);
                _context.SaveChanges();

                sde.SubletID = newSub.Entity.ID;
                fsm.ID = newSub.Entity.ID;
                _context.SubletData.Add(sde);
                _context.SaveChanges();

                UpdateTags(fsm);
                CreateImageUrls(fsm);
                CreateRoommates(fsm);
                return newSub.Entity.ID;
                
            } catch(DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public void CreateImageUrls(FullSubletModel fsm)
        {
            try
            {
                foreach (string s in fsm.ImageUrls)
                {
                    SubletImageEntity newSubletImage = new SubletImageEntity { ImageUrl = s, SubletID = fsm.ID };
                    _context.SubletImages.Add(newSubletImage);
                    _context.SaveChanges();
                }
            }
            catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public void CreateRoommates(FullSubletModel fsm)
        {
            try
            {
                foreach (RoommateEntity r in fsm.Roommates)
                {
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
                
                SubletDataEntity sde = _mapper.ExtractDataEntity(fsm);
                SubletModel sm = new SubletModel(fsm.Email, fsm.Address, fsm.Description);

                SubletModel oldSm = _context.Sublets.Where(s => s.ID == id).FirstOrDefault();
                oldSm.ID = id;
                oldSm.Address = sm.Address;
                oldSm.Description = sm.Description;
                oldSm.Email = sm.Email;

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
                UpdateImageUrls(fsm);
                UpdateRoommates(fsm);
                return id;

            } catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
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
      
      
        public void UpdateImageUrls(FullSubletModel fsm)
        {
            try
            {
                if (_context.SubletImages.Any(i => i.SubletID == fsm.ID))
                {
                    var oldImageUrls = _context.SubletImages.Where(i => i.SubletID == fsm.ID).ToArray();
                    _context.SubletImages.RemoveRange(oldImageUrls);
                    _context.SaveChanges();
                }

                CreateImageUrls(fsm);
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
            }
        }

        public void UnSaveSublet(int id, string email)
        {
            if(_context.SavedSublets.Any(ss => ss.Email.Equals(email) && ss.SubletID == id))
            {
                SavedSubletEntity toUnFav = new SavedSubletEntity() { Email = email, SubletID = id };
                _context.SavedSublets.Attach(toUnFav);
                _context.SavedSublets.Remove(toUnFav);
                _context.SaveChanges();
            }
        }
    }
}
