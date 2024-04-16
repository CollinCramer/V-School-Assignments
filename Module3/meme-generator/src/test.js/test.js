const str="racecar"

function palindrome(str) {
    // turn str into an arr
    const turnToArray = str.split("");
    // reverse the array
    const reversedArray = turnToArray.reverse();

    // turn array back into string
    const joinToString = reversedArray.join("");

    // compare str value with the new string value
    
   
    // if false return "false"
    return joinToString === str

}
console.log(palindrome(str))
