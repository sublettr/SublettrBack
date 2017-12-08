
using sublettr.Entities;
using System;
namespace sublettr.Models
{
    public class FullSubletModel
    {
		
        public int ID { get; set; }
		public string Email { get; set; }
        public string Address { get; set; }
		public string Description { get; set; }
		public bool IsFurnished { get; set; }
        public DateTime? OpenHouse { get; set; }
        public TagIndexEntity[] Tags { get; set; }
        public RoommateEntity[] Roommates { get; set; }
        public string ImageUrl { get; set; }
        public double Price { get; set; }
        public double Rating { get; set; }

        public FullSubletModel(int id, string email, string address, string description, 
                               RoommateEntity[] roommates, bool isFurnished, TagIndexEntity[] tags, string imageUrl,
                               double price, double rating
                               ) : this(id, email, address, price)
        {
            Description = description;
            Roommates = roommates;
            IsFurnished = isFurnished;
            Tags = tags;
            ImageUrl = imageUrl;
            Rating = rating;
        }

        public FullSubletModel(int id, string email, string address, double price)
        {
            this.ID = id;
            this.Email = email;
            this.Address = address;
            this.Price = price;
        }

        public FullSubletModel()
        {
        }
    }
}

