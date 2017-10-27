﻿using System;
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
        public DbSet<TagIndexEntity> TagIndex { get; set; }
        public DbSet<TagEntity> Tags { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SubletModel>().ToTable("Sublets");
            modelBuilder.Entity<AccountModel>().ToTable("Accounts");
            modelBuilder.Entity<SubletDataEntity>().ToTable("SubletData");
            modelBuilder.Entity<AccountDataEntity>().ToTable("AccountData");
            modelBuilder.Entity<TagIndexEntity>().ToTable("TagIndex");
            modelBuilder.Entity<TagEntity>().ToTable("Tags");
        }
    }
}
