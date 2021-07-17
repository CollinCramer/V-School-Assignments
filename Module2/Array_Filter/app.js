 const numarray = [3, 6, 8, 2]

 const result = numarray.filter(function(num){
    if(num >= 5){
        return num
    }
 })
 console.log(result)

 //------------------------------------------------------------------------------------------------------------------------------------
 //return even numbers
 const allnumarray = [3, 6, 8, 2]

 const evenOnly = allnumarray.filter(function(even){
     if(even % 2 === 0) {
         return even
     }
 })
 console.log(evenOnly)

//------------------------------------------------------------------------------------------------------------------------------------
//five cahracters or fewer
const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharacters = words.filter(function(word){
    if(word.length <= 5) {
        return word
    }
})
console.log(fiveCharacters)

//------------------------------------------------------------------------------------------------------------------------------------
//Belong to club
const members = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const clubMembers = members.filter(function(memberTF){
    if(memberTF.member === true) {
        return memberTF
    }
})
console.log(clubMembers)

//------------------------------------------------------------------------------------------------------------------------------------
//Can see movie
const movieGoers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const seeFilm = movieGoers.filter(function(movieGoer){
    if(movieGoer.age >= 18) {
        return movieGoer
    }
})
console.log(seeFilm)

//This method was easier to me than map. I need to review map more before mid mod assessment 