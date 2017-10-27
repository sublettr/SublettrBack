using System;
namespace sublettr.Models
{
    public class FullSubletModel
    {
		
		public int UserId { get; set; }
        public int id { get; set; }
        public string Address { get; set; }
		public string Description { get; set; }
		public int Roommates { get; set; }
		public bool IsFurnished { get; set; }
        
        public FullSubletModel(int subletId, int userId, int id, string address, string description, int roommates, bool isFurnished)
        {
            this.id = subletId;
            this.UserId = userId;
            this.Address = address;
            this.Description = description;
            this.Roommates = roommates;
            this.IsFurnished = isFurnished;
        }

        public FullSubletModel(int id, int userId, string address)
        {
            this.id = id;
            this.UserId = userId;
            this.Address = address;
        }
    }
}
