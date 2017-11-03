using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Models
{
    public class SubletModel
    {
        [Key]
        public int ID { get; set; }
        public string Email { get; set; }
		public string Address { get; set; }
		public string Description { get; set; }

        public SubletModel()
        {
        }

        public SubletModel(string email, string address)
        {
            this.Email = email;
            this.Address = address;
            this.Description = "New Sublet";
        }

        public SubletModel(string email, string address, string desc)
        {
            this.Email = email;
            this.Address = address;
            this.Description = desc;
        }

    }
}
