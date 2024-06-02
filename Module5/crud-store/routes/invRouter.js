const express = require('express')
const invRouter = express.Router()
const items = require('../models/item')


// get all
invRouter.get("/", (req, res, next) => {
    items.find((err, item) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

// get one
invRouter.get("/:itemId", (req,res, next) => {
    items.findOne({ _id: req.params.itemId }, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    }) 
})

// post one
invRouter.post("/",(req, res, next) => {
    const newItem = new items(req.body)
    newItem.save((err, savedItem) => {
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(201).send(savedItem)
    })
 })

// delete one
invRouter.delete("/:itemId", (req,res, next) => {
    items.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.item} from the Database`)
    }) 
})

// search by parameter (perishable)
invRouter.get("/search/perishable", (req, res, next) => {
    items.find({perishable: req.query.perishable}, (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

// edit an item

invRouter.put("/:itemId", (req,res, next) => {
    items.findOneAndUpdate(
     { _id: req.params.itemId},
     req.body,
     { new: true },
     (err, updatedItem) => {
         if(err){
             res.status(500)
             return next(err)
         }
         return res.status(201).send(updatedItem)
     })
    
 })






module.exports = invRouter