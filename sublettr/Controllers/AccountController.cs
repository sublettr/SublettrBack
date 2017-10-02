using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
<<<<<<< 8b7cee6020520c26d864a5e4f589590568d04c9f
using sublettr.Models;
=======
>>>>>>> user models, account controller

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
<<<<<<< 8b7cee6020520c26d864a5e4f589590568d04c9f
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
=======
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
>>>>>>> user models, account controller
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
