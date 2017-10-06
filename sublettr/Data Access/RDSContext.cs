using System;
using Microsoft.EntityFrameworkCore;
using sublettr.Models;
using sublettr.Entities;

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
        public DbSet<SubletDataEntity> SubletData { get; set; }
        public DbSet<AccountDataEntity> AccountData { get; set; }


        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<SubletModel>().ToTable("Sublets");
            modelbuilder.Entity<AccountModel>().ToTable("Accounts");
            modelbuilder.Entity<SubletDataEntity>().ToTable("SubletData");
            modelbuilder.Entity<AccountDataEntity>().ToTable("AccountData");
        }
    }
}
