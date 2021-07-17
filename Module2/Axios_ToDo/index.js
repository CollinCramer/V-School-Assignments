
// GET's THE TODO's
function getData(){
    axios.get("https://api.vschool.io/collincramer/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



// LISTS THE TODO TITLES
function listData(data){
    console.log(data)
    

    clearList()
    
    for(let i = 0; i < data.length; i++){
        const id = data[i]._id
        const div = document.createElement('div')
        div.id = id
        document.getElementById('todoList').appendChild(div)
        const h2 = document.createElement('h2')
        h2.textContent = data[i].title

        const imgApp = document.createElement('img')
        console.log(imgApp,data[i])
        imgApp.src = data[i].imgUrl;
        div.appendChild(imgApp);

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.checked = data[i].completed;
        console.log(data)
        console.log(checkBox.checked)
        checkBox.addEventListener('click' , finishedToDo);
        div.appendChild(checkBox)
        const h4 = document.createElement('h4')
        h4.textContent = "completed"
        div.appendChild(h4)


       


       
        document.getElementById(id).appendChild(h2)

        //adding a delete button and edit button to each element
        const button1 = document.createElement('button')
        button1.innerHTML = "Delete"
        document.getElementById(id).appendChild(button1)
        button1.addEventListener('click', deleteToDo)
        
        
        //adding an edit button to each created element
        const button2 = document.createElement('button')
        button2.innerHTML = "Edit"
        document.getElementById(id).appendChild(button2)
        //add button functionality

    }
}

function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todoForm"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/collincramer/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
    
})

// Delete todo
const deleteToDo = (event) => {
    event.preventDefault();
    var id = event.target.parentElement.id
    console.log(id)
    axios.delete(`https://api.vschool.io/collincramer/todo/${id}`)
        .then(response => { 
            if (response.data.msg === 'Successfully deleted record') {
                event.target.parentElement.remove();
            }
        })
        .catch(error => console.log(error))
};

//create a new todo

const newTodo = (event) => {
    event.preventDefault();
    const todoForm = document.todoForm;
    console.log(todoForm)

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        
    };

    axios
        .post("https://api.vschool.io/collincramer/todo", newTodo)
        .then((response) => {
            getData();
            clearForm(todoForm)
        })
        .catch((error) => console.log(error));
};

// code to mark toDo as completed
const finishedToDo = event => {
    const target = event.target;
    const parentClass = target.parentElement.classList;
    const id = target.parentElement.id;

    axios.put(`https://api.vschool.io/collincramer/todo/${id}`, {completed: target.checked})
    .then(response => {
        response.data.completed ? parentClassList.add(complete) : parentClassList.remove(complete)
    })
    .catch(error => error)
}

getData()


