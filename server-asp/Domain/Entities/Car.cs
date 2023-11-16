
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    // Core/Entities/Car.cs
    [Table("Car", Schema = "dbo")]
    public class Car : BaseEntity
    {
        [Column("CarName")]
        public string? CarName { get; set; }
    }
}
