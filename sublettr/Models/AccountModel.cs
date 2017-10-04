using System;
namespace sublettr.Models
{
	public class AccountModel
	{
		public int id { get; set; }
		public string username { get; set; }

		public AccountModel(int id, string username)
		{
			this.id = id;
			this.username = username;
		}
	}
}
