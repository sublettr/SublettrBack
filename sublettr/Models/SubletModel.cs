using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Models
{
    public class SubletModel
    {
        public int ID { get; set; }
		public int UserId { get; set; }
		public string Address { get; set; }
		public string Description { get; set; }

        public SubletModel()
        {
        }

        public SubletModel(int userId, string address)
        {
            this.UserId = userId;
            this.Address = address;
            this.Description = "New Sublet";
        }

        public SubletModel(int userId, string address, string desc)
        {
            this.UserId = userId;
            this.Address = address;
            this.Description = desc;
        }

    }
}
