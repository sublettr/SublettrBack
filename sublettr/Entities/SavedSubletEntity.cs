using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class SavedSubletEntity
    {
        [ForeignKey("AspNetUser")]
        public string Email { get; set; }
        [ForeignKey("Sublets")]
        public int SubletID { get; set; }

        public SavedSubletEntity()
        {
        }
    }
}
