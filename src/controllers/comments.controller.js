const commentsServices = require('../services/comments.service')

const getCommentsByVideoId = async (videoId) => {
    if (videoId === undefined) {
        return 'error missing query'
    }
    try {    
        const comments = await commentsServices.getCommentsByVideoId(videoId)
        return comments
    } catch (error) {
        return 'error while getting comments'
    }
}

const addComment = async (videoId, username, comment) => {
    if (!videoId || !username || !comment) {
        return 'error missing body'
    }
    try {
        const createComment = await commentsServices.addComment(videoId, username, comment)
        return createComment
    } catch (error) {
        return 'error while adding comment'
    }
}

module.exports = { getCommentsByVideoId, addComment }