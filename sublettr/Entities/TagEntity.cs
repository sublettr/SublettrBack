﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace sublettr.Entities
{
    public class TagEntity
    {
        [ForeignKey("TagIndex")]
        public int tagID { get; set; }
        [ForeignKey("Sublets")]
        public int subletID { get; set; }
    }

    
}
