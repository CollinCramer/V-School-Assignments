require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.Port || 9000;
const morgan = require("morgan")
const mongoose = require('mongoose')




// middleware for every request
app.use(express.json())
app.use(morgan(`dev`))
mongoose.set("strictQuery", true);

// connect to database above routes
mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
    console.log("connected to database", err);
  });
  
// routes
app.use("/api/games", require("./routes/gamesRouter")),
app.use("/api/developers", require("./routes/developerRouter"))
app.use("/api/authors", require("./routes/authorRouter"))
app.use("/api/books", require("./routes/booksRouter"))
app.use("/api/movies", require("./routes/movieRouter"))
app.use("/api/studios", require("./routes/studioRouter"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
