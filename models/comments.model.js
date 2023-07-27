const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema(
    {
        videoId: {
            required: true,
            type: String,
        },
        username: {
            required: true,
            type: String
        },
        comment:{
            required: true,
            type: String
        },
        createdAt:{
            required: false,
            type: Date,
            default: Date.now
        },
        softDeleted:{
            required: false,
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('comments', commentsSchema)