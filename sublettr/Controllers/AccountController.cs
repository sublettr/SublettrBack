using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sublettr.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        // GET: api/account
        [HttpGet]
        public IEnumerable<AccountModel> Get()
        {
            return new AccountModel[] {  };
        }

        // GET api/account/5
        [HttpGet("{id}")]
        public AccountModel Get(int id)
        {
            return new AccountModel(1, "myUserName");
        }

		// GET api/account/full/5
		[HttpGet("full/{id}")]
        public AccountModel GetFull(int id)
		{
            return new AccountModel(1, "myUserName");
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
