const express = require("express");
const app = express();
const port = process.env.Port || 9000;
const morgan = require("morgan")

// middleware for every request
app.use(express.json())
app.use(morgan(`dev`))

app.use("/bounty", require("./routes/bounty"))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
