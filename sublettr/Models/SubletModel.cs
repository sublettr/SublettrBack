﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Models
{
    public class SubletModel
    {
        [Key]
        public int ID { get; set; }
		public int UserID { get; set; }
		public string Address { get; set; }
		public string Description { get; set; }

        public SubletModel()
        {
        }

        public SubletModel(int userId, string address)
        {
            this.UserID = userId;
            this.Address = address;
            this.Description = "New Sublet";
        }

        public SubletModel(int userId, string address, string desc)
        {
            this.UserID = userId;
            this.Address = address;
            this.Description = desc;
        }

    }
}
