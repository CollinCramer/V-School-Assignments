const readline = require('readline-sync')

//global variables

var player = {
    name: (""),
    healthpoints: 1000,
    Inventory: []
}

var enemy = {
    healthpoints: 500,
}
var supers = []

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
//enemy attack and player attack function
function playerAttackPower () {
    return randomNumber(100, 500);
}
function enemyAttackPower () {
    return randomNumber(50, 200);
}

//when a player or enemy attacks function
function battlePlayerHealth () {
    player.healthpoints = player.healthpoints - enemyAttackPower();
    return player.healthpoints;
}
function battleEnemyHealth () {
    enemy.healthpoints = enemy.healthpoints - playerAttackPower();
    return enemy.healthpoints;
}

//fight function. It'll subtract and display HP totals and decreases like a normal RPG

//random Powers

function powers() {
    
    var randomSuperMove = randomNumber(0,5);
    var selectedSuper = supers [randomSuperMove];
    return selectedSuper;
}
//generates a random Hive Enemy
function enemies() {
    var enemy = ["thrall ", "Acolyte ", "Knight ", "Wizard ", "Ogre ", "Shrieker "];
    var randomEnemy = randomNumber(0,5);
    var selectedEnemy = enemy [randomEnemy];
    return selectedEnemy;
}

//engrams will drop and go to inventory
function engrams() {
    var engram = ["Blue", "Purple", "Exotic", "Bright :("];
    var randomEngram = randomNumber(0,3);
    var selectedEngram = engram [randomEngram];
    player.Inventory.push(selectedEngram);
    return selectedEngram;
}


//function to print the players inventory string
function prntPlayerInventory() {
    console.log(player.Inventory);
}

//function for encountering a random enemy while walking
function randomEncounter () {
    var randomEnemyNumber = Math.floor((Math.random() * 3) + 1);
    if (randomEnemyNumber === 2) {
        return true;
    } else {
        return false;
    }
}

//function to try to run from an enemy. I don't know why you would, a Guardian never runs from a fight :)
function runFromBattle () {
    var randomRunNumber = Math.floor((Math.random() * 2) + 1);
    if (randomRunNumber === 1) {
        console.log(" I can't believe you would attempt to run from a fight! A Guardian never runs. Too bad you weren't able to escape and your light was extinguished. ")
        player.healthpoints = 0
    } else {
        console.log(" You are a disgrace to the Vanguard! A Guardian never runs from a fight! ");
    }
}
//start of the readline sync game stuff
const gameBegin = readline.keyIn("Hello, Welcome to JavaScript Destiny! This is a cheap knock-off of the video game Destiny. Are you ready to begin? Hit any key to continue!.. ")

//ask for name and store in empty string in player Object

const name = readline.question ("What is your name, Guardian? ")
player.name = name
console.log (`Welcome ${name} to the Vanguard. You're first mission is to travel to another colony and exterminate as many hive as you can as you walk between settlements `)

//pick a subclass to autofill the Super moves array
var subclass = readline.question ('Before your mission, which faction are you loyal to? Hit "1" for Warlock, "2" for Hunter, and "3" for Titan ' )
    if (subclass === "1") {
        supers = ["NovaBomb", "Chaos Reach", "Dawnblade", "tickle-fingers", "Well of Radience", "Nova Warp"];
        console.log("It is always good to have another Warlock in the Vanguard");
        console.log(supers);
    } else if (subclass === "2") {
        supers = ["Golden-Gun", "Spectral Blades", "Arc Staff", "Whirlwind Guard", "Shadow Shot", "Blade Barrage"];
        console.log("It's always good to have another Hunter in the Vangard");
        console.log(supers);
    } else if (subclass === "3")  {
        supers = ["Fists of Havoc", "Thundercrash", "Sentinel Shield", "Ward of Dawn", "Hammer of Sol", "Burning Maul"];
        console.log("It's always good to have another Titan in the Vangard");
        console.log(supers);        
    }

//fight function
function fight() {
    // enemyAttackPower = Math.floor((Math.random() * 10) + 1)
    // playerAttackPower = Math.floor((Math.random() * 10) + 1)
    console.log(enemy.healthpoints)
    battleEnemyHealth()
    console.log(enemy.healthpoints) 
     if ( enemy.healthpoints > 0) {
        battlePlayerHealth();
    }
    
    if (player.healthpoints <= 0) {
        console.log("You're light has been extinguished. The Darkness is closer to finishing it's conquest")
        return false;
    } else if (enemy.healthpoints <= 0) {
        console.log("You attack the hive militant with " + powers() + ". You have " + player.healthpoints + " health remaining. You killed the enemy. Look! The enemy has dropped an engram! You received a " + engrams())
        enemy.healthpoints = 500
        return false;
    } 
    console.log("You attack the hive militant with " + powers() + ". You have " + player.healthpoints + " health remaining. The Enemy has " + enemy.healthpoints + " health left.")
    return true;
    
}

while (player.healthpoints > 0) {
    var walkOrInvent= readline.question("You see the next settlement in the distance. Would you like to walk towards it 'w' or would you like to check your inventory 'i'")
    if (walkOrInvent === "w" && randomEncounter()) {
        var encounter = true
        var enemyName = enemies()
        while (encounter === true) {       
            var attack = readline.question("You have encountered a " + enemyName + "press 'e' to engage and 'r' to run!" )
            if (attack === "e") {
                encounter = fight();

            } else {
                runFromBattle()
                encounter = false
            }
        }
    } else if (walkOrInvent === "i"){
        prntPlayerInventory()
    }

}
console.log("you died..... GAME OVER")
  
  
