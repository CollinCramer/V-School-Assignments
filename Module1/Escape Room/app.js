const readline = require('readline-sync')

//username for the escape room
const userName = readline.question("What is your name? ");
console.log("Hello " + userName + " welcome to the escape room." )

console.log()
var userResponse;
userResponse = readline.question("Do you want to enter the escape room? y/n ")
switch (userResponse) {
    case "y":
        console.log("You enter the escape room")   

        userResponse = readline.question("You have 3 options in front of you. 1. Put your hand in a hole, 2. find a key, 3. open the door.") 

        switch (userResponse) {
            case "1":
                console.log("You stick your hand in the hole. You feel something crawling around! You then faint from fear. You did not escape the room.")
                return;
            case "2":
                console.log("You try to find a key. You search behind a bookshelf in the room. You found a giant gold key!")
                
                
                userResponse = readline.question("What would you like to use the key on? 1. A locked chest, 2. A lockbox on the bookshelf, 3. The locked door ")

                switch (userResponse) {
                    case "1":
                        console.log("The key gets stuck in the lock of the chest. You now cannot escape the room ")
                        return;
                    case "2":
                        console.log("The key fits perfectly in the lockbox. When the box opens it triggers a trap! You were knocked out by poisonous gas. You did not escape the room ")
                        return;
                        
                    case "3":
                        console.log("The key slowly turned in the lock of the giant door. It then opened! You escaped the room!")
                        console.log("Winner")
                        return;
                }
            case "3":
                console.log("The door is locked. You did not escape the room")
                return; 
    case "n":
        console.log("Have a great day")
        return; 
}
//userResponse = readline.question("You have 3 options in front of you. 1. Put your hand in a hole, 2. find a key, 3. open the door.")
//switch (userResponse) {
    //case "1":
        //console.log("You stick your hand in the hole. You feel something crawling around! You then faint from fear.")
      //  break;
    //case "2":
        //console.log("You try to find a key. You search behind a bookshelf in the room. You found a giant gold key!")
        //break;
    ///case "3":
       /// console.log("The door is locked")
}
