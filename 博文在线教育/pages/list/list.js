// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curriculum:"",//课程分类数据
    videoData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shuju = JSON.parse(options.data)
    // 把传过来的数据赋值过来
      this.setData({
        curriculum:shuju
      })
      // 动态设置当前页面的标题
      wx.setNavigationBarTitle({
        title: shuju.text
      })
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