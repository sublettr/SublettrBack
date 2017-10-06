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
            FullSubletModel fsm = _mapper.Map(sm, sde);
            return fsm;
        }
    }
}
