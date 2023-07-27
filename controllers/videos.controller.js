const VideosServices = require('../services/videos.service')
const validUrl = require('valid-url')

const viewAllVideos = async ( limit, page ) => {
    try {
        const video = await VideosServices.viewAllVideos( limit, page )
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const searchVideoById = async (videoId) => {
    if(videoId === null){
        return 'Missing Body'
    }
    try {
        const video = await VideosServices.searchVideoById(videoId)
        return video
    } catch (error) {
        return 'error while getting video'
    }
}

const searchVideoByTitle = async (title, limit, page) => {
    if(title === null){
        return 'Missing Body'
    }
    try {
        const video = await VideosServices.searchVideoByTitle( title, limit, page )
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
        return 'Missing Body'
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
        return 'Missing Body'
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
        return 'Missing Body'
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

module.exports = { viewAllVideos, searchVideoById, searchVideoByTitle, addVideo, updateVideo, deleteVideo }