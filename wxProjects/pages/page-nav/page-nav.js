// pages/page-nav/page-nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageId: 3,
  },
  bindTapLiuyao: function(){
    wx.navigateTo({
      url: '../page-liuyao/page-liuyao',
    })
  },
  bindTapShuifa: function () {
    wx.navigateTo({
      url: '../page-shuifa/page-shuifa',
    })
  },
  onShareAppMessage: function () {
    return {
      title: "说余梦",
      desc: "泓泉有情堪百悔，何以浮虹共短长。",
      path: "/pages/index/index?id='+ this.data.pageId'"
    }
  }

})