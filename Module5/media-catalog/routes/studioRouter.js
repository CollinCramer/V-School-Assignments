const express = require("express")
const studioRouter = express.Router()
const Studio = require('../models/StudiosModel.js')


studioRouter.get("/", (req, res, next) => {
    Studio.find((err, stud) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stud)
    })
})

studioRouter.post("/", (req, res, next) => {
    const newStudio = new Studio(req.body)
    newStudio.save((err, savedStudio) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedStudio)
    })
})

module.exports = studioRouter