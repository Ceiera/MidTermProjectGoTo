const mongoose = require('mongoose')

const videosSchema = new mongoose.Schema(
    {
        title: {
            required: true,
            type: String
        },
        videoUrl:{
            required: true,
            type:String
        },
        videoUrlThumbnail:{
            required:true,
            type:[String]
        },
        countPlaying:{
            required: false,
            type: Number,
            default: 0
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

module.exports = mongoose.model('videos', videosSchema)