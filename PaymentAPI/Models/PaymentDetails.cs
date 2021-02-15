using Castle.MicroKernel.SubSystems.Conversion;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Models
{
    public class PaymentDetails
    {
        [Key]
        public int PaymentDetailsId { get; set; }

        [Column(TypeName = "NVARCHAR(100)")]
        public string CardHolderName { get; set; }

        [Column(TypeName = "NVARCHAR(19)")]
        public string CardNumber { get; set; }

        [Column(TypeName = "NVARCHAR(3)")]
        public int CVVCode { get; set; }

        [Column(TypeName = "NVARCHAR(5)")]
        public string ValidationDate { get; set; }
    }
}
