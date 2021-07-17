//Total of all numbers in Array
numArray = [1,2,3]

const result1 = numArray.reduce(function(final, numSum){
    final += numSum
    return final
})
console.log(result1)

//Return a long string of numbers from the array
numArray2 = [1,2,3]

const reducer = (final, numString) => final + numString.toString();

console.log(numArray2.reduce(reducer));

const result2 = numArray2.reduce(function(final, numString){
    return final + numString.toString()
})
console.log(result2)



//Voters into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const voteCount = voters.reduce(function(final, voter){
    if (voter.voted){
        final++
    }
    return final
}, 0)
console.log(voteCount)

//figure out the total cost of the wishlist
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const totalCost = wishlist.reduce(function(final, wish){
    return final + wish.price
}, 0)
console.log(totalCost)

//Given an arrayof arrays, flatten it into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const flattenArray = arrays.reduce(function(final, array){
    return final.concat(array);
})

console.log(flattenArray)

//given an array of votes, return an object representing the results of the election
var voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let category = { youngVotes: 21, youth: 30, midVotes: 40, mids: 50, oldVotes: 60, olds: 130}

function voteResults(arr)  {
    const conditions = Object.entries(category);
        return arr.reduce(function(final, voteResult){
            if (voteResult.voted) {
                for (let i=0; i<conditions.length; i++) {
                    if(voteResult.age <= conditions[i][1]) {
                        final[conditions[i][0]] = final[conditions[i][0]] ? final[conditions[i][0]] + 1 : 1;
            return final;
                    }
                }
            }
            return final;
        }, {})
}
console.log (voteResults(voters2))