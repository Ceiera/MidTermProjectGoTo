const express = require('express')
const router = express.Router()
const videosController = require('../controllers/videos.controller')

router.get('/', async ( req, res ) => {
    try {
        const video = await videosController.getAllVideos(req.query.limit, req.query.page)
        if (video === 'error while getting video') {
            res.status(500).send({ status: 'failed', error: 'error while getting video' })
        }
        res.status(200).send({ status: 'success', data: video })
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

router.post('/', async ( req, res ) => {
    try {
        const { title, videoUrl } = req.body
        const video = await videosController.addVideo( title, videoUrl )
        if (video === 'error invalid type') {
            res.status(400).send({ status: 'failed', error: 'error invalid type' })
        }
        if (video === 'error missing body') {
            res.status(400).send({ status: 'failed', error: 'error missing body' })
        }
        if (video === 'error while adding video') {
            res.status(500).send({ status: 'failed', error: 'error while adding video' })
        }
        res.status(200).send({ status: 'success', data: video })
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

router.put('/', async ( req, res ) => {
    try {
        const { videoId, title, videoUrl } = req.body
        const video = await videosController.updateVideo( videoId, title, videoUrl )
        if (video === 'error invalid type') {
            res.status(400).send({ status: 'failed', error: 'error invalid type' })
        }
        if (video === 'error missing body') {
            res.status(400).send({ status: 'failed', error: 'error missing body' })
        }
        if (video === 'error while updating video') {
            res.status(500).send({ status: 'failed', error: 'error while updating video' })
        }
        res.status(200).send({ status: 'success', data: video })
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

router.delete('/:id', async ( req, res ) => {
    try {
        const videoId = req.params.id
        const video = await videosController.deleteVideo(videoId)
        if (video === 'error missing params') {
            res.status(400).send({ status: 'failed', error: 'error missing params' })
        }
        if (video === 'error video not found') {
            res.status(404).send({ status: 'failed', error: 'error video not found' })
        }
        if (video === 'error while deleting video') {
            res.status(500).send({ status: 'failed', error: 'error while deleting video' })
        }
        res.status(204).send({ status: 'success' })
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

router.get('/:id', async ( req, res ) => {
    try {
        const videoId = req.params.id
        const video = await videosController.getVideoById(videoId)
        if (video === 'error missing params') {
            res.send(400).send({ status: 'failed', error: 'error missing params' }) 
        }
        if (video === 'error while getting video') {
            res.send(500).send({ status: 'failed', error: 'error while getting video' }) 
        }
        res.status(200).send({ status: 'success', data: video })
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }

})

module.exports = router