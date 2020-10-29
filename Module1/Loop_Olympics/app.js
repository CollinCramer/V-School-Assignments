//preliminary loops
//-----------------------------------------------------------------------------------------------------------

//ascending order
var numbersArray = [0,1,2,3,4,5,6,7,8,9]
for(var i = 0; i < numbersArray.length; i++){
    console.log(numbersArray[i])
}

//reverse order
var numbersArray2 = [0,1,2,3,4,5,6,7,8,9]
    for(var i = numbersArray2.length - 1; i >= 0; i--){
        console.log(numbersArray2[i - 1])
}
//fruit array
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//-----------------------------------------------------------------------------------------------------------
//bronze medal

//push numbers to an array
function factorialize(num) {
    let arr = [];
  for (let i = 0;i <= num ; i++){
  arr.push(i)
  }
  return arr;
  }
  
  console.log(factorialize(9));

  //for loop for even numbers 0 - 100

var i = 2
  for (i = 1; i < 101; i++) {
    if (i % 2 === 0) {
      console.log(i);  
    }
  }

//for loop to push every other array item

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(var i = 0; i < fruit.length; i += 2) {
    console.log(fruit[i]);
}

//--------------------------------------------------------------------------------------
//silver medal
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]