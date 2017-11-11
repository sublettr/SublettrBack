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
        public DbSet<SubletDataEntity> SubletData { get; set; }
        public DbSet<TagIndexEntity> TagIndex { get; set; }
        public DbSet<TagEntity> Tags { get; set; }
        public DbSet<SavedSubletEntity> SavedSublets { get; set; }
        public DbSet<RoommateEntity> Roommates { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<SubletModel>().ToTable("Sublets");
            modelBuilder.Entity<SubletDataEntity>().ToTable("SubletData");
            modelBuilder.Entity<TagIndexEntity>().ToTable("TagIndex");
            modelBuilder.Entity<TagEntity>().ToTable("Tags");
            modelBuilder.Entity<SavedSubletEntity>().ToTable("SavedSublets");
            modelBuilder.Entity<RoommateEntity>().ToTable("Roommates");

            // Define composite key.
            modelBuilder.Entity<TagEntity>()
                .HasKey(t => new { t.TagID, t.SubletID });
                
            modelBuilder.Entity<SavedSubletEntity>()
                .HasKey(s => new { s.Email, s.SubletID });
        }
    }
}
