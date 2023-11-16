
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    // Core/Entities/Car.cs
    [Table("_User", Schema = "dbo")]
    public class User : BaseEntity
    {
        [Column("UserName")]
        public string? UserName { get; set; }
    }
}
