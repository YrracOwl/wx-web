//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pageId: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../page-nav/page-nav',
    })
  },
  onShareAppMessage: function() {
    return {
      title: "说余梦",
      desc: "泓泉有情堪百悔，何以浮虹共短长。",
      path: "/pages/index/index?id='+ this.data.pageId'"
    }
  }
})
