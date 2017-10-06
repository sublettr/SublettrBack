using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class UserDataEntity
    {
        public int UserID { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public string Year { get; set; }
        public bool Seller { get; set; }

    }
}
