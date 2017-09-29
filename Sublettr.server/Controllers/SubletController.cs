using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sublettr.core.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sublettr.server.Controllers
{
    [Route("app/[controller]")]
    public class SubletController : Controller
    {
        [Produces("application/json")]
        [HttpGet("/sublet/{id}")]
        public Sublet GetSublet(int id)
        {
            return new Sublet();
        } 
    }
}
