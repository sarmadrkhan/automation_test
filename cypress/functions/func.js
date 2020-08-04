export function navigate(myUrl) {
   cy.visit(myUrl)
}
  
export function googleSearch(searchText) {
  cy.get('.gLFyf').type(searchText + '{enter}')
}

export const range = (start, stop, step) => Array.from(
    {
      length: (stop - start) / step + 1
    },
      (_, i) => start + (i * step)
);

// var Excel = require('exceljs');

// export function updateWS(oldFile,newFile,sheetNo,rowNo,columnNo,cellValue){
//   var workbook = new Excel.Workbook();
//   workbook.xlsx.readFile(oldFile)
//     .then(function() {
//         var worksheet = workbook.getWorksheet(sheetNo);
//         var row = worksheet.getRow(rowNo);
//         row.getCell(columnNo).value = cellValue; // <column><row>'s value set to cellValue
//         row.commit();
//         return workbook.xlsx.writeFile(newFile);
//     })
// }