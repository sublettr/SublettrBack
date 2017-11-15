using System.ComponentModel.DataAnnotations;
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
        public double Price { get; set; }
        public double Rating { get; set; }
        public int RatingTotal { get; set; }
        public int RatingNumber { get; set; }


        public SubletModel()
        {
        }

        public SubletModel(string email, string address, double price)
        {
            this.Email = email;
            this.Address = address;
            this.Description = "New Sublet";
            Price = price;
        }

        public SubletModel(string email, string address, string desc, double price, double rating) : this(email, address, price)
        {
            this.Description = desc;
            this.Rating = rating;
        }

        public SubletModel(string email, string address, string desc, string imageUrl, double price, double rating) : this(email, address, price)
        {
            this.Description = desc;
            this.ImageUrl = imageUrl;
            this.Rating = Rating;
        }

    }
}
