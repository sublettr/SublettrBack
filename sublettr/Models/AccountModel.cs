using System;
namespace sublettr.Models
{
    public class AccountModel
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public int Grade { get; set; }
        public bool IsSeller { get; set; }


        public AccountModel()
        {
        }

        public AccountModel(int id)
        {
            this.ID = id;
            this.IsSeller = false;
        }

        public AccountModel(int id, string username, string password, string name, int age, string sex, string major, int grade, bool isSeller)
        {
            this.ID = id;
            this.Username = username;
            this.Password = password;
            this.Name = name;
            this.Age = age;
            this.Sex = sex;
            this.Major = major;
            this.Grade = grade;
            this.IsSeller = isSeller;
        }

    }

}
