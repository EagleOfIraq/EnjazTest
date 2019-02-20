using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EnjazTest.Models;
using EnjazTest.Models.job;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace EnjazTest.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class JobController : Controller
    {
        private IJobService _jobService;

        public JobController(IJobService jobService)
        {
            _jobService = jobService;
        }

        [HttpGet("[action]")]
        public IActionResult jobs()
        {
            return Ok(_jobService.GetAll());
        }

        [HttpGet("[action]")]
        public IActionResult search(string title, string description)
        {
            return Ok();
        }

        [HttpPost("[action]")]
        public IActionResult add([FromBody] Job job)
        {
            return Ok(_jobService.add(job));
        }
    }
}