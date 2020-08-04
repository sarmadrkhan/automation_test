var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('qaautomation.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(3); //series cast sheet
        var row = worksheet.getRow(3);
        row.getCell(1).value = 'sandy'; // A3's value set to sandy
        row.commit();
        return workbook.xlsx.writeFile('qaautomation.xlsx');
    })
