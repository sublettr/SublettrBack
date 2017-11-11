﻿using System.ComponentModel.DataAnnotations;
using sublettr.Entities;

namespace sublettr.Models
{
    public class SubletModel
    {
        [Key]
        public int ID { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }

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

        public SubletModel(string email, string address, string desc, string imageUrl)
        {
            this.Email = email;
            this.Address = address;
            this.Description = desc;
            this.ImageUrl = imageUrl;
        }

    }
}
