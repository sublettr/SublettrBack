using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sublettr.core.Models
{
    public class Sublet
    {
        public Sublet()
        {
        }

        [Required]
		public int id
		{
			get;
			set;
		}

        [DefaultValue("New Sublett")]
		public string Title
		{
			get;
			set;
		}
    }
}
