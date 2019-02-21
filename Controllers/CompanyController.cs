using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EnjazTest.Models;
using EnjazTest.Models.company;
using EnjazTest.Models.job;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace EnjazTest.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CompanyController : Controller
    {
        private ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet("[action]")]
        public IActionResult companies()
        {
            return Ok(_companyService.GetAll());
        }


        [HttpPost("[action]")]
        public IActionResult add([FromBody] Company company)
        {
            return Ok(_companyService.add(company));
        }
    }
}