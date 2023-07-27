const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
        username: {
            required: true,
            type: String
        },
        password:{
            required: true,
            type:String
        },
        userImage:{
            required: false,
            type: String
        },
        createdAt:{
            required: false,
            type: Date,
            default: Date.now
        },
        updatedAt:{
            required: false,
            type: Date
        },
        softDeleted:{
            required: false,
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('users', usersSchema)