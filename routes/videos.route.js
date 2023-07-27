const express = require('express')
const router = express.Router()
const videosController = require('../controllers/videos.controller')

router.get('/', async ( req, res ) => {
    try {
        const video = await videosController.viewAllVideos(req.query.limit, req.query.page)
        if (video === 'error while getting video') {
            res.status(500).send({ error: 'error while getting video' })
        }
        res.status(200).send(video)
    } catch (error) {
        res.status(500).send({ error: error.messages })
    }
})

router.post('/', async ( req, res ) => {
    try {
        const { title, videoUrl } = req.body
        const video = await videosController.addVideo( title, videoUrl )
        if (video === 'error invalid type') {
            res.status(400).send({ error: 'error invalid type' })
        }
        if (video === 'Missing Body') {
            res.status(400).send({ error: 'Missing Body' })
        }
        if (video === 'error while adding video') {
            res.status(500).send({ error: 'error while adding video' })
        }
        res.status(200).send(video)
    } catch (error) {
        res.status(500).send({ error: error.messages })
    }
})

router.put('/', async ( req, res ) => {
    try {
        const { videoId, title, videoUrl } = req.body
        const video = await videosController.updateVideo( videoId, title, videoUrl )
        if (video === 'error invalid type') {
            res.status(400).send({ error: 'error invalid type' })
        }
        if (video === 'Missing Body') {
            res.status(400).send({ error: 'Missing Body' })
        }
        if (video === 'error while adding video') {
            res.status(500).send({ error: 'error while adding video' })
        }
        res.status(200).send(video)
    } catch (error) {
        res.status(500).send({ error: error.messages })
    }
})

router.delete('/', async ( req, res ) => {
    try {
        const { videoId } = req.body
        const video = await videosController.deleteVideo(videoId)
        if (video === 'Missing Body') {
            res.status(400).send({ error: 'Missing Body' })
        }
        if (video === 'error video not found') {
            res.status(404).send({ error: 'error video not found' })
        }
        if (video === 'error while deleting video') {
            res.status(500).send({ error: 'error while deleting video' })
        }
    } catch (error) {
        res.status(500).send({ error: error.messages })
    }
})

router.get('/:id', async ( req, res ) => {
    const videoId = req.params.id
    try {
        const video = await videosController.searchVideoById(videoId)
        if (video === 'Missing Body') {
            res.send(400).send({ error: 'Missing Body' }) 
        }
    } catch (error) {
        res.status(500).send({ error: error.messages })
    }

})

module.exports = router