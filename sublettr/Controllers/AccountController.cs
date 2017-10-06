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

		// GET api/account/full/5
		[HttpGet("full/{id}")]
        public FullAccountModel GetFull(int id)
		{
            return new FullAccountModel(1, "john@purdue.edu", "pa$$w0rd", "John Purdue", 22, "Male", "Computer Science", "3", false);
		}

        // POST api/account
        [HttpPost]
        public void Post([FromBody]AccountModel value)
        {
        }

        // PUT api/account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]AccountModel value)
        {
        }

        // DELETE api/account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
