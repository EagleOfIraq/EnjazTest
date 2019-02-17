using System.Collections.Generic;

namespace EnjazTest.Models
{
    public class Company
    {
        public long id { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public string location { get; set; }
        public string logoUrl { get; set; }
        public List<Job> jobs { get; set; }
    }
}
