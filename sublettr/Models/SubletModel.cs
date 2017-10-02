using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sublettr.Models
{
    public class SubletModel
    {
        private int v1;
        private string v2;

        public SubletModel(int v1, string v2)
        {
            this.v1 = v1;
            this.v2 = v2;
        }

        public int id { get; set; }
        public string title { get; set; }
    }
}
