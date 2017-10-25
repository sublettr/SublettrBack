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


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SubletModel>().ToTable("Sublets");
            modelBuilder.Entity<AccountModel>().ToTable("Accounts");
            modelBuilder.Entity<SubletDataEntity>().ToTable("SubletData");
            modelBuilder.Entity<AccountDataEntity>().ToTable("AccountData");
        }
    }
}
