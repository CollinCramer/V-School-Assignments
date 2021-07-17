//This is an ES6 practice exercise
// -----------------------------------------------------------------------------------------------------------------------------------------
// Use the Rest Operator
function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// -----------------------------------------------------------------------------------------------------------------------------------------
// Write a function that returns a food object with the array names as properties using Object Literals

function combineFruit(fruit, sweets, vegetables){

    return { "object1":fruit,
        "object2":sweets,
        "object3":vegetables,}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])


//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


// -----------------------------------------------------------------------------------------------------------------------------------------
// Destructure to use the property names as variables
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
 console.log(parseSentence(vacation))
// -----------------------------------------------------------------------------------------------------------------------------------------
// Use destructering to make this code ES6
function returnFirst(items){
    const [firstItem] = returnFirst(0); /*change this line to be es6*/
    return firstItem
}
// -----------------------------------------------------------------------------------------------------------------------------------------
// Destructure and Use Template Literals
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [ first, second, third] = favoriteActivities

console.log(`My favorite activities are ${first}, ${second}, and ${third}.`)

// -----------------------------------------------------------------------------------------------------------------------------------------
//return one array

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const newArray = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]

console.log(newArray)

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// -----------------------------------------------------------------------------------------------------------------------------------------
// Make this more ES6xy
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

  let product2 = (a, b, c, d, e) => {
      var numbers2 = [a,b,c,d,e]
      return numbers2.reduce((acc, number) => { return acc*number}, 1)

  }
// -----------------------------------------------------------------------------------------------------------------------------------------
// Make this more ES6xy with rest and spread
function unshift(array, ...second) {  
    return [...second, ...array];
  }

// -----------------------------------------------------------------------------------------------------------------------------------------
// Destructure and use object literals

function populatePeople(names){
  return names.map(function(name){
      [fName, lName] = name.split(" ");
      
      return {
          firstName: fName,
          lastName: lName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
