using System;
namespace sublettr.Models
{
	public class AccountModel
	{
		public int ID { get; set; }
		public string Username { get; set; }

        public AccountModel()
        {
        }

		public AccountModel(int id, string username)
		{
            this.ID = id;
			this.Username = username;
		}
	}
}
