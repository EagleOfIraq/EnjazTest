using System.Collections.Generic;
using EnjazTest.Models;
using EnjazTest.Models.company;
using EnjazTest.Models.user;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace EnjazTest
{
    public class JobsContext : DbContext
    {

        public DbSet<Job> Jobs { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=jobs.db");
        }
    }

}