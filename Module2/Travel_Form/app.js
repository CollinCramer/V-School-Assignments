var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector();

document.getElementById("submit").addEventListener("click", formAlert);

function formAlert() {
    console.log("hello")
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    
    if (form.elements['vege'].checked) {
        diet.push(document.getElementById("vege").value);
    }
    else if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (form.elements['none'].checked) {
        diet.push(document.getElementById('none').value);
    }
    else {
        diet.push["Other"]
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nHave a safe flight!");
}


// submit.addEventListener("click", formAlert);