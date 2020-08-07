//not using this in the code but keeping it here in case we need need it in future

var Excel = require('exceljs');
var workbook = new Excel.Workbook();
workbook.xlsx.readFile('qaautomation.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(3); //desired sheet
        var row = worksheet.getRow(3);
        row.getCell(1).value = 'loki'; // A3's value set to desired value
        row.commit();
        return workbook.xlsx.writeFile('qaautomation.xlsx');
    })
    
    