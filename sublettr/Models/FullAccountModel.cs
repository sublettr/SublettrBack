using System;
namespace sublettr.Models
{
    public class FullAccountModel
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public string Year { get; set; }
        public bool IsSeller { get; set; }

        public FullAccountModel(int id)
        {
            this.ID = id;
            this.IsSeller = false;
        }

        public FullAccountModel(int id, string username, int age, string sex, string major, int year, bool isSeller)
        {
            this.ID = id;
            this.Username = username;
            this.Age = age;
            this.Sex = sex;
            this.Major = major;
            this.Year = year;
            this.IsSeller = isSeller;
        }

    }
    
}
