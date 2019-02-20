using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace EnjazTest.Models.job
{
    public class JobService : IJobService
    {
        public JobService()
        {
        }

        public Job add(Job job)
        {
            using (var db = new JobsContext())
            {
                db.Jobs.Add(job);
                db.SaveChanges();
            }
            return job;
        }

        public IEnumerable<Job> GetAll()
        {
            using (var db = new JobsContext())
            {
                return db.Jobs.Include(c => c.company).ToList();
            }
        }
    }
}