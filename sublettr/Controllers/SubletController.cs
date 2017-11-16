using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using sublettr.Models;
using sublettr.DataAccess;
using sublettr.Repos;
using sublettr.Entities;
using Newtonsoft.Json.Linq;

namespace sublettr.Controllers
{
    [Route("api/[controller]")]
    public class SubletController : Controller
    {
        private SubletRepo _subletRepo;
        public SubletController(SubletRepo sr)
        {
            _subletRepo = sr;
        }

        // GET api/sublet  
        [HttpGet]
        public IEnumerable<SubletModel> Get()
        {
            return _subletRepo.GetSublets();
        }

        // GET api/sublet/5
        [HttpGet("{id}")]
        public SubletModel Get(int id)
        {
            return _subletRepo.GetSublet(id);
        }

        // GET api/sublet/full/5
        [HttpGet("full/{id}")]
        public FullSubletModel GetFull(int id)
        {
            return _subletRepo.GetFullSublet(id);
        }

        // POST api/sublet/full
        [HttpPost("full")]
        public int? PostFull([FromBody] FullSubletModel value)
        {
            if (!ModelState.IsValid)
            {
                Console.WriteLine("Model state is invalid");
                return -1;
            }
            else
            {
                    return _subletRepo.CreateSublet(value);
            }
        }

        // PUT api/sublet/full/5
        [HttpPut("full/{id}")]
        public int Put(int id, [FromBody]FullSubletModel value)
        {
            if (!ModelState.IsValid)
            {
                Console.WriteLine("Model state is invalid");
                return -1;
            }
            else
            {
                return _subletRepo.UpdateSublet(id, value);
            }
        }

        // DELETE api/sublet/5
        [HttpDelete("{id}")]
        public JObject Delete(int id)
        {
            if (Get(id) == null)
            {
                dynamic failed = new JObject();
                failed.Result = "Failed";
                failed.Error = "No sublet with the ID specified";
                return failed;
            }
            return _subletRepo.DeleteSublet(id);
        }

        [HttpPost("/save/{email}/{id}")]
        public void Save(string email, int id)
        {
            _subletRepo.SaveSublet(id, email);
        }

        [HttpGet("/tags")]
        public List<JObject> GetTags()
        {
            return _subletRepo.GetTags();
        }

        // POST api/sublet/rate/3/5
        [HttpPost("rate/{id}/{rating}")]
        public double PostRating(int id, int rating)
        {
            if (!ModelState.IsValid)
            {
                Console.WriteLine("Model state is invalid");
                return -1;
            }
            else
            {
                return _subletRepo.UpdateRating(id, rating);
            }
        }

        // POST api/sublet/filter/
        [HttpPost("filter/")]
        public JsonResult Filter([FromBody]FilterParameters param)
        {
            return Json(param);
        }
    }
}
