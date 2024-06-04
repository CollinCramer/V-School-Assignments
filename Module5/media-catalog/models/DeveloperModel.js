const mongoose = require('mongoose')
const Schema = mongoose.Schema

const developerSchema = new Schema ({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Developer", developerSchema)