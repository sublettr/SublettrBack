using System;
using Microsoft.EntityFrameworkCore;
using sublettr.Models;

namespace sublettr.DataAccess
{
    public class RDSContext : DbContext
    {
        public RDSContext(DbContextOptions<RDSContext> options)
          : base(options)
        {
        }

        public DbSet<SubletModel> Sublets { get; set; }
        public DbSet<AccountModel> Accounts { get; set; }

	}
}
