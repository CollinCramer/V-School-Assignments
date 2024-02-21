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

console.log(giveMeSomething("hello"))