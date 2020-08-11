const terminal = require('child_process')

const fs = require('fs')
var xlsx = require('xlsx');

    fs.writeFileSync('cypress/fixtures/myNewCast.json','[]')
    // loadFromExcelAndSaveToFixtureJson();
    var wb = xlsx.readFile('my_resources/qaautomation.xlsx')
    var wsSC = wb.Sheets['Series Cast'];
    //opens the chrome for test and moves on to next line
    //or use anyother test command
    terminal.exec('npx cypress open');
    
    var fileData_prev=fs.readFileSync('cypress/fixtures/myNewCast.json');
    var fileData_curr;
    setInterval(()=> {
       fileData_curr = fs.readFileSync('cypress/fixtures/myNewCast.json')
        if(fileData_prev != fileData_curr){
             xlsx.utils.sheet_add_json(wsSC, JSON.parse(fileData_curr),{origin:'A1'})
            xlsx.writeFile(wb,'my_resources/quautomation.xlsx')
        }
        fileData_prev = fileData_curr
    },2000)