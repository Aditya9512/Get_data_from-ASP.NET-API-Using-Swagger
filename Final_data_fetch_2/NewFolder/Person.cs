﻿using System.ComponentModel.DataAnnotations;

namespace Final_data_fetch_2.NewFolder
{
    public class Person
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
    }
}
