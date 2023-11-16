using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{

    [Table("_Clients", Schema = "dbo")]
    public class Clients
    {

        [Column("UserId")]
        public int UserId { get; set; }
    }
}
