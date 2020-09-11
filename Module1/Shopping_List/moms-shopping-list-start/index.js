counter = 0

const form = document["add-item"]
console.log(form.listItem)

console.log(document.getElementById("add-todo"))

form.addEventListener("submit", function(event){

    event.preventDefault()
    const value = form.listItem.value
    form.listItem.value = ""



    const li = document.createElement('li')
    li.innerHTML = `<div id= "value-${counter}">${value}</div>
                    <button class="edit" id= "${counter}" name= "edit-${counter}" onclick="editById(this.id)">edit</button>
                    <button class="delete" id = "${counter}" name = "delete-${counter}" onclick="delById(this.id)">X</button>`
                    li.id=`li-${counter}`
    const ul = document.getElementsByTagName('ul')[0]
    
    ul.prepend(li)
    counter++

})
function delById (id) {
    var ul = document.getElementsByTagName("ul")[0]
    ul.removeChild(document.getElementById(`li-${id}`))
}

function editById (id) {
    var div = document.getElementById(`value-${id}`)
    div.innerText= form.listItem.value
    form.listItem.value = ""

}
