using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    [Table("Categories", Schema = "dbo")]

    public class Categories : BaseEntity
    {
        [Column("CategoryName")]
        public string? CategoryName { get; set; }
    }
}
