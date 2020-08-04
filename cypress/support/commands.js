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
var Excel = require('exceljs');
Cypress.Commands.add('qwerty',(myfile)=>{
    cy.log('here1')    
    var workbook = new Excel.Workbook();     
    cy.log('here2')
    workbook.xlsx.readFile(myfile).then(function() {
            cy.log('here3')
            var worksheet = workbook.getWorksheet(3);
            cy.log('here4')
            var row = worksheet.getRow(3);
            cy.log('here5')
            row.getCell(1).value = 'Loki'; // A5's value set to 5
            cy.log('here6')
            row.commit();
            cy.log('here7')
            return workbook.xlsx.writeFile('new.xlsx');
        })
        cy.log('here8')
})
Cypress.Commands.add('sarmad',(sampleText)=>{
    cy.log(sampleText);
})
