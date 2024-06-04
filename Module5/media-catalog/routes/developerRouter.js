const express = require("express")
const developerRouter = express.Router()
const Developer = require('../models/DeveloperModel.js')


developerRouter.get("/", (req, res, next) => {
    Developer.find((err, dev) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dev)
    })
})

developerRouter.post("/", (req, res, next) => {
    const newDev = new Developer(req.body)
    newDev.save((err, savedDev) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedDev)
    })
})

module.exports = developerRouter