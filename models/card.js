const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    cast:{
        type:String,
        required: true
    },
    filePath:{
        type:String,
        required: true
    }
})

const card = mongoose.model('card', schema)

module.exports = card