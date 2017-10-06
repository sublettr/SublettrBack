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
        public DbSet<UserModel> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<SubletModel>().ToTable("Sublets");
            modelbuilder.Entity<UserModel>().ToTable("Users");
        }
    }
}
