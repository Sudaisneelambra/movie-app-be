const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    movieId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
})

const Rating = mongoose.model('rating', schema)

module.exports = Rating