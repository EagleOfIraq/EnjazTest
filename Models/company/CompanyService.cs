using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using EnjazTest.Models.user;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace EnjazTest.Models.company
{
    public class CompanyService : ICompanyService
    {
        public CompanyService()
        {
        }

        public Company add(Company company)
        {
            using (var db = new JobsContext())
            {
                db.Companies.Add(company);
                db.SaveChanges();
            }

            return company;
        }

        public IEnumerable<Company> GetAll()
        {
            using (var db = new JobsContext())
            {
                return db.Companies.ToList();
            }
        }
    }
}