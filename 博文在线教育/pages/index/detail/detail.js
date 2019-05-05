// pages/index/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoData:""//课程视频信息
  },
  // 给课程绑定点击跳转到视频详情页面
  click(e){
    var id = e.currentTarget.dataset.id;
    var shuju = e.currentTarget.dataset.data;
    // 把数据存储进storage
    wx.setStorage({
      key: id,
      data: shuju,
      success: (result)=>{
      }
    });
    // 把id值通过url传值传过去
    wx.navigateTo({
      url:"/pages/video/video?id="+id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 通过传值过来的id去缓存里找数据并赋值给页面的课程视频信息
    wx.getStorage({
      key: options.id,
      success: (result)=>{
        this.setData({
          videoData:result.data
        })
      }
    });
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