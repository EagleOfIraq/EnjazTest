using System.Collections.Generic;
using Newtonsoft.Json;

namespace EnjazTest.Models.company
{
    public class Company
    {
        public long id { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public string location { get; set; }
        public string logoUrl { get; set; }
        [JsonIgnore] public List<Job> jobs { get; set; }
    }
}