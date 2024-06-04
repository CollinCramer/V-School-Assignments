const express = require("express")
const gamesRouter = express.Router()
const Developer = require('../models/DeveloperModel.js')
const Games = require('../models/GamesModel.js')





// // get all
gamesRouter.get("/", (req, res, next) => {
    Games.find((err, game) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(game)
    })
})

// get one
gamesRouter.get("/:gameId", (req,res, next) => {
    Games.findOne({ _id: req.params.gameId }, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    }) 
})

// post one
gamesRouter.post("/",(req, res, next) => {

   const newGame = new Games(req.body)
   newGame.save((err, savedGame) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedGame)
   })

})

// get by filtered type

gamesRouter.get("/search/platform", (req, res, next) => {
    Games.find({platform: req.query.platform}, (err, game) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(game)
    })
})

gamesRouter.get("/search/developerId", (req, res, next) => {
    Games.find({developerId: req.query.developerId}, (err, game) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(game)
    })
})

// delete one item

gamesRouter.delete("/:gamesId", (req,res, next) => {
    Games.findOneAndDelete({ _id: req.params.gamesId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from the Database`)
    }) 
})

// edit a post

gamesRouter.put("/:gamesId", (req,res, next) => {
   Games.findOneAndUpdate(
    // find this one and update
    { _id: req.params.gamesId},
    // what to update it with as second argument
    req.body,
    // telling it to send back the updated version
    { new: true },
    (err, updatedGame) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedGame)
    })
   
})


module.exports = gamesRouter