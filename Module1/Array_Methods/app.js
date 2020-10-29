var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// removing last item from vege
vegetables.pop();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// remove first item of fruit
fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// find index of orange
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

//add orangeIndex to the end of the fruit arr
fruit.push(orangeIndex);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// use length to find length of vegetable arr
var vegetableLength = vegetables.length;
console.log(vegetableLength);

// add length to the end of the vegetable arr
vegetables.push(vegetableLength);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

//combine 2 arr
var foods = fruit.concat(vegetables);
console.log("foods: ", foods);

//remove two elements starting at index 4
foods.splice(4,2);
console.log("foods: ", foods);

//reverse array
var reverseArr = foods.reverse();
console.log("reverse: ", reverseArr);

//turn array into string and return it
var stringFood = foods.join();
console.log(stringFood);