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
        // GET api/values
        [HttpGet]
        public IEnumerable<SubletModel> Get()
        {
            return new SubletModel[] { };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public SubletModel Get(int id)
        {
            return new SubletModel(1, "Test Sublet");
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]SubletModel value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]SubletModel value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
