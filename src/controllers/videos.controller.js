const VideosServices = require('../services/videos.service')
const validUrl = require('valid-url')

const getAllVideos = async ( limit, page ) => {
    try {
        const video = await VideosServices.getAllVideos( limit, page )
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const getVideoById = async (videoId) => {
    if(videoId === null){
        return 'error missing params'
    }
    try {
        const video = await VideosServices.getVideoById(videoId)
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const getVideosByTitle = async (title, limit, page) => {
    if(title === null){
        return 'error missing body'
    }
    try {
        const video = await VideosServices.getVideosByTitle( title, limit, page )
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const addVideo =  async (title, videoUrl) => {
    if(!validUrl.isWebUri(videoUrl)){
        return 'error invalid type'
    }
    if(title === null || videoUrl === null) {
        return 'error missing body'
    }
    try {
        const video = VideosServices.addVideo(title, videoUrl)
        return video
    } catch (error) {
        return 'error while adding video'
    }
}

const updateVideo = async (videoId, title, videoUrl) => {
    if(videoId === null || title === null === videoUrl === null){
        return 'error missing body'
    }
    if(!validUrl.isWebUri(videoUrl)){
        return 'error invalid type'
    }
    try {
        const video = await VideosServices.updateVideo( videoId, title, videoUrl)
        return video
    } catch (error) {
        return 'error while updating video'
    }
}

const deleteVideo = async (videoId) => {
    if(videoId === null){
        return 'error missing params'
    }
    try {
        const video = await VideosServices.deleteVideo(videoId)
        if (video === "error video not found") {
            return 'error video not found'
        }
        return video
    } catch (error) {
        return 'error while deleting video'
    }
}

module.exports = { getAllVideos, getVideoById, getVideosByTitle, addVideo, updateVideo, deleteVideo }