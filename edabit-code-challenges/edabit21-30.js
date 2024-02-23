//------------------------------------------------------------------------------------------------------------------

//21. Power Calc.

// create a function that takes voltage and current and returns the calculated power

function circuitPower(voltage, current) {
    return (
        voltage * current
    )
	
}
// console.log(circuitPower(8, 16))

//------------------------------------------------------------------------------------------------------------------

//22. Correct the Mistakes

function squared(a) {
	return a * a
}

// console.log(squared(8))

//------------------------------------------------------------------------------------------------------------------

//23. Buggy Code pt. 5

function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

//   console.log(printArray(7))

//------------------------------------------------------------------------------------------------------------------

//24. Boolean to string conversion

function boolToString(flag) {
    return (
        `${flag}`
    )	
}
console.log(boolToString(true))