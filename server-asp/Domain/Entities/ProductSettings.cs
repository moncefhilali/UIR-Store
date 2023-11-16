using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    [Table("ProductSettings", Schema = "dbo")]
   
    public class ProductSettings : BaseEntity
    {

        [Column("Size")]
        public string? Size { get; set; }
        
        [Column("Color")]
        public string? Color { get; set; }
        
        [Column("ProductId")]
        public int ProductId { get; set; }

    }
}
