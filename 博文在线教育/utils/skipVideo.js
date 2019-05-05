// 跳转到播放视频的页面要用的js
function skipVideo(videoData){
    wx.navigateTo({
        url: '/pages/index/detail/detail?id='+videoData.id
    });
    wx.setStorage({
        key: videoData.id,
        data: videoData.con,
        success: (result)=>{
        }
    });
}
module.exports = {
    skipVideo:skipVideo
}