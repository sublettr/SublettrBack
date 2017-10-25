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

        private readonly RDSContext _context;
        private readonly AccountMapper _mapper;

        public AccountRepo(RDSContext context, AccountMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        internal AccountModel GetAccount(int id)
        {
            AccountModel ar = _context.Accounts.Where(a => a.ID == id).FirstOrDefault();
            return ar;
        }

        internal IList<AccountModel> GetAccounts()
        {
            return _context.Accounts.ToList();
        }

        internal AccountModel PostAccount(AccountModel model)
        {
            _context.Accounts.Add(model);
            _context.SaveChanges();
	    return model;
        }

        internal void RemoveAccount(AccountModel am)
        {
            _context.Accounts.Remove(am);
            _context.SaveChanges();
        }

        internal void Update(int id, AccountModel am)
        {
            AccountModel oldAccount = GetAccount(id);
            //foreach (PropertyInfo prop in typeof(AccountModel).GetProperties())
            //{
            //    Console.WriteLine(prop.GetValue(am, null));
            //}
            oldAccount.Username = am.Username;
            oldAccount.Password = am.Password;
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
