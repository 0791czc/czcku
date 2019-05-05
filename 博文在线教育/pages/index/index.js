//index.js
// 获取暴露出来的跳转到视频详细页面的函数
  var skipVideo = require('../../utils/skipVideo.js');
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 修改轮播图片地址（支持网络引用和根目录引用）
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,//小圆点是否显示
    autoplay: true,//是否自动轮播
    interval: 5000,//自动轮播时间，1000为一秒
    duration: 1000,//滑动动画时长，1000为一秒
    circular:true,//是否循环轮播
    curriculum:"",//课程数据
    videoData:""// 视频详情页面数据
  }, changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // 点击课程分类和更多的事件处理函数
  click(e){
    var shuju = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url:"/pages/list/list?data="+shuju
    })
  },
  // 点击课程进入视频播放页面
  join(e){
    var i = e.currentTarget.dataset.index;
    var spshuju = e.currentTarget.dataset.video[i];
    skipVideo.skipVideo(spshuju);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取github上的假数据
    wx:wx.request({
      url: 'https://0791czc.github.io/web-czc/list.json',
      data: 'data',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          // 获取到的分类存到页面中
          curriculum:res.data.data,
          // 获取到的视频假数据存到页面中
          videoData:res.data.videoData
        })
      },
      fail: function(res) {
        console.log("调用失败");
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
