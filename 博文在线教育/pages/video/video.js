// pages/video/video.js
// 获取暴露出来的收藏与取消收藏课程函数
var collection = require('../../utils/collection.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoData:"",
    xxnr:"",
    zjr:"",
    videoSrc:"",
    isOn:"1",
    isClooect:"/images/星星.png",
    isPush:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var kecheng = options.id
    //  通过传值过来的id去缓存里找数据并赋值给页面
     wx.getStorage({
       key: kecheng,
      success: (result)=>{
        console.log(result);
        this.setData({
          videoData:result.data
        })
      }
    });
    // 判断是否收藏过该课程
    wx.getStorage({
      key: 'collection',
      success: function(res) {
        if(res == undefined || rex.indexOf(kecheng)<0){
          this.setData({
            isClooect: "/images/星星.png",
            isPush: true
          })
        }else{
          this.setData({
            isClooect: "/images/星星1.png",
            isPush: false
          })
        }
      },
    })
  },
  // 标星收藏事件
  clooect(){
    if(this.data.isPush){
      this.setData({
        isClooect: "/images/星星1.png",
        isPush:false
      })
      collection.addCollection(this.data.videoData)
    }else{
      this.setData({
        isClooect: "/images/星星.png",
        isPush: true
      })
    }
  },
  // tab切换栏事件
  qiehuan(e){
    this.setData({
      isOn:e.currentTarget.dataset.i
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