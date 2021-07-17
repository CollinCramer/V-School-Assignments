var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const adults = peopleArray.filter(function(adult){
    if (adult.age > 18) {
        return true
    }
})
// console.log(adults)

// const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// // .sort()

// arr.sort(function(a, b){
//     return a - b
// })

// console.log(arr)

var abcAdults = adults.sort(function(a , b){
    if (a.lastName < b.lastName) {return -1; }
    if (a.lastName > b.lastName) {return 1; }
    return 0;
})
console.log(abcAdults)

var liAdults = abcAdults.map(function(liAdult){
    return `<li> ${liAdult.firstName} ${liAdult.lastName} is ${liAdult.age} </li>`
})
console.log(liAdults)