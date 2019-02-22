using System.Collections.Generic;

namespace EnjazTest.Models.job
{
    public interface IJobService
    {
        Job add(Job job);
        IEnumerable<Job> GetAll();
        Job GetById(long jobId);
    }
}