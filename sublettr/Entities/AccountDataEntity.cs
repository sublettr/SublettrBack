using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class AccountDataEntity
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public int Grade { get; set; }
        public bool IsSeller { get; set; }

    }
}
