using System;
namespace sublettr.Models
{
    public class UserModel
    {
<<<<<<< 8b7cee6020520c26d864a5e4f589590568d04c9f
		
        public int id { get; set; }
		public string username { get; set; }

        public UserModel(int id, string username)
        {
            this.id = id;
            this.username = username;
        }
=======
        public UserModel()
        { }
            public int id { get; set; }
            public string username { get; set; }
>>>>>>> user models, account controller
    }
}
