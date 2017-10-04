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
            return new SubletModel[] { new SubletModel(1, 1, "Test Sublet") , new SubletModel(1, 1, "Test Sublet") };
        }

        // GET api/sublet/5
        [HttpGet("{id}")]
        public SubletModel Get(int id)
        {
            return new SubletModel(1, 1, "Test Sublets");
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
