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
    res.send(bounties)
})

// get one
bountyRouter.get("/:bountyId",(req,res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// post one
bountyRouter.post("/",(req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    console.log(bounties)
    res.send(`Successfully added ${newBounty.firstname} ${newBounty.lastname} to the database`)
})

// get by filtered type

bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredBounty = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounty)
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
    res.send(updatedBounty)
})


module.exports = bountyRouter