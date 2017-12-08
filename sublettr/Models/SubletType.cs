using System.ComponentModel.DataAnnotations;
using sublettr.Entities;
using Nest;

namespace sublettr.Models
{
    public class SubletType
    {
        public int ID { get; set; }
        public string Address { get; set; }
		public string Description { get; set; }
        public TagIndexEntity[] Tags {get; set;}
    }
}
