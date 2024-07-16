using Final_data_fetch_2.NewFolder;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{
    [HttpGet]
    public IEnumerable<Person> Get()
    {
        return new List<Person>
        {
            new Person { Id = 1, Name = "Aditya Patel", Age = 26, Email = "avp@example.com", Gender="Male"},
            new Person { Id = 2, Name = "Jalpa Patel", Age = 53, Email = "jvp@example.com", Gender="Female"},
            new Person { Id = 3, Name = "Vishnu Patel", Age = 51, Email = "vnp@example.com", Gender="Male" }
        };
    }
}
