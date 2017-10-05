using System;
namespace sublettr.Models
{
	public class AccountModel
	{
		public int Id { get; set; }
		public string Username { get; set; }

		public AccountModel(int id, string username)
		{
			this.Id = id;
			this.Username = username;
		}
	}
}
