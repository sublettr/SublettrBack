using System.ComponentModel.DataAnnotations.Schema;

namespace sublettr.Entities
{
    public class SubletImageEntity
    {
        [ForeignKey("Sublets")]
        public int SubletID { get; set; }
        public string ImageUrl { get; set; }
        
    }
}
