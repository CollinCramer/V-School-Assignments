// extract unique characters

function extractUniqueCharacters(strings) {
    // join strings together into one string
    const joinTogether = strings.join("")
    // empty array to hold the new value
    const charArray=[]
    // loop over joinTogether to get shared letters

        for (i=0; i < joinTogether.length; i++) {
        // includes array method to determine if a certain value is among its entries. returns True or False
            if (!charArray.includes(joinTogether[i])) {
                charArray.push(joinTogether[i])
            }
        // } else {
        // // pushing unique values to the charArray
        //     charArray.push(joinTogether[i])
        // }
        }
           

    return charArray

}
const words = ['apple', 'banana', 'cherry', 'mango', 'kiwi'];

const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars)

// --------------------------------------------------------------------------------------
// take an array of objects and sort by specified property

// function takes two parameters, objects and propertyname

const people = [
  { name: 'Alice', age: 30, isLiving: true },
  { name: 'Charlie', age: 35, isLiving: true },
  { name: 'Bob', age: 25, isLiving: false },
  { name: 'David', age: 28, isLiving: true },
];

const sortedByAge = sortByProperty(people, 'name');


// function to sort by age
// function sortAge(objects) {
//     objects.sort((firstItem, secondItem) => firstItem.age - secondItem.age)
//     return objects
// }

// function to sort by name
// function sortName(objects) {
//     objects.sort((firstItem, secondItem) => 
//         {
//             if (firstItem.name < secondItem.name) {
//                 return -1
//             }  
//             if (firstItem.name > secondItem.name) {
//                 return 1
//             }
//             return 0
//         }) 
//     return objects
// }

// instead of 2 different sort functions, I will create one to work with any propertyName
function sortByProperty(objects, propertyName) {

    // using sort array method. Mutates original array
    objects.sort((firstItem, secondItem) => 
        {
            if (firstItem[propertyName] < secondItem[propertyName]) {
                return -1
            }  
            if (firstItem[propertyName] > secondItem[propertyName]) {
                return 1
            }
            // if parameters are the same value
            return 0
        }) 
    return objects
}

// if I dont want to mutate original array, I can create a new one with the toSorted() arrray method instead
console.log(sortByProperty(people, "age"))

function generateTable(num){
    // number array
    const number = [1,2,3,4,5,6,7,8,9,10]
    // map number array to multiply by num specified
    const multiply = number.map(n => {
        // console.log(n)
        console.log(`${num} * ${n} = ${num * n}`)
        
    })
    return multiply
}

generateTable(3)

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 10  = 30