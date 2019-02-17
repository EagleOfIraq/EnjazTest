namespace WebApplication1.Models
{
    public class WeatherForecast
    {
        public long id { get; set; }
        public string DateFormatted { get; set; }        

        public string Summary { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
}
