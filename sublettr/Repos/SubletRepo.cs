using sublettr.DataAccess;
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

        public SubletRepo(RDSContext context)
        {
            _context = context;
        }

        public SubletModel getSublet(int id)
        {
            SubletModel sr = _context.Sublets.Where(s => s.ID == id).FirstOrDefault();

            return sr;
        }

        public IList<SubletModel> getSublets()
        {
            return _context.Sublets.ToList();
        }

    }
}
