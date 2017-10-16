using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sublettr.DataAccess;
using sublettr.Models;
using sublettr.Repos;

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly AccountRepo _accountRepo;
        public AccountController(AccountRepo ar)
		{
            _accountRepo = ar;
		}

        // GET: api/account
        [HttpGet]
        public IEnumerable<AccountModel> Get()
        {
            return _accountRepo.GetAccounts();
        }

        // GET api/account/5
        [HttpGet("{id}")]
        public AccountModel Get(int id)
        {
            return _accountRepo.GetAccount(id);
        }

        // POST api/account
        [HttpPost]
        public void Post([FromBody]AccountModel value)
        {
            if (Get(value.ID) == null)
            {
                _accountRepo.PostAccount(value);
            } else {
                // Account already exists
            }
        }

        // PUT api/account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]AccountModel value)
        {
            if (ModelState.IsValid)
            {
                _accountRepo.Update(id, value);
            } else {
                // model is invalid
            }

        }

        // DELETE api/account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            AccountModel am = Get(id);
            if (am != null)
            {
                _accountRepo.RemoveAccount(am);
            }
        }
    }
}
