const mongoose = require('mongoose')
const Schema = mongoose.Schema

// blueprint for games

const booksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Author",
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

module.exports = mongoose.model("Books", booksSchema)