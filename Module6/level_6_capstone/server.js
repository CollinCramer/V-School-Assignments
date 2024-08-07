const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const URL = process.env.MONGO_URL

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect(
    URL,
    (err) => console.log('Connected to the DB', err)
)

// routes
app.use("/user", require('./routes/userRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }))
app.use('/api/media', require('./routes/mediaRouter.js'))
app.use('/api/comments', require('./routes/commentsRouter'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})


app.listen(9000, () => {
    console.log(`Server is running on local port 9000`)
})
