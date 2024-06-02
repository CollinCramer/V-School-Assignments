const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Bounty blueprint

const bountiesSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    living: {
        type: Boolean,
        required: true
    },
    totalbounty: {
        type: Number,
        required: true
    },
    type: String


})

module.exports = mongoose.model("Bounties", bountiesSchema)