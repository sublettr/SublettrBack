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
        }

        private static bool IsSeeded(RDSContext context)
        {
            return context.Accounts.Any() || context.Sublets.Any();
        }
    }
}
