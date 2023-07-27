const ProductsModel = require('../models/products.model')

const getProductsByVideoId = async (videoId) => {
    try {
        const products = await ProductsModel.find({videoId: videoId})
        return products
    } catch (error) {
        return 'error while getting products'
    }
} 

const addProduct = async (videoId, title, price, discount=0, imageUrl, productUrl) => {
    try {
        
        if (isNaN(price) || isNaN(discount)) {
            return 'error invalid type'
        }
        const product = new ProductsModel({
            videoId: videoId,
            title: title,
            price: price,
            discount: discount,
            imageUrl: imageUrl,
            productUrl: productUrl
        })
        const createdProduct = product.save()
        return createdProduct
    } catch (error) {
        console.log("we here?");
        return 'error while adding products'
    }
}

module.exports = { getProductsByVideoId, addProduct }