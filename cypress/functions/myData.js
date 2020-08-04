const fs = require('fs')  //requiring fs in which writeFile is defined
var xlsx = require('xlsx');

var wb = xlsx.readFile('my_resources/qaautomation.xlsx')

var wsInput = wb.Sheets['Input'];

var data = xlsx.utils.sheet_to_json(wsInput);
  
// Write data in '<Output>.txt' . 
fs.writeFile('cypress/fixtures/myDataFile.json', JSON.stringify(data), (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
})

console.log(data);

//these two return www.google.com
console.log(data[0].value);
console.log(wsInput.B2.v);