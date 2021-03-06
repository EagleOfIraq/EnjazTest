using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace EnjazTest.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public List<WeatherForecast> WeatherForecasts()
        {
            using (var db = new JobsContext())
            {
                var rng = new Random();
                for (int i = 0; i < 10; i++)
                {
                    db.WeatherForecasts.Add(new WeatherForecast
                    {
                        DateFormatted = DateTime.Now.AddDays(i).ToString("d"),
                        TemperatureC = rng.Next(-20, 55),
                        Summary = Summaries[rng.Next(Summaries.Length)]
                    });
                }
                db.SaveChanges();
                return db.WeatherForecasts.ToList();
            }
        }
    }
}
