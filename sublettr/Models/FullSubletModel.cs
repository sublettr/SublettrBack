using System;
namespace sublettr.Models
{
    public class FullSubletModel
    {
		
		public int userId { get; set; }
		public int id { get; set; }
        public string address { get; set; }
		public string description { get; set; }
		public int roommates { get; set; }
		public bool isFurnished { get; set; }
        
        public FullSubletModel(int userId, int id, string address, string description, int roommates, bool isFurnished)
        {
            this.userId = userId;
            this.id = id;
            this.address = address;
            this.description = description;
            this.roommates = roommates;
            this.isFurnished = isFurnished;
        }

        public FullSubletModel(int userId, int id, string address)
        {
            this.userId = userId;
            this.id = id;
            this.address = address;
        }
    }
}
