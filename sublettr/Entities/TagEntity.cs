using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Entities
{
    public class TagEntity
    {
        public int tagID { get; set; }
        public int subletID { get; set; }
    }
}
