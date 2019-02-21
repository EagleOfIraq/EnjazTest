using System.ComponentModel.DataAnnotations.Schema;
using EnjazTest.Models.company;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WebApplication1.Models;

namespace EnjazTest.Models
{
    public class Job
    {
        public Job()
        {
        }

        public long id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string howToApply { get; set; }
        public int type { get; set; }
        public string url { get; set; }
        public long createdAt { get; set; }
//        [ForeignKey(nameof(Company.id))]
        public long companyid { get; set; }
        public Company company { get; set; }

    }
}
