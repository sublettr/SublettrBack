using System;
using Microsoft.AspNetCore.Identity;
namespace sublettr.Models
{
    public class ApplicationUser : IdentityUser
    {

        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public int Grade { get; set; }
        public bool IsSeller { get; set; }


        public ApplicationUser()
        {
        }
    }
}
