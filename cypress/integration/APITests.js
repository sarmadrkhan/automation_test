/// <reference types="cypress" />

//for reading from excel file

//   var Excel = require('exceljs');
//   var workbook = new Excel.Workbook();
//   workbook.xlsx.readFile("D:/temp2/my_resources/qaautomation.xlsx")
//     .then(function() {
//         ws = workbook.getWorksheet("Input")
//         my_URL = ws.getCell('B2').value
//         return my_URL;
//     });

describe('API Requests', () => {
    it('do the api testing', ()=>{
       cy.request('https://emumba-test.herokuapp.com/trend',{timeout:1000}).then((response) => {
            expect(response.status).to.eq(201)
        })
        cy.request('POST', 'https://emumba-test.herokuapp.com/user', 
        { 
            'first_name': 'Ali',
            'last_name': 'Ahmad',
            'email': 'ali.ahmad@gmail.com',
            'password': '12345',
            'confirm_password': '12345'    
        },{timeout:1000}).then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('first_name') // true
        })       
    })  
})