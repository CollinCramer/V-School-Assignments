document.getElementById("header").innerHTML = "JavaScript Made This!!"

document.getElementById("header").style.textAlign = "center"

document.getElementById("header").style.fontSize = "25px"

document.getElementById("header").style.fontWeight = "bold"

//now I will be modifying the smaller header underneath

var newH3 = document.createElement("h3")
newH3.textContent = "Collin Cramer wrote the JavaScript"
var myHeader = document.getElementById("header")
myHeader.append(newH3)

newH3.style.fontSize = "15px"

//Bronze section of the assignment

var newtext = document.getElementsByClassName("message left" );
console.log(newtext)
newtext[0].innerHTML= ("Hi, how are ya?");
newtext[1].innerHTML= ("I am learning JavaScript, what about you?");

var newtext2 = document.getElementsByClassName("message right");
console.log(newtext2)
newtext2 [0].innerHTML = ("Good, what have you been up to?");
newtext2[1].innerHTML = ("I am a simple Farmer. It ain't much but it's honest work.");

//button to delete div content


//needs more work. Deletes all of Div. Will Re-Visit
document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("main").innerHTML = "";
  });

//Silver medal!
//document.getElementById("theme-two").addEventListener("click", function (){
//    document.getElementsByClassName("message-left").style.backgroundColor = "red"
//})
//function selectBackground(){
//    var e = document.getElementById("theme-drop-down");
//    var BackgroundValue = e.options[e.selectedIndex].value;
//    console.log (selectedIndex);
//}
//function myFunction() {
//var sel1 = document.getElementById('theme-drop-down');


//if(sel1 =="theme-one"){
//
//    document.getElementsByClassName("message-left").style.backgroundColor = "Blue"
//    document.getElementsByClassName("message-right").style.backgroundColor = "Brown"
    
//}
//else if (sel1 =="theme-two") {
//    document.getElementsByClassName("message-left").style.backgroundColor = "Red"
//    document.getElementsByClassName("message-right").style.backgroundColor = "Black"
//    document.getElementById("main").style.color = "White"
    

//}
//}
var sel1 = document.getElementById('theme-drop-down')[0];

console.log(sel1)

if(sel1 == ("blue/brown")) {
    document.getElementsByClassName("message-left").style.backgroundColor = "Blue";
    document.getElementsByClassName("message-right").style.backgroundColor = "Brown";
    console.log("test")
}
else if (sel1 =="theme-two") {
    document.getElementsByClassName("message-left").style.backgroundColor = "Red";
    document.getElementsByClassName("message-right").style.backgroundColor = "Black";
    document.getElementById("main").style.color = "White"
    console.log("test")

}
else {
    
    console.log(sel1)
}

//gold portion of assignment
