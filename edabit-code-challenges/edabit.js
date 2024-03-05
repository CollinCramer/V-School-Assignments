// 1. how edabit works

function hello() {
    return (
        "Hello edabit.com"
    )
}


//-----------------------------------------------------------------------------------------------------------------

//2. return a number from an integer passed

//addition(0) ➞ 1

//addition(9) ➞ 10

//addition(-3) ➞ -2

function addition (num) {
    return (
        num + 1
    )
}

//------------------------------------------------------------------------------------------------------------------

//3. Write a function that converts hours into seconds.

function howManySeconds(hours) {
    return (
        hours * 60 * 60
    )
}

//------------------------------------------------------------------------------------------------------------------

//4. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
    return (
        (side1 + side2) - 1
    )
}
// console.log(nextEdge(2,8))

//------------------------------------------------------------------------------------------------------------------

//5. Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
    return (
        "something" + " " + a
    )
}

// console.log(giveMeSomething("hello"))

//------------------------------------------------------------------------------------------------------------------

//6. Write a function that takes two numbers as arguments and returns their sum

function sumOfTwo(a,b) {
    return (
        a + b
    )
}
// console.log(sumOfTwo(8,4))

//------------------------------------------------------------------------------------------------------------------

//7. Create a function that takes Length and Width and finds the perimeter of a rectangle

function findPerimeter(length,width) {
    return (
        2 * length + width * 2
    )
}
// console.log(findPerimeter(8,24))

//------------------------------------------------------------------------------------------------------------------

//8. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise returns false

function lessThanOrEqualToZero (num) {
    return num <= 0
}

// console.log(lessThanOrEqualToZero(-4))

//------------------------------------------------------------------------------------------------------------------

//9. Return the first element of an array

function getFirstValue(arr) {
    return (
        arr[0]
    )
}
// console.log(getFirstValue("hello", "world"))

//------------------------------------------------------------------------------------------------------------------

//10. give an n-sided polygon n, return the total sum of internal angles in degrees

function sumPolygon(n) {
    return (
        (n-2) * 180
    )
}

// console.log(sumPolygon(8))