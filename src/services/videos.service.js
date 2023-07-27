const VideosModel = require('../models/videos.model')
const mongoose = require("mongoose")

const getUrlThumbnail = (videoUrlThumbnail) => {
    return [
        `https://i.ytimg.com/vi/${videoUrlThumbnail}/hqdefault.jpg`,
        `https://i.ytimg.com/vi/${videoUrlThumbnail}/maxresdefault.jpg`
            ]
}

const getAllVideos = async (limit=10, page=1) => {
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

const getVideoById = async (videoId) => {
    try {
        const video = await VideosModel.findById(videoId).find({ softDeleted: false })
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const getVideosByTitle = async (title, limit = 10, page = 1) => {
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

module.exports = { getAllVideos, getVideoById, getVideosByTitle, addVideo}