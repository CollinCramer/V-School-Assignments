//first question of the assignment

var doubleNumbersArr = [2, 5, 100]

var result = doubleNumbersArr.map(function(num){
    return num * 2
})
console.log(result)

//stringify an array

var stringifyArr = [2, 5, 100]

const stringArr = stringifyArr.map(String)

console.log(stringArr)

//Capitalize each name in array

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capArray = names.map(name => name.toUpperCase())

console.log(capArray)

//make an array of strings

const stringNames = [     
{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]
const nameString = stringNames.map(function(stringName){

    return stringName.name
})

console.log(nameString)

//can they go to a rated R movie?
const people =   [
{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]

const oldEnough = people.map(person => {
    if (person.age >= 18){
        return `${person.name} can go to The Matrix`
    } else {
        return `${person.name} is under age!!`
    }

})
console.log(oldEnough)
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

//   6) Make an array of the names in h1s, and the ages in h2s

// make name H1s and age H2s
function readyToPutInTheDOM(arr){
    return arr.map(({name, age}) => {
        return `<h1>${name}</h1><h2>${age}</h2>`

    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
