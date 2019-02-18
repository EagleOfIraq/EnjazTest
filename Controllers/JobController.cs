using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EnjazTest.Models;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace EnjazTest.Controllers
{
    [Route("api/[controller]")]
    public class JobController : Controller
    {
        [HttpGet("[action]")]
        public List<Job> jobs()
        {
            using (var db = new BloggingContext())
            {
                for (int i = 0; i < 10; i++)
                {
                    db.Jobs.Add(new Job
                    {
                        title = "Job " + i,
                        type = 1,
                        description = "new job " + i
                    });
                }
                db.SaveChanges();
                return db.Jobs.ToList();
            }
        }
    }
}