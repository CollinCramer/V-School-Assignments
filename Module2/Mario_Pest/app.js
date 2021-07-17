let total = document.getElementById('total')
let result = document.getElementById('total')
let badguys = document.forms
let badGuyBoxes = document.getElementsByClassName('badguy')
let box1 = document.getElementById('firstitem')
let box2 = document.getElementById('seconditem')
let box3 = document.getElementById('thirditem')
let box4 = document.getElementById('fourthitem')
let box5 = document.getElementById('fifthitem')
let box6 = document.getElementById('sixthitem')

function updateTotal(update){
    total.textContent = `Total Invoice: ${update} coins`
    
    let firstitem = document.getElementById('firstitem')
    if(forms.goomba.value==0 | forms.goomba.value==""){
        firstitem.className = firstitem.className + " noprint"
    }
    else{
        firstitem.className = "badguy"
    }
    let seconditem = document.getElementById('seconditem')
    if(forms.koopa.value==0 | forms.koopa.value==""){
        seconditem.className = seconditem.className + " noprint"
    }
    else{
        seconditem.className = "badguy"
    }
    let thirditem = document.getElementById('thirditem')
    if(forms.hammerbro.value==0 || forms.hammerbro.value==""){
        thirditem.className = thirditem.className + " noprint"
    }
    else{
        thirditem.className = "badguy"
    }
    let fourthitem = document.getElementById('fourthitem')
    if(forms.wiggler.value==0 || forms.wiggler.value==""){
        fourthitem.className = fourthitem.className + " noprint"
    }
    else{
        fourthitem.className = "badguy"
    }
    let fifthitem = document.getElementById('fifthitem')
    if(forms.galoomba.value==0 || forms.galoomba.value==""){
        fifthitem.className = fifthitem.className + " noprint"
    }
    else{
        fifthitem.className = "badguy"
    }
    let sixthitem = document.getElementById('sixthitem')
    if(forms.cheepcheep.value==0 || forms.cheepcheep.value==""){
        sixthitem.className = sixthitem.className + " noprint"
    }
    else{
        sixthitem.className = "badguy"
    }
}


badguys.addEventListener('keyup',e=>{

    let goomba = forms.goomba.value * 1
    let koopa = forms.koopa.value * 3
    let hammerbro = forms.hammerbro.value * 5
    let wiggler = forms.wiggler.value * 10
    let galoomba = forms.galoomba.value * 2
    let cheepcheep = forms.cheepcheep.value * 4
    updateTotal(goomba+koopa+hammerbro+wiggler+galoomba+cheepcheep)
})
badguys.addEventListener('change',e=>{
    let goomba = forms.goomba.value * 5
    let koopa = forms.koopa.value * 3
    let hammerbro = forms.hammerbro.value * 5
    let wiggler = forms.wiggler.value * 10
    let galoomba = forms.galoomba.value * 2
    let cheepcheep = forms.cheepcheep.value * 4
    updateTotal(goomba+koopa+hammerbro+wiggler+galoomba+cheepcheep)
})


box1.addEventListener('click',e=>{
    let b1 = box1.getElementsByTagName('input')[0]
    b1.focus()
})
box2.addEventListener('click',e=>{
    let b2 = box2.getElementsByTagName('input')[0]
    b2.focus()
})
box3.addEventListener('click',e=>{
    let b3 = box3.getElementsByTagName('input')[0]
    b3.focus()
})
box4.addEventListener('click',e=>{
    let b4 = box4.getElementsByTagName('input')[0]
    b4.focus()
})
box5.addEventListener('click',e=>{
    let b5 = box5.getElementsByTagName('input')[0]
    b5.focus()
})
box6.addEventListener('click',e=>{
    let b6 = box6.getElementsByTagName('input')[0]
    b6.focus()
})