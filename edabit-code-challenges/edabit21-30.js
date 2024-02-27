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
// console.log(boolToString(true))

//------------------------------------------------------------------------------------------------------------------

//25. Are the numbers equal?

function isSameNum(num1, num2) {
	return (
        num1===num2
    )
}
// console.log(isSameNum(4,8))

//------------------------------------------------------------------------------------------------------------------

//26. return the remainder

function remainder(x, y) {
	return (
        x % y
    )
}

// console.log(remainder(3,4))

//------------------------------------------------------------------------------------------------------------------

//27. convert hours into minutes into seconds

function convert(hours, minutes) {
    return (
        (hours * 60 * 60) + (minutes * 60)
    )
	
}

// console.log(convert(1,3))

//------------------------------------------------------------------------------------------------------------------

//28. Football Points

function footballPoints(wins, draws, losses) {
    return (
        (wins * 3) + (draws) + (losses - losses)
    )
}
// console.log(footballPoints(3, 2, 4))

//------------------------------------------------------------------------------------------------------------------

//29. Frames per second

function frames(minutes, fps) {
	return (
        (minutes * 60) * fps
    )
}
// console.log(frames(10, 25))

//------------------------------------------------------------------------------------------------------------------

//30. Less than 100

function lessThan100(a, b) {
	return a+b<100 ? true : false;
}
console.log(lessThan100(40, 59))