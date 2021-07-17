function sum(num1, num2) {
    return num1 + num2
}

// if (num1 != int) {
//     throw new error("Value is wrong data type")
// }
// num1 = "i";
// num2 = 8;

// console.log(sum)

try {
    let num1 = "7"
    let num2 = "5"
    sum(num1, num2)
    if (typeof num1 != "number"){
       throw new Error("Invalid num1 value!")
    } else if (typeof num2 != "number"){
        throw new Error("Invalid num2 value!")
    }
}
catch(err){
    console.log(err)
}
finally {
   console.log("I am running no matter what!")
}
console.log(sum(1,2))