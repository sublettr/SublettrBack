using System;
using System.Collections.Generic;
using System.Linq;
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

        internal void PostAccount(AccountModel model)
        {
            _context.Accounts.AddAsync(model);
            _context.SaveChangesAsync();
        }

        internal void RemoveAccount(AccountModel am)
        {
            _context.Accounts.Remove(am);
            _context.SaveChanges();
        }

        internal void Update(int id, AccountModel am)
        {
            // doesn't work right now
            _context.Update(am);
            _context.SaveChanges();
        }
    }
}
