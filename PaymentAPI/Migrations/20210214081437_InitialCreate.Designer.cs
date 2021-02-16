﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using PaymentAPI.Data;

namespace PaymentAPI.Migrations
{
    [DbContext(typeof(PaymentDetailsContext))]
    [Migration("20210214081437_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.3");

            modelBuilder.Entity("PaymentAPI.Models.PaymentDetails", b =>
                {
                    b.Property<int>("PaymentDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("CVVCode")
                        .HasColumnType("INT");

                    b.Property<string>("CardHolderName")
                        .HasColumnType("NVARCHAR(100)");

                    b.Property<int>("CardNumber")
                        .HasColumnType("INT");

                    b.Property<string>("ValidationDate")
                        .HasColumnType("NVARCHAR(5)");

                    b.HasKey("PaymentDetailsId");

                    b.ToTable("PaymentDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
