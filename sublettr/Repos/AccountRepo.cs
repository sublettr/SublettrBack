using System;
using System.Collections;
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
        private readonly ApplicationUserMapper _mapper;

        public AccountRepo(IdentityContext context, ApplicationUserMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        internal ApplicationUser GetAccount(string email)
        {
            ApplicationUser au = _context.AppUser.Where(a => a.Email.Equals(email)).FirstOrDefault();
            return au;
        }

        internal ApplicationUserDataEntity GetAccountMapped(string email)
        {
            ApplicationUser au = _context.AppUser.Where(a => a.Email.Equals(email)).FirstOrDefault();
            ApplicationUserDataEntity aude = _mapper.Map(au);
            return aude;
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
            if (am.Email != null)
            {
                oldAccount.Email = am.Email;
            }
            if (am.Name != null)
            {
                oldAccount.Name = am.Name;
            }
            // Fix age
            if (am.Age != -1)
            {
                oldAccount.Age = am.Age;
            }
            if (am.Sex != null)
            {
                oldAccount.Sex = am.Sex;
            }
            if (am.Major != null)
            {
                oldAccount.Major = am.Major;
            }
            // Fix grade
            if (am.Grade != -1)
            {
                oldAccount.Grade = am.Grade;
            }
            // Fix isseller
            oldAccount.IsSeller = am.IsSeller;


            _context.Update(oldAccount);
            _context.SaveChanges();
        }
    }
}
