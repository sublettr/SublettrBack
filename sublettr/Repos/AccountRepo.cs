using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using sublettr.DataAccess;
using sublettr.Entities;
using sublettr.Mappers;
using sublettr.Models;

namespace sublettr.Repos
{
    public class AccountRepo
    {

        private readonly IdentityContext _context;
        private readonly AccountMapper _mapper;

        public AccountRepo(IdentityContext context, AccountMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        internal ApplicationUser GetAccount(string email)
        {
            ApplicationUser ar = _context.AppUser.Where(a => a.Email.Equals(email)).FirstOrDefault();
            return ar;
        }

        internal IList<ApplicationUser> GetAccounts()
        {
            return _context.AppUser.ToList();
        }

        internal void RemoveAccount(ApplicationUser am)
        {
            _context.AppUser.Remove(am);
            _context.SaveChanges();
        }

        internal void Update(string email, ApplicationUser am)
        {
            ApplicationUser oldAccount = GetAccount(email);
            //foreach (PropertyInfo prop in typeof(AccountModel).GetProperties())
            //{
            //    Console.WriteLine(prop.GetValue(am, null));
            //}
            oldAccount.Email = am.Email;
            oldAccount.Name = am.Name;
            oldAccount.Age = am.Age;
            oldAccount.Sex = am.Sex;
            oldAccount.Major = am.Major;
            oldAccount.Grade = am.Grade;
            oldAccount.IsSeller = am.IsSeller;

            _context.Update(oldAccount);
            _context.SaveChanges();
        }
    }
}
