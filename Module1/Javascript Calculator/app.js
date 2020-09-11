const readline=require('readline-sync')

const userinput = readline.question("Hi, welcome to the calculator. Which operation would you like to perform? 1. Addition, 2. Multiplication, 3. Division, 4. Subtaction  ")

//I had to parseInt to convert the inputs from strings to numbers to get it to work as a calc

const userinput1 = parseInt(readline.question("Enter a Number: "),10)
console.log(typeof userinput1);

//the variable for the second user input is set to userinput2 so it will store both user commands

const userinput2 = parseInt (readline.question("Enter a Second Number: "),10)
console.log(typeof userinput2)

//here is my addition for the calculator
if (userinput==="1" || userinput==="addition") {
var x=userinput1;
var y=userinput2;
var result = x + y;
console.log(result) }

//here is my multiplication
else if (userinput==="2" || userinput==="multiplication") {
var x=userinput1;
var y=userinput2;
var result = x * y;
console.log(result) }

//here is division
else if (userinput==="3" || userinput==="division") {
var x=userinput1;
var y=userinput2;
var result = x / y;
console.log(result) }

//here is subtraction
else if (userinput==="4" || userinput==="subtraction") {
var x=userinput1;
var y=userinput2;
var result = x - y;
console.log(result) }


