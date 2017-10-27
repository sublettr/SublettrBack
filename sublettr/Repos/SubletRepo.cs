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
            SubletDataEntity sde = _context.SubletData.Where(sd => sd.SubletID == id && sd.UserID == sm.UserID).FirstOrDefault();
            List<string> tags = (from t in _context.Tags
                                          join ti in _context.TagIndex on t.tagID equals ti.ID into t_ti
                                          from s in t_ti.DefaultIfEmpty()
                                          where t.subletID == id
                                          select s.Tag ).ToList();
            FullSubletModel fsm = _mapper.Map(sm, sde, tags.ToArray());
            return fsm;
        }

        public int CreateSublet(FullSubletModel fsm)
        {
            try
            {
                SubletDataEntity sde = _mapper.ExtractDataEntity(fsm);
                SubletModel sm = new SubletModel(fsm.UserId, fsm.Address, fsm.Description);

                var newSub = _context.Sublets.Add(sm);
                _context.SaveChanges();

                sde.SubletID = newSub.Entity.ID;
                _context.SubletData.Add(sde);
                _context.SaveChanges();

                UpdateTags(fsm);

                return newSub.Entity.ID;
                
            } catch(DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }

        public int UpdateSublet(int id, FullSubletModel fsm)
        {
            try
            {
                
                SubletDataEntity sde = _mapper.ExtractDataEntity(fsm);
                SubletModel sm = new SubletModel(fsm.UserId, fsm.Address, fsm.Description);

                SubletModel oldSm = _context.Sublets.Where(s => s.ID == id).FirstOrDefault();
                oldSm.ID = id;
                oldSm.Address = sm.Address;
                oldSm.Description = sm.Description;
                oldSm.UserID = sm.UserID;

                _context.Sublets.Update(oldSm);
                _context.SaveChanges();

                SubletDataEntity oldSde = _context.SubletData.Where(sd => sd.SubletID == id).FirstOrDefault();
                oldSde.SubletID = id;
                oldSde.UserID = sde.UserID;
                oldSde.Roommates = sde.Roommates;
                oldSde.isFurnished = sde.isFurnished;
                oldSde.Description = sde.Description;
                oldSde.OpenHouse = sde.OpenHouse;

                _context.SubletData.Update(oldSde);
                _context.SaveChanges();

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
                // remove all tag associations
                TagEntity tagToDelete = new TagEntity { subletID = fsm.id };
                _context.Tags.Attach(tagToDelete);
                _context.Tags.Remove(tagToDelete);
                _context.SaveChanges();

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
                    TagEntity tagToAdd = new TagEntity { subletID = fsm.id, tagID = tagToAddID };

                    _context.Tags.Add(tagToAdd);
                    _context.SaveChanges();
                }
            } catch (DbUpdateException e)
            {
                throw new DbUpdateException("error", e);
            }
        }
    }
}
