const productsServices = require('../services/products.service')
const validUrl = require('valid-url')

const getProductsByVideoId = async (videoId) => {
    if (videoId === undefined) {
        return 'error missing query'
    }
    try {    
        const product = await productsServices.getProductsByVideoId(videoId)
        return product
    } catch (error) {
        return 'error while getting products'   
    }
}

const addProduct = async (videoId, title, price, discount, imageUrl, productUrl) => {
    if(videoId === null || title === null || price === null || imageUrl === null|| productUrl === null ){
        return 'error missing body'
    }
    if (!validUrl.isWebUri(imageUrl) || !validUrl.isWebUri(productUrl)) {
        return 'error invalid type'
    }
    try {
        const product = await productsServices.addProduct(videoId, title, price, discount, imageUrl, productUrl)
        return product
    } catch (error) {
        return 'error while adding products'
    }
}

module.exports = { getProductsByVideoId, addProduct } 