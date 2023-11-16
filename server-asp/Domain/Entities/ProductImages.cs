using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    [Table("ProductImages", Schema = "dbo")]
    public class ProductImages : BaseEntity
    {
        [Column("ImagePath")]
        public string? ImagePath { get; set; }

        [Column("ProductID")]
        public int IProductID { get; set; }


    }
}
