const express = require("express")
const thingRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4(),
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4(),
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4(),
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4(),
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4(),
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4(),
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4(),
    }
]



// // get all
thingRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

// get one
thingRouter.get("/:thingId",(req,res) => {
    const thingId = req.params.thingId
    const foundThing = inventoryItems.find(thing => thing._id === thingId)
    res.send(foundThing)
})

// post one
thingRouter.post("/",(req, res) => {
    const newThing = req.body
    newThing._id = uuidv4()
    inventoryItems.push(newThing)
    console.log(inventoryItems)
    res.send(`Successfully added ${newThing.name} to the database`)
})

// get by filtered type

thingRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredThing = inventoryItems.filter(thing => thing.type === type)
    res.send(filteredThing)
})



module.exports = thingRouter