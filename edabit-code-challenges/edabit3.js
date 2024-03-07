//------------------------------------------------------------------------------------------------------------------

//31. fix the expression

function isSeven(x) {
	return x===7?true:false;
}
// console.log(isSeven(7))

//------------------------------------------------------------------------------------------------------------------

//32. two makes 10

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
	let result;
    if (a === 10 || b === 10) {
        result = true
    } else if (a + b === 10) {
        result = true
    } else {
        result = false
    }
    return result;
}
// console.log(makesTen(2,))

//------------------------------------------------------------------------------------------------------------------

//32. Buggy Code pt 4

function greeting(name) {
    
let nameResult;
    if (name === "Mubashir") {
    nameResult = "Hello, my Love!"
    } else {
    nameResult = "Hello, " + name + "!"
    }
    return nameResult;
}

//   console.log(greeting("Collin"))

//------------------------------------------------------------------------------------------------------------------

//33. Buggy Code pt 2

function maxNum(n1,n2) {
	if (n1<n2) {
	  return n2
	}
  else {
	return n1
  }
}

// console.log(maxNum(15,10))

//------------------------------------------------------------------------------------------------------------------

//33. Pair management

// Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
	return [num1, num2]
}

// console.log(makePair(4,20))

//------------------------------------------------------------------------------------------------------------------

//33. check if an integer is divisible by 5

function divisibleByFive(n) {
	if (Number.isInteger(n / 5)) {
        return true;
    } else {
        return false;
    }
}

// console.log(divisibleByFive(10))

//------------------------------------------------------------------------------------------------------------------

//34. Recursion: Length of a String

function length(str, num = 0) {
    if(str[num] === undefined) {
        return num
    }
   return length(str, num + 1)
}
// console.log(length("hello my name is collin"))

//------------------------------------------------------------------------------------------------------------------

//35. Compare Strings by Count of Characters

function comp(str1, str2) {
	if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
// console.log(comp("hello", "colli"))

//------------------------------------------------------------------------------------------------------------------

//36. Equality Check

function checkEquality(a,b) {
    return (
        a===b
    )
}
// console.log(checkEquality(1,false))

//------------------------------------------------------------------------------------------------------------------

//37. Profitable Gamble

function profitableGamble(prob, prize, pay) {
	
	if(prob * prize > pay){
		return true
	} else {
		return false;
	}
	
}

//------------------------------------------------------------------------------------------------------------------

//38. Miserable parody of calculator

// Create a function that will handle simple math expressions. 
// The input is an expression in the form of a string.

function calculator(str) {
	return (
        eval(str)
    )
}
// console.log(calculator("2+2"))

//------------------------------------------------------------------------------------------------------------------

//39. Using arrow functions

arrowFunc = (param) => param

console.log(arrowFunc(3))

//------------------------------------------------------------------------------------------------------------------

//40. Buggy Code

function hasBugs(buggyCode) {
	if (buggyCode === true) {
		return 'sad days'
	} else  {
		return `it's a good day`
	}
}
console.log(hasBugs(false))