var name = "John"
var age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        var name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Rewrite using arrow functions
const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = (arr) => {
    return arr.map((carrot) => {return { type: "carrot", name: carrot }})
}
console.log(mapVegetables(carrots))


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

filterForFriendly = (arr) => {
    return arr.filter((person) => {return (person.friendly)});
}


// function doMathSum(a, b) {
//     return a + b
// }
doMathSum = (a,b) => 
    a + b

// var produceProduct = function(a, b) {
//     return a * b
// }
var produceProduct = (a, b) => {return a * b}

// return a string 

var person = {
    name: "Jane",
    lname: "Doe",
    age: 100,
}
console.log(`Hello, my name is ${person.name} ${person.lname} and I am ${person.age} years old`)