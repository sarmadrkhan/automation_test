# automation_test

First, run npm install
Then;

For Task 1: 
    >> run this in your terminal -> node .\cypress\functions\seriesCast.js
    >> select AfterLife.js
 >How to view the results:
    >> Go to 'my_resources' folder
    >> open the excel file that is recently created (check for the 'last modified' time by enabling 'details' view in your file explorer)
    >> switch to the last sheet named as Series Cast

Note: terminate the previous running cypress session by closing all the cypress windows and pressing ctrl+c in terminal because it is not closing automatically in case you want to rerun the task 1 with some changes. 

For Task 2:
    >>run this command in your terminal -> npx cypress open
    >> select Flyers.js
  >How to view the results:
    >> the screenshot is saved in 'cypress/screenshots/Flyers.js' as 'Post a flyer.png'
    
For Task 3:
    >>run this command in your terminal -> npx cypress open
    >> select APITests.js
