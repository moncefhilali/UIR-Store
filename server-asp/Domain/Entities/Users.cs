using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    [Table("Users", Schema = "dbo")]

    public class Users : BaseEntity
    {

        [Column("FirstName")]
        public string? FirstName { get; set; }

        [Column("LastName")]
        public string? LastName { get; set; }

        [Column("Email")]
        public String? Email { get; set; }

        [Column("PhoneNumber")]
        public int PhoneNumber { get; set; }

        [Column("Description")]
        public string? Description { get; set; }

        [Column("ProfileImage")]
        public string? ProfileImage { get; set; }

        [Column("address")]
        public string? address { get; set; }
    }
}
