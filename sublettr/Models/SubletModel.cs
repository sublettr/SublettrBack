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
        public float Price { get; set; }

        public SubletModel()
        {
        }

        public SubletModel(string email, string address, float price)
        {
            this.Email = email;
            this.Address = address;
            this.Description = "New Sublet";
            Price = price;
        }

        public SubletModel(string email, string address, string desc, float price) : this(email, address, price)
        {
            this.Description = desc;
        }

        public SubletModel(string email, string address, string desc, string imageUrl, float price) : this(email, address, price)
        {
            this.Description = desc;
            this.ImageUrl = imageUrl;
        }

    }
}
