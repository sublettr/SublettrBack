using System;
namespace sublettr.Models
{
    public class UserModel
    {
        public int Id { get; set; }
		public string Username { get; set; }

        public UserModel()
        {
        }

        public UserModel(int id, string username)
        {
            this.Id = id;
            this.Username = username;
        }
    }
}
