using System;
using Microsoft.EntityFrameworkCore;

namespace sublettr.DataAccess
{
	public class RDSContext : DbContext
	{
		//public RDSContext()
		//  : base(GetRDSConnectionString())
		//{
		//}

		public static RDSContext Create()
		{
			return new RDSContext();
		}
	}
}
