// pages/page-result/page-result.js
const util = require('../../utils/utils.js');
const app = getApp().globalData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageId: 4,
    benguaname: "",
    gongguaname: "",
    shiyinglist: ["", "", "", "", "", ""],
    shapeuplist: ["", "", ""],
    shapedownlist: ["", "", ""],
    liuqinlist: ["", "", "", "", "", ""],
    dizhiuplist: ["", "", ""],
    dizhidownlist: ["", "", ""],
    biangualist: ["", "", "", "", "", ""],
    liushenlist: ["", "", "", "", "", ""],
    shapeupgonglist: ["", "", ""],
    shapedowngonglist: ["", "", ""],
    fushenlist: ["", "", ""],
    dizhiupgonglist: ["", "", ""],
    dizhidowngonglist: ["", "", ""],
    yuejian: "　",
    yuepo: "　",
    rijian: "　",
    ripo: "　",
    kongwangri: ["", ""],
    month: "　　",
    day: "　　",
    emptyele: "　",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.setData({
      shiyinglist: app.shiyinglist,
      shapeuplist: app.shapeup,
      shapedownlist: app.shapedown,
      liuqinlist: app.liuqingua,
      dizhiuplist: app.dizhiup,
      dizhidownlist: app.dizhidown,
      biangualist: app.zhigua,
      liushenlist: app.sixanimalposition,
      shapeupgonglist: app.shapeupgong,
      shapedowngonglist: app.shapedowngong,
      fushenlist: app.liuqinguagong,
      dizhiupgonglist: app.dizhiupgong,
      dizhidowngonglist: app.dizhidowngong,
      yuejian: app.yuejian,
      yuepo: app.yuepo,
      rijian: app.rijian,
      ripo: app.ripo,
      kongwangri: app.kongwangri,
      month: app.inputMonth,
      day: app.inputDay,
      benguaname: app.godtellgua,
      gongguaname: app.gonggua,
    })
  },
  onShareAppMessage: function () {
    return {
      title: "说余梦",
      desc: "泓泉有情堪百悔，何以浮虹共短长。",
      path: "/pages/index/index?id='+ this.data.pageId'"
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
  }
})