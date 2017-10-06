using System;
namespace sublettr.Models
{
    public class UserModel
    {
        public int ID { get; set; }
		public string Username { get; set; }

        public UserModel()
        {
        }

        public UserModel(int id, string username)
        {
            this.ID = id;
            this.Username = username;
        }
    }
}
