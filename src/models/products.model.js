const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema(
    {
        videoId: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: Number
        },
        discount:{
            required: false,
            type: Number,
            default: 0
        },
        imageUrl:{
            required: true,
            type: String
        },
        productUrl: {
            required: true,
            type: String
        },
        countSeen:{
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

module.exports = mongoose.model('products', productsSchema)