using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class SubletDataEntity
    {
        public int SubletID { get; set; }
        public int UserID { get; set; }
        public string Description { get; set; }
        public int Roommates { get; set; }
        public bool Furnished { get; set; }

    }
}
