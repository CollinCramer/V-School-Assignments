const express = require("express")
const bountyRouter = express.Router()
const Bounties = require('../models/bounties.js')





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

// bountyRouter.get('/', async(req, res, next) => {
//     try {
//         const bounty = await Bounties.find()
//         return res.status(200).send(bounty)
//     } catch (err) {
//         res.status(500)
//         return next(err)
//     }
// })

// get one
bountyRouter.get("/:bountyId", (req,res, next) => {
    Bounties.findOne({ _id: req.params.bountyId }, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    }) 
})

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