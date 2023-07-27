const VideosModel = require('../models/videos.model')

const getUrlThumbnail = (videoUrlThumbnail) => {
    return [
        `https://i.ytimg.com/vi/${videoUrlThumbnail}/hqdefault.jpg`,
        `https://i.ytimg.com/vi/${videoUrlThumbnail}/maxresdefault.jpg`
            ]
}

const viewAllVideos = async (limit=10, page=1) => {
    try {
        if (isNaN(limit) || isNaN(page)){
            return 'error invalid type'
        }
        if ( page<1 ) {
            page = 1
        }
        const video = await VideosModel.find({softDeleted: false}).skip((page-1)*limit).limit(limit)
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const searchVideoById = async (videoId) => {
    try {
        const video = await VideosModel.findById(videoId)
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const searchVideoByTitle = async (title, limit = 10, page = 1) => {
    try {
        const video = await VideosModel.find({title: title}).skip((page-1)*limit).limit(limit)
        if (video === null) {
            return "Video not Found"
        }
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const addVideo =  async (title, videoUrl) => {
    const videoId = videoUrl.split('v=')[1]
    const videoUrlThumbnail = getUrlThumbnail(videoId)
    try {
        const video = new VideosModel({
            title: title,
            videoUrl: videoUrl,
            videoUrlThumbnail: videoUrlThumbnail
        })
        const createdVideo = await video.save()
        return createdVideo
    } catch (error) {
        return 'error while adding video'
    }
}

const updateVideo = async (videoId, title, videoUrl) => {
    try {
        const videoId = videoUrl.split('v=')[1]
        const videoUrlThumbnail = getUrlThumbnail(videoId)
        const updatedAt = Date.now()
        const data = {
            title: title, 
            videoUrl: videoUrl,
            videoUrlThumbnail: videoUrlThumbnail,
            updatedAt: updatedAt
        }
        const video = await VideosModel.findByIdAndUpdate(videoId, data)
        return video
    } catch (error) {
        return 'error while updating video'
    }
}

const deleteVideo = async (videoId) => {
    try {
        const video = await VideosModel.findByIdAndUpdate(videoId, { updatedAt: Date.now(), softDeleted: true })
        if (video === null) {
            return 'error video not found'
        }
        return video
    } catch (error) {
        return 'error while deleting video'
    }
}

module.exports = { viewAllVideos, searchVideoById, searchVideoByTitle, addVideo, updateVideo, deleteVideo }