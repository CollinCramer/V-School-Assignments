const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')


//signup request


userRouter.post("/signup", (req, res, next) => {
    //check to see if user already exists


    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        console.log(req.body)
        if (user) {
            res.status(403)
            return next(new Error("This username is already taken"))
        }
        //create new user
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            //give token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser.withoutPassword() })
        })
    })
})


//login request


userRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        //check to make sure user exists
        if (!user) {
            res.status(403)
            return next(new Error("Username or Password Incorrect"))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(403)
                return next(new Error("Username or Password are incorrect"))
            }
            if (!isMatch) {
                res.status(403)
                return next(new Error("Username or Password are incorrect"))
            }
            //give token when signed in/ up
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: user.withoutPassword() })
        })
    })
})


module.exports = userRouter