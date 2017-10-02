using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sublettr.Models;

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class SubletController : Controller
    {
        // GET api/sublet
        [HttpGet]
        public IEnumerable<SubletModel> Get()
        {
            return new SubletModel[] { };
        }

        // GET api/sublet/5
        [HttpGet("{id}")]
        public SubletModel Get(int id)
        {
<<<<<<< 8b7cee6020520c26d864a5e4f589590568d04c9f
            return new SubletModel(1, 1, "Test Address");
=======
            return new SubletModel(1, 1, "Test Sublet");
>>>>>>> user models, account controller
        }

        // GET api/sublet/full/5
        [HttpGet("full/{id}")]
        public FullSubletModel GetFull(int id)
        {
            return new FullSubletModel(1, 1, "test Address");
        }

        // POST api/sublet/full
        [HttpPost("full")]
        public void PostFull([FromBody]FullSubletModel value)
        {
        }

        // PUT api/sublet/full/5
        [HttpPut("full/{id}")]
        public void Put(int id, [FromBody]FullSubletModel value)
        {
        }

        // DELETE api/sublet/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
