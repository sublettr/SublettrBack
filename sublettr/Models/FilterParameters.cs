using System;
namespace sublettr.Models
{
    public class FilterParameters
    {

        public int MinPrice { get; set; }
        public int MaxPrice { get; set; }
        public int MinRating { get; set; }
        public int MaxRating { get; set; }
        public string[] Tags { get; set; }
        // using an int so it can be -1 if unused
        public int IsFurnished { get; set; }

        public FilterParameters()
        {
            this.MinPrice = -1;
            this.MaxPrice = -1;
            this.MinRating = -1;
            this.MaxRating = -1;
            this.IsFurnished = -1;
        }
    }
}
