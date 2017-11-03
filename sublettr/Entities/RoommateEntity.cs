using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class RoommateEntity
    {
        public int Id { get; set; }
        public int SubletID { get; set; }
        public string Major { get; set; }
        public int Age { get; set; }
        public string Grade { get; set; }
        public string Sex { get; set; }

        public RoommateEntity()
        {
        }
    }
}
