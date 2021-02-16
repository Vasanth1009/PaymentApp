using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;

namespace PaymentAPI.Data
{
    public class PaymentDetailsContext : DbContext

    {
        public PaymentDetailsContext( DbContextOptions<PaymentDetailsContext> options) : base(options)
        {
            
        }

        public DbSet<PaymentDetails> PaymentDetails{ get; set; }
    }
}
