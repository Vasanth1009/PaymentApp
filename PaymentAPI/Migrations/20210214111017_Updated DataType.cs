using Microsoft.EntityFrameworkCore.Migrations;

namespace PaymentAPI.Migrations
{
    public partial class UpdatedDataType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CardNumber",
                table: "PaymentDetails",
                type: "NVARCHAR(16)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INT");

            migrationBuilder.AlterColumn<string>(
                name: "CVVCode",
                table: "PaymentDetails",
                type: "NVARCHAR(3)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INT");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "CardNumber",
                table: "PaymentDetails",
                type: "INT",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR(16)");

            migrationBuilder.AlterColumn<int>(
                name: "CVVCode",
                table: "PaymentDetails",
                type: "INT",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR(3)");
        }
    }
}
