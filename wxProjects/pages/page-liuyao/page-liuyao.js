// pages/page-liuyao/page-liuyao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageId: 6,
  },

  bindTapManual: function() {
    wx.navigateTo({
      url: '../page-1/page-1',
    })
  },

  bindTapAuto: function () {
    wx.navigateTo({
      url: '../page-2/page-2',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "说余梦",
      desc: "泓泉有情堪百悔，何以浮虹共短长。",
      path: "/pages/index/index?id='+ this.data.pageId'"
    }
  }
})