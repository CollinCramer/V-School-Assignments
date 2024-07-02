const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mediaSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true
    },

    imgUrl: {
        type: String
    },
    // One to Many relationships
    user:
    {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // adding users this array of objects to make sure they can only review once
    likedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    // adding users this array of objects to make sure they can only like/dislike once
    dislikedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    reviewedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
   
})




module.exports = mongoose.model("Media", mediaSchema)