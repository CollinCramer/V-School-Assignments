var hello = "hello"
//capitalize and lowercase "hello"
function myfunction() {
    var helloUpperCased = hello.toUpperCase();
    return hello + helloUpperCased;
    
}
console.log(myfunction())

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.


function halfStringRounded () {
    var halfStr = hello.length/2;
    var rndHlfStr = Math.floor(halfStr);
    return hello + rndHlfStr;
}
console.log(halfStringRounded())

//Write a function that slices and returns the first half of a given string

function slcString () {
    var slice = hello.slice(0, hello.length/2);
    return hello + slice;
}
console.log(slcString())

//Write a function that capitalizes the first half of a string

function capitalizeFirstHalf () {
    var cut = hello.slice(0, hello.length/2);
    var cut2 = hello.slice(2);
    var cutCap = cut.toUpperCase();
    return cutCap + cut2;
}
console.log(capitalizeFirstHalf());
