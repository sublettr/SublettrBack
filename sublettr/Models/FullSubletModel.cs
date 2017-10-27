using System;
namespace sublettr.Models
{
    public class FullSubletModel
    {
		
        public int id { get; set; }
		public int UserId { get; set; }
        public string Address { get; set; }
		public string Description { get; set; }
		public int Roommates { get; set; }
		public bool IsFurnished { get; set; }
        public DateTime? OpenHouse { get; set; }
        public string[] Tags { get; set; }

        public FullSubletModel(int id, int userId, string address, string description, int roommates, bool isFurnished) : this(id, userId, address)
        {
            Description = description;
            Roommates = roommates;
            IsFurnished = isFurnished;
        }

        public FullSubletModel(int id, int userId, string address)
        {
            this.id = id;
            this.UserId = userId;
            this.Address = address;
        }

        public FullSubletModel()
        {
        }
    }
}
