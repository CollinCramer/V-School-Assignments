const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb+srv://collintest:collincramertest@user-authentication.r13fv11.mongodb.net/?retryWrites=true&w=majority&appName=user-authentication',

  (props) => console.log('Connected to the DB', props)

)

app.use('/auth', require('./routes/authRouter.js'))
// gatekeeper for unauthorized access
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // PAYLOAD = req.user
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  // error thrown if unauthorized access
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})