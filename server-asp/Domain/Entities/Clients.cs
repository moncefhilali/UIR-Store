using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{

    [Table("_Clients", Schema = "dbo")]
    public class Clients
    {

        [Column("UserId")]
        public int UserId { get; set; }
    }
}
