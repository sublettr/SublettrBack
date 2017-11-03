
﻿using System;
namespace sublettr.Models
{
    public class FullSubletModel
    {
		
        public int ID { get; set; }
		public string Email { get; set; }
        public string Address { get; set; }
		public string Description { get; set; }
		public int Roommates { get; set; }
		public bool IsFurnished { get; set; }
        public DateTime? OpenHouse { get; set; }
        public string[] Tags { get; set; }
        public string[] ImageUrls { get; set; }
        // roommate thing

        public FullSubletModel(int id, string email, string address, string description, int roommates, bool isFurnished, string[] tags, string[] imageUrls) : this(id, email, address)
        {
            Description = description;
            Roommates = roommates;
            IsFurnished = isFurnished;
            Tags = tags;
            ImageUrls = imageUrls;
        }

        public FullSubletModel(int id, string email, string address)
        {
            this.ID = id;
            this.Email = email;
            this.Address = address;
        }

        public FullSubletModel()
        {
        }
    }
}

