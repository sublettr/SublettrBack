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

            //var accounts = new AccountModel[] {
            //    new AccountModel(1, "jnewlin"),
            //    new AccountModel(2, "jvanauke"),
            //    new AccountModel(3, "jwlehman"),
            //    new AccountModel(4, "vieck")
            //};

            //foreach (AccountModel account in accounts)
            //{
            //    context.Accounts.Add(account);
            //}
            //foreach (SubletModel sublet in sublets)
            //{
            //    context.Sublets.Add(sublet);
            //}
            //context.SaveChanges();
        }

        private static bool IsSeeded(RDSContext context)
        {
            return context.Accounts.Any() || context.Sublets.Any();
        }
    }
}
