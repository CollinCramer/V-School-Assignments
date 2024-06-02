
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    item: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    perishable:{
        type: Boolean,
        required: false
    },
    
    price:{
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('Item', itemSchema)