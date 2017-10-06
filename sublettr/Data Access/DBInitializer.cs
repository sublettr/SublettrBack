using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using sublettr.Models;
// Initializer to test db is working
namespace sublettr.DataAccess
{
    public class DBInitializer
    {

        public static void Initialize(RDSContext context)
        {
            context.Database.EnsureCreated();

            //// check if already initialized
            //if (IsSeeded(context))
            //{
            //    return;
            //}

            //var sublets = new SubletModel[]
            //{
            //    new SubletModel(1, "123 nowhere dr."),
            //    new SubletModel(2, "345 somehwere ln.")
            //};

            //foreach (SubletModel sublet in sublets)
            //{
            //    context.Sublets.Add(sublet);
            //}
            //context.SaveChanges();
        }

        private static bool IsSeeded(RDSContext context)
        {
            return context.Users.Any() || context.Sublets.Any();

        }
    }
}
