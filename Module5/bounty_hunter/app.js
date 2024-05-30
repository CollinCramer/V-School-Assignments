const express = require("express");
const app = express();
const port = process.env.Port || 9000;
const morgan = require("morgan")

// middleware for every request
app.use(express.json())
app.use(morgan(`dev`))


// routes
app.use("/bounty", require("./routes/bounty"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
