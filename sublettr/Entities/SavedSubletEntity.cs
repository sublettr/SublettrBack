using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class SavedSubletEntity
    {
        public string Email;
        public int SubletID;

        public SavedSubletEntity(string email, int subletID)
        {
            Email = email;
            SubletID = subletID;
        }

        public SavedSubletEntity()
        {
        }
    }
}
