// pages/page-2/page-2.js
const util = require('../../utils/utils.js');
var Chance = require('../../utils/chance.js');
const calgua = require('../../utils/zhuanggua.js');
var chance = new Chance();
const app = getApp().globalData;
var startnum;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageId: 2,
    isDoing: true,
    isDone: false,
    isChecked5: false,
    isChecked4: false,
    isChecked3: false,
    isChecked2: false,
    isChecked1: false,
    isChecked0: true,
    movelist: ["第一次", "第二次", "第三次", "第四次", "第五次", "第六次"],
    moving: 0,
    yaolist: ["请摇卦<待输入>", "正正正<老阳>", "反反反<老阴>", "正反反<少阳>", "反正正<少阴>"],
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    index5: 0,
    index6: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.inputMonth = util.solar2lunar().gzMonth;
    app.inputDay = util.solar2lunar().gzDay;
    startnum = 0;
    this.setData({
      moving: 0,
    })
  },

  bindTapJump:function(){
    calgua.zhuanggua();
    wx.navigateTo({
      url: '../page-result/page-result',
    })
  },

  AskTheDao: function(){
    var checklist = [this.data.isChecked0, this.data.isChecked1, this.data.isChecked2, this.data.isChecked3, this.data.isChecked4, this.data.isChecked5];
    if (checklist[startnum]) {
      startnum++;
      var askforanswers = function(){
        var tempreturn;
        var tempt = chance.integer({ min: 1, max: 8 });
        console.log(tempt);
        if (tempt === 4) {
          tempreturn = 1;
        } else if (tempt === 5){
          tempreturn = 2;
        } else if (tempt === 8 || tempt === 6 || tempt === 7){
          tempreturn = 3;
        } else if (tempt === 2 || tempt === 3 || tempt === 1){
          tempreturn = 4;
        }
        return tempreturn;
      };
      switch (startnum) {
        case 1: {
          app.index1 = askforanswers();
          this.setData({
            isChecked1: true,
            index1: app.index1,
            moving: 1,
          })
          app.index1 = app.index1.toString();
        }
          break;
        case 2: {
          app.index2 = askforanswers();
          this.setData({
            isChecked2: true,
            index2: app.index2,
            moving: 2,
          })
          app.index2 = app.index2.toString();
        }
          break;
        case 3: {
          app.index3 = askforanswers();
          this.setData({
            isChecked3: true,
            index3: app.index3,
            moving: 3,
          })
          app.index3 = app.index3.toString();
        }
          break;
        case 4: {
          app.index4 = askforanswers();
          this.setData({
            isChecked4: true,
            index4: app.index4,
            moving: 4,
          })
          app.index4 = app.index4.toString();
        }
          break;
        case 5: {
          app.index5 = askforanswers();
          this.setData({
            isChecked5: true,
            index5: app.index5,
            moving: 5,
          })
          app.index5 = app.index5.toString();
        }
          break;
        case 6: {
          app.index6 = askforanswers();
          this.setData({
            index6: app.index6,
            moving: 6,
            isDone: true,
            isDoing: false,
          })
          app.index6 = app.index6.toString();
        }
          break;
      }
    }
  },

  bindTapAskDao: function(){
    wx.showToast({
      title: '祈求神明中',
      icon: 'loading',
      duration: 600,
    });
    setTimeout(this.AskTheDao,600);

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