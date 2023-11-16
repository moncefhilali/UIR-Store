using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Domain.Entities
{

    [Table("ProductOwners", Schema = "dbo")]

    public class ProductOwners : BaseEntity    {
        [Column("UserId")]
        public int UserId { get; set; }

    }
}
