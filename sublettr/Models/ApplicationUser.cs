using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
namespace sublettr.Models
{
    public class ApplicationUser : IdentityUser
    {

        public string Name { get; set; }
        [Display(Name = "-1")]
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        [Display(Name = "-1")]
        public int Grade { get; set; }
        [Display(Name = "-1")]
        public bool IsSeller { get; set; }
        public SubletModel[] Saved { get; set; }
        public SubletModel[] Posted { get; set; }


        public ApplicationUser()
        {
        }
    }
}
