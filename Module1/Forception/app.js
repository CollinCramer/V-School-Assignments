var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var alphabetArr = alphabet.split("");
console.log("alphabet Split: ", alphabetArr)
console.log("people: ", people)


function force(people, alphabetArr){
    const newerArr = [];
        for( var i = 0; i < people.length; i++){
            newerArr.push(people[i]);
                for( var j = 0; alphabetArr.length; j++){
                    newerArr.push(alphabetArr[j]);
                }
        }
        return newerArr

}
force(people, alphabetArr)
console.log(force(people.alphabetArr))

