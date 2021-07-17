//Array Sort Excercises
//----------------------------------------------------------------------------------------------------------------
//least to greatest

arr = [1, 3, 5, 2, 90, 20]

arr.sort(function(a , b) {
    return a - b
})
console.log(arr)  

//----------------------------------------------------------------------------------------------------------------
//Biggest to smallest

greatestToLeast = [1, 3, 5, 2, 90, 20]

greatestToLeast.sort(function(a , b){
    return b - a
})
console.log(greatestToLeast)

//----------------------------------------------------------------------------------------------------------------
//Short string to longest

stringLength = ["dog", "wolf", "by", "family", "eaten"]

stringLength.sort(function(a , b){
    return a.length - b.length
})
console.log(stringLength)

//----------------------------------------------------------------------------------------------------------------
//Sort alphabetically

stringABC = ["dog", "wolf", "by", "family", "eaten"];

stringABC.sort();
    
console.log(stringABC);

//----------------------------------------------------------------------------------------------------------------
//Sort objects by age

byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 } ]

byAge.sort(function(a , b) {
    return a.age - b.age
})
console.log(byAge)