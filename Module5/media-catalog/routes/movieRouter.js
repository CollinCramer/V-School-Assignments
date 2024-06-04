const express = require("express")
const movieRouter = express.Router()
const Studio = require('../models/StudiosModel.js')
const Movies = require('../models/MovieModel.js')

// trying asynchronous functions

// get all
movieRouter.get('/', async(req, res, next) => {
    try {
        const movie = await Movies.find()
        return res.status(200).send(movie)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// get one
movieRouter.get("/:movieId", async(req,res, next) => {

    try {
        const movie = await Movies.findOne({ _id: req.params.movieId })
        return res.status(200).send(movie)

    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// get help on post one asynchronous

// post one

movieRouter.post("/:studioId", async(req, res, next) => {
    try {
        req.body.studio = req.params.studioId
        const newMovie = new Movies(req.body)
        const saveMovie = await newMovie.save()
        return res.status(201).send(saveMovie)
        
    } catch (error) {
        res.status(500)
        return next(err)
        
    }
})





movieRouter.post("/:studioId",(req, res, next) => {
    req.body.studio = req.params.studioId
   const newMovie = new Movies(req.body)
   newMovie.save((err, savedMovie) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedMovie)
   })
})

module.exports = movieRouter