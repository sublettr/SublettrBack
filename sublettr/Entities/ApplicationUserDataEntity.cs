using System.ComponentModel.DataAnnotations;

namespace sublettr.Entities
{
    public class ApplicationUserDataEntity
    {
        [Key]
        public string Email { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public string Major { get; set; }
        public int Grade { get; set; }
        public bool IsSeller { get; set; }

    }
}