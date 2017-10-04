using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Models
{
    public class SubletModel
    {
       
		public int id { get; set; }
		public int userId { get; set; }
		public string address { get; set; }
		public string description { get; set; }

        public SubletModel(int id, int userId, string address)
        {
            this.userId = userId;
            this.id = id;
            this.address = address;
            this.description = "New Sublet";
        }

        public SubletModel(int id, int userId, string address, string desc)
        {
            this.userId = userId;
            this.id = id;
            this.address = address;
            this.description = desc;
        }

    }
}
