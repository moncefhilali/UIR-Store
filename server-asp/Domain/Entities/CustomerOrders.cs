using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    [Table("CustomerOrders", Schema = "dbo")]

    public class CustomerOrders : BaseEntity
    {
        [Column("ClientID")]
        public int ClientID { get; set; }

        [Column("productId")]
        public int productId { get; set; }

        [Column("qtyOrded")]
        public int qtyOrded { get; set; }

        [Column("OrderDate")]
        public DateTime OrderDate { get; set; }

        [Column("TotalPrice")]
        public int TotalPrice { get; set; }

    }
}
