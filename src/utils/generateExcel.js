import ExcelJS from "exceljs";

export async function generateExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Relatório");

  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Nome", key: "name", width: 30 },
    { header: "Email", key: "email", width: 30 },
  ];

  worksheet.addRow({ id: 1, name: "João", email: "joao@email.com" });
  worksheet.addRow({ id: 2, name: "Maria", email: "maria@email.com" });

  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "relatorio.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
