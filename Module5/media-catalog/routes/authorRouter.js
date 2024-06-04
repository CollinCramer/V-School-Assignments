const express = require("express")
const authorRouter = express.Router()
const Author = require('../models/AuthorModel.js')


authorRouter.get("/", (req, res, next) => {
    Author.find((err, dev) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dev)
    })
})

authorRouter.post("/", (req, res, next) => {
    const newAuth = new Author(req.body)
    newAuth.save((err, savedAuth) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedAuth)
    })
})

module.exports = authorRouter