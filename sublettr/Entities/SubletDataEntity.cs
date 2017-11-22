using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class SubletDataEntity
    {
        [Key]
        public int SubletID { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
        public bool IsFurnished { get; set; }
        public DateTime? OpenHouse { get; set; }
    }
}
