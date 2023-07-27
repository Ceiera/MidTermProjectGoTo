const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products.controller')

router.get('/', async ( req, res ) => {
    try {
        const videoId = req.query.videoId
        const product = await productsController.getProductsByVideoId(videoId)
        if (product === 'error missing query') {
            res.status(400).send({ status: 'failed', error: 'error missing query' })
        }
        if (product === 'error while getting products') {
            res.status(500).send({ status: 'failed', error: 'error while getting products' })
        }
         res.status(200).send({status: 'success', data: product})
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

router.post('/', async ( req, res ) => {
    try {
        const { videoId, title, price, discount, imageUrl, productUrl } = req.body
        const product = await productsController.addProduct(videoId,title,price,discount,imageUrl,productUrl)
        if (product === 'error missing body') {
            res.status(400).send({ status: 'failed', error: 'error missing body' })
        }
        if (product === 'error invalid type') {
            res.status(400).send({ status: 'failed', error: 'error invalid type' })
        }
        if (product === 'error while adding products') {
            res.status(500).send({ status: 'failed', error: 'error while adding products' })
        }
        res.status(200).send({ status: 'success', data: product })
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

module.exports = router