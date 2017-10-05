using System;
namespace sublettr.Models
{
    public class FullAccountModel
    {

        public FullAccountModel(int id, string username, string password, string name, int age, string sex, string major, int year, bool isSeller)
        {
            this.Id = id;
            this.Username = username;
            this.Password = password;
            this.Name = name;
            this.Age = age;
            this.Sex = sex;
            this.Major = major;
            this.Year = year;
            this.IsSeller = isSeller;
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public int Year { get; set; }
        public bool IsSeller { get; set; }
    }
    
}
