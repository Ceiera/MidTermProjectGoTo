const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments.controller')

router.get('/', async ( req, res ) => {
    try {
        const videoId = req.query.videoId
        const comments = await commentsController.getCommentsByVideoId(videoId)
        if (comments === 'error missing query') {
            res.status(400).send({ status: 'failed', error: 'error missing query' })
        }
        if (comments === 'error while getting comments') {
            res.status(500).send({ status: 'failed', error: 'error while getting comments' })
        }
        res.status(200).send({status:'success', data: comments})
    } catch (error) {
        res.status(500).send({ status: 'failed', error: error.messages })
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { videoId, username, comment } = req.body
        const createComment = await commentsController.addComment(videoId, username, comment)
        if (createComment === 'error missing body') {
            res.status(400).send({ status: 'failed', error: 'error missing body' })
        }
        if (createComment === 'error while adding comment') {
            res.status(500).send({ status: 'failed', error: 'error while adding comment' })
        }
        res.status(200).send({ status: 'success', data: createComment })
    } catch (error) {
        res.status(500).send({ error: error.messages })
    }
})

module.exports = router