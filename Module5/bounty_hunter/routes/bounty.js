const express = require("express")
const bountyRouter = express.Router()
const Bounties = require('../models/bounties.js')
// Dont need uuid now that I have a database. Will delete later after all methods are changed over
// const { v4: uuidv4 } = require('uuid')



// commenting out data because its no longer necessary. Will delete after I am sure I don't need it

// const bounties = [
//     {firstname: "Darth", lastname: "Maul", living: true, totalbounty: 8500000, type: "Sith", _id: uuidv4()},
//     {firstname: "Savage", lastname: "Opress", living: true, totalbounty: 6500000, type: "Sith", _id: uuidv4()},
//     {firstname: "Darth", lastname: "Vader", living: true, totalbounty: 9500000, type: "Sith", _id: uuidv4()},
//     {firstname: "Obi-Wan", lastname: "Kenobi", living: true, totalbounty: 10000000, type: "Jedi", _id: uuidv4()},
//     {firstname: "Yoda", lastname: "n/a", living: true, totalbounty: 9500000, type: "Jedi", _id: uuidv4()},
//     {firstname: "Ahsoka", lastname: "Tano", living: true, totalbounty: 8500000, type: "JKedi", _id: uuidv4()},
// ]



// // get all
bountyRouter.get("/", (req, res, next) => {
    Bounties.find((err, bounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

// get one
// bountyRouter.get("/:bountyId",(req,res, next) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     if(!foundBounty){
//         const error = new Error(`Bounty ${bountyId} not found`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundBounty)
// })

// post one
bountyRouter.post("/",(req, res, next) => {
   const newBounty = new Bounties(req.body)
   newBounty.save((err, savedBounty) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedBounty)
   })
})

// get by filtered type

bountyRouter.get("/search/type", (req, res, next) => {
    Bounties.find({type: req.query.type}, (err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

// delete one item

bountyRouter.delete("/:bountyId", (req,res, next) => {
    Bounties.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstname} ${deletedItem.lastname} from the Bounty Database. Happy hunting!`)
    }) 
})

// edit a bounty

bountyRouter.put("/:bountyId", (req,res, next) => {
   Bounties.findOneAndUpdate(
    // find this one and update
    { _id: req.params.bountyId},
    // what to update it with as second argument
    req.body,
    // telling it to send back the updated version
    { new: true },
    (err, updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    })
   
})


module.exports = bountyRouter