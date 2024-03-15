//------------------------------------------------------------------------------------------------------------------

//41. Lets feul up

function calculateFuel(n) {
    return (
	    Math.max((n*10),100)
    )
}
// console.log(calculateFuel(11))

//------------------------------------------------------------------------------------------------------------------

//42. divides evenly

function dividesEvenly(a, b) {
	if (Number.isInteger(a / b)) {
        return true;
    }
    return false;
}
// console.log(dividesEvenly(4,2))

//------------------------------------------------------------------------------------------------------------------

//42. Learn Lodash: _.drop, Drop the First Elements of an Array

const drop = (arr, val = 1) => arr.slice(val);

//------------------------------------------------------------------------------------------------------------------

//43. is string empty

function isEmpty(s) {
	if (s) {
        return false
    } else if (!s){
        return true
    }
}
// console.log(isEmpty("a"))

//------------------------------------------------------------------------------------------------------------------

//44. return a string as an integer

function stringInt(str) {
	return (
        parseInt(str)
    )
}
// console.log(stringInt("44"))

//------------------------------------------------------------------------------------------------------------------

//45. Concatenate First and Last Name into One String

const concatName = (first, last) => `${last}, ${first}`;
//------------------------------------------------------------------------------------------------------------------

//31. fix the expression

function isSeven(x) {
	return x===7?true:false;
}
// console.log(isSeven(7))

//------------------------------------------------------------------------------------------------------------------