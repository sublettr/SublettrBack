using System;
using System.Collections.Generic;
using System.Linq;
using sublettr.DataAccess;
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

        public AccountModel GetAccount(int id)
        {
            AccountModel ar = _context.Accounts.Where(a => a.ID == id).FirstOrDefault();
            return ar;
        }

        public IList<AccountModel> GetAccounts()
        {
            return _context.Accounts.ToList();
        }
    }
}
