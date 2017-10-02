using System;
namespace sublettr.Models
{
    public class FullAccountModel
    {

        public FullAccountModel(int id)
        {
            this.id = id;
            this.isSeller = false;
        }

        public FullAccountModel(int id, string username, int age, string sex, string major, int year, bool isSeller)
        {
            this.id = id;
            this.username = username;
            this.age = age;
            this.sex = sex;
            this.major = major;
            this.year = year;
            this.isSeller = isSeller;
        }

        public int id { get; set; }
        public string username { get; set; }
        public int age { get; set; }
        public string sex { get; set; }
        public string major { get; set; }
        public int year { get; set; }
        public bool isSeller { get; set; }
    }
    
}
