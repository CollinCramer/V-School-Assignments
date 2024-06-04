const mongoose = require('mongoose')
const Schema = mongoose.Schema

// blueprint for games

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    studio: {
        type: Schema.Types.ObjectId,
        ref: "Studio",
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

module.exports = mongoose.model("Movies", movieSchema)
