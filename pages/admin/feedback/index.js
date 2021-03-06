Page({

  /**
   * Page initial data
   */
  data: {
    msgs: [],
    activeBar: 1,
  },
  
  onChangeOfTabbar: function(e) {
    wx.redirectTo({
      url: getApp().globalData.tabBars.admin[e.detail]
    })
  },

  onTap: function(e) {
    let msg = e.currentTarget.dataset.msg
    let msgDetail = getApp().globalData.pages.msgDetail
    let to = `${msgDetail}?msg=${JSON.stringify(msg)}`
    wx.navigateTo({
      url: to
      })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const { activities } = require('../../../utils/data/activities.js')
    this.setData({
      activities
    })
    // this.data.activities.forEach((val, idx)=>{
    //   if (val.times < 100) {
    //     this.data.infoCount ++
    //   }
    // })
    // this.setData({
    //   infoCount: this.data.infoCount
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})