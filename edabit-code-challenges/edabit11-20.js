//11. Convert Minutes to Seconds

function convert(minutes) {
    return (
        minutes * 60
    )
}

// console.log(convert(5))

//------------------------------------------------------------------------------------------------------------------

//12. Buggy Code pt 1. fix the code only syntax errors

// function cubes(a) {
// 	retunr a ** 3
// }

function cubes(a) {
	return (
        a ** 3
    )
}

// console.log(cubes(2))

//------------------------------------------------------------------------------------------------------------------

//13. Area of a triangle. (base * height) / 2

function triArea(base, height) {
    return (
        (base * height) / 2
    )
}

// console.log(triArea(7, 10))

//------------------------------------------------------------------------------------------------------------------

//14. Farm Problem

//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
    return (
        (chickens * 2) + (cows * 4) + (pigs * 4)
    )
}

// console.log(animals(8,3,4))

//------------------------------------------------------------------------------------------------------------------

//15. Buggy Code pt. 7

function swap(a, b) {

	return [b, a]
}

// console.log(swap(100,200))