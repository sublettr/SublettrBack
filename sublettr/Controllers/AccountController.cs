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
        public IEnumerable<UserModel> Get()
        {
            return new UserModel[] {  };
        }

        // GET api/account/5
        [HttpGet("{id}")]
        public UserModel Get(int id)
        {
            return new UserModel(1, "myUserName");
        }

		// GET api/account/full/5
		[HttpGet("full/{id}")]
		public UserModel GetFull(int id)
		{
			return new UserModel(1, "myUserName");
		}

        // POST api/account
        [HttpPost]
        public void Post([FromBody]UserModel value)
        {
        }

        // PUT api/account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]UserModel value)
        {
        }

        // DELETE api/account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
