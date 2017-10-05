using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sublettr.DataAccess;
using sublettr.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly RDSContext _context;

		public AccountController(RDSContext context)
		{
			_context = context;
		}

        // GET: api/account
        [HttpGet]
        public IEnumerable<AccountModel> Get()
        {
            return _context.Accounts.ToList();
        }

        // GET api/account/5
        [HttpGet("{id}")]
        public AccountModel Get(int id)
        {
            return _context.Accounts.Find(id);
        }

		// GET api/account/full/5
		[HttpGet("full/{id}")]
        public FullAccountModel GetFull(int id)
		{
            return new FullAccountModel(1, "john@purdue.edu", "pa$$w0rd", "John Purdue", 22, "Male", "Computer Science", 3, false);
		}

        // POST api/account
        [HttpPost]
        public void Post([FromBody]AccountModel value)
        {
            _context.Accounts.Add(value);
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
