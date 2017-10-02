using System;
namespace sublettr.Models
{
    public class SubletDataModel
    {
		
		public int userId { get; set; }
		public int id { get; set; }
		public string description { get; set; }
		public int roommates { get; set; }
		public bool isFurnished { get; set; }
        
        public SubletDataModel(int userId, int id, string description, int roommates, bool isFurnished)
        {
            this.userId = userId;
            this.id = id;
            this.description = description;
            this.roommates = roommates;
            this.isFurnished = isFurnished;
        }

        public SubletDataModel(int userId, int id)
        {
            this.userId = userId;
            this.id = id;
        }
    }
}
