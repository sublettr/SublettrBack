using System;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace sublettr.DataAccess
{
	public class RDSContext : DbContext
	{
		public RDSContext()
		  : base(GetRDSConnectionString())
		{
		}

		public static RDSContext Create()
		{
			return new RDSContext();
		}
	}
}
