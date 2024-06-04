const mongoose = require('mongoose')
const Schema = mongoose.Schema

// blueprint for games

const gamesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    developerId: {
        type: Schema.Types.ObjectId,
        ref: "Developer",
    },
    img: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
    },
    completed: {
        type: Boolean
    }
})

module.exports = mongoose.model("Games", gamesSchema)
