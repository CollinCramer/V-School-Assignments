//addition part of the webpage

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addAnswer = document.getElementById('addAnswer');

function add() {
    var one = parseFloat(num1.value) || 0;
    var two = parseFloat(num2.value) || 0;
    addAnswer.innerText = one+two;
}

//subtraction

var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var subAnswer = document.getElementById('subAnswer');

function subtract() {
    var three = parseFloat(num3.value) || 0;
    var four = parseFloat(num4.value) || 0;
    subAnswer.innerText = three-four;
}

//multiplication

var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var multAnswer = document.getElementById('multAnswer');

function multiply() {
    var five = parseFloat(num5.value) || 0;
    var six = parseFloat(num6.value) || 0;
    multAnswer.innerText = five*six;
}

//division

var num7 = document.getElementById('num7');
var num8 = document.getElementById('num8');
var divAnswer = document.getElementById('divAnswer');

function divide() {
    var seven = parseFloat(num7.value) || 0;
    var eight = parseFloat(num8.value) ||0;
    divAnswer.innerText = seven/eight;
}