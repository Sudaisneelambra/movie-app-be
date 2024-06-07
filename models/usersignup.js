const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const user = mongoose.model('users',userSchema)

module.exports = user