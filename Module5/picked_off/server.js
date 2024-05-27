const express = require(`express`)
const app = express()
const { v4: uuidv4 } = require('uuid')



app.use("/supers", require("./routes/supers"))

app.use("/supers", (req, res, next) => {
    console.log("The middleware is firing")
    next()
})

app.listen(9000, () => {
    console.log("Server is running on port 9000")
})