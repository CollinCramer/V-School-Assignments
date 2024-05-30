const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const bounties = [
    {firstname: "Darth", lastname: "Maul", living: true, totalbounty: 8500000, type: "Sith", _id: uuidv4()},
    {firstname: "Savage", lastname: "Opress", living: true, totalbounty: 6500000, type: "Sith", _id: uuidv4()},
    {firstname: "Darth", lastname: "Vader", living: true, totalbounty: 9500000, type: "Sith", _id: uuidv4()},
    {firstname: "Obi-Wan", lastname: "Kenobi", living: true, totalbounty: 10000000, type: "Jedi", _id: uuidv4()},
    {firstname: "Yoda", lastname: "n/a", living: true, totalbounty: 9500000, type: "Jedi", _id: uuidv4()},
    {firstname: "Ahsoka", lastname: "Tano", living: true, totalbounty: 8500000, type: "JKedi", _id: uuidv4()},
]



// // get all
bountyRouter.get("/", (req, res) => {
    res.status(200)
    res.send(bounties)
})

// get one
bountyRouter.get("/:bountyId",(req,res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`Bounty ${bountyId} not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

// post one
bountyRouter.post("/",(req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    console.log(bounties)
    res.status(201).send(newBounty)
})

// get by filtered type

bountyRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type
    if(!type){
        const error = new Error("You must provide a faction type")
        res.status(500)
        return next(error)
    }
    const filteredBounty = bounties.filter(bounty => bounty.type === type)
    res.status(200).send(filteredBounty)
})

// delete one item

bountyRouter.delete("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted Bounty`)
})

// edit a bounty

bountyRouter.put("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.status(201).send(updatedBounty)
})


module.exports = bountyRouter