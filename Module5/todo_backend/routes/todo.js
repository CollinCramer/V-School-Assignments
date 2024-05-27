const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const todos = [
    {
        name: "hiking",
        description: "Go hike Crow's Peak",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    } ,   {
        name: "work",
        description: "frito lay 4am",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },   {
        name: "school work",
        description: "knock out level 5",
        imageUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()
    }
]


todoRouter.use("/", (req, res, next) => {
    console.log("The middleware is firing")
    next()
})
// // get all
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

// get one
todoRouter.get("/:todoId",(req,res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// post one
todoRouter.post("/",(req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodos)
    console.log(todos)
    res.send(`Successfully added ${newTodo.name} to the database`)
})

// get by filtered completed

todoRouter.get("/search/completed", (req, res) => {
    const completed = req.query.completed
    const filteredTodo = todos.filter(todo => todo.completed === completed)
    res.send(filteredTodo)
})

// delete one item

todoRouter.delete("/:todoId", (req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send(`Successfully deleted Bounty`)
})

// edit a bounty

todoRouter.put("/:todoId", (req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todo[todoIndex], req.body)
    res.send(updatedTodo)
})


module.exports = todoRouter