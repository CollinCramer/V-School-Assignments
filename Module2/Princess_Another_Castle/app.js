// Princess is in Another Castle

const readline = require('readline-sync')


//setting up my class for the constructor function
class Player {
    constructor(name){
        this.name = name
        this.coins = 0
        this.status = 'small'
        this.hasStar = false
        this.gameActive = true
    }
    

    //when the player gets hit
    playerHit() {
        if (this.hasStar) {
            this.hasStar = false;
            console.log('Your star protected you!')
        } else if (this.status === 'fire flower') {
            this.status = 'big'
        } else if (this.status === 'big'){
            this.status = 'small'
        } else {
            this.status = 'dead'
            this.gameActive = false
        }
    } 

    // function for power ups
    getPowerup() {
        if (this.status === 'big') {
            this.status = 'fire flower'
        } else if (this.status === 'small') {
            this.status = 'big'
        } else if (this.status === 'fire flower') {
            console.log('You recieved a STAR!')
            this.hasStar = true
        }
    }
    // function to add coins
    addCoins() {
        this.coins += 1;
    }
    // function to print the current player status
    print() {
        console.log(`Name: ${this.name}\nCoins: ${this.coins}\nStatus: ${this.status}\nStar in stock? ${this.hasStar}\n `)
    }

}
// const user = new Player('Mario')

//Creating the random number generation for the game
const princessCastle = (user) => {
    let randomMath = Math.ceil(Math.random() * 3);
    if (user.status === 'dead') {
        clearInterval(startGame);
    } else if (randomMath === 1) {
        user.playerHit();
        user.print();
    } else if (randomMath === 2) {
        user.getPowerup();
        user.print();
    } else if (randomMath === 3) {
        user.addCoins();
        user.print()
    }
}

let user = null
while (user == null){
    
    var result = readline.question("Please select a Character; (1) Mario  (2) Luigi")

    if (result == "1") {
        user = new Player ("Mario")
    } else  if (result == "2"){
        user = new Player ("Luigi")
    } else {
        console.log("Please choose a valid Character")
    } 

    

}

//make the set name function inside of the class

//creating the function to start the game
const startGame = setInterval(() => princessCastle(user), 1200)