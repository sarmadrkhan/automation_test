// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// var Excel = require('exceljs');

// Cypress.Commands.add('updateWS',(oldFile,newFile,sheetNo,rowNo,columnNo,cellValue)=>{
//     var workbook = new Excel.Workbook();
//     workbook.xlsx.readFile(oldFile)
//     .then(function() {
//         var worksheet = workbook.getWorksheet(sheetNo);
//         var row = worksheet.getRow(rowNo);
//         row.getCell(columnNo).value = cellValue; // <column><row>'s value set to cellValue
//         row.commit();
//         return workbook.xlsx.writeFile(newFile);
//     })
// })