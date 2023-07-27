const CommentsModel = require('../models/comments.model')

const getCommentsByVideoId = async (videoId) => {
    try {
        const comments = CommentsModel.find({videoId:videoId})
        return comments
    } catch (error) {
        return 'error while getting comments'
    }
}

const addComment = async (videoId, username, comment) => {
    try {
        const createComment = new CommentsModel({
            videoId: videoId,
            username: username,
            comment: comment
        })
        const createdComment = createComment.save()
        return createdComment
    } catch (error) {
        return 'error while adding comment'
    }
}

module.exports = { getCommentsByVideoId, addComment }