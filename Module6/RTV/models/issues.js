const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },

    // One to Many relationships
    user:
    {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // adding users this array of objects to make sure they can only like/dislike once
    likedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    // adding users this array of objects to make sure they can only like/dislike once
    dislikedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})




module.exports = mongoose.model("Issue", issueSchema)