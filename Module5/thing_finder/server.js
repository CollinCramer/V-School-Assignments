const express = require("express");
const app = express();
const port = process.env.Port || 9000;


app.use(express.json())

app.use("/things", require("./routes/things"))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
