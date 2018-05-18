// pages/page-1/page-1.js
const calgua = require('../../utils/zhuanggua.js');

const util = require('../../utils/utils.js');
var Chance = require('../../utils/chance.js');
var chance = new Chance();

const app = getApp().globalData;
var array = app.array;
var objectArray = app.objectArray;

var rand;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageId: 1,
    month: util.solar2lunar().gzMonth,
    day: util.solar2lunar().gzDay,
    indexone: 0,
    indextwo: 0,
    indexthree: 0,
    indexfour: 0,
    indexfive: 0,
    indexsix: 0,
    array,
    objectArray,
    disabled1: false,
    disabled2: true,
    disabled3: true,
    disabled4: true,
    disabled5: true,
    disabled6: true,
    isChecked5: false,
    isChecked4: false,
    isChecked3: false,
    isChecked2: false,
    showhim: false,
    random: rand,
  
    test: ["生活能有什么寓意呢？\n在它里面有些指望就好了。", "梦里不知身是客,\n一晌贪欢。", "我是人间惆怅客,\n知君何事泪纵横。", "叶上初阳干宿雨，\n水面清圆，\n一一风荷举。", "人的眼光是沉重的负担，\n是吸人膏血的吻。", "每个人都经历着受骗和伤痛，\n最终掌握了生活下去的本领。", "何况尘世嚣嚣，\n我们不管干什么，\n都是困难重重。", "所以寻找就是一切，\n而找的是谁却无关紧要。", "请不要使我知道任何故事的开头，\n除非那故事已经结束了。", "人在二十五岁时，\n什么事情都想干，\n但是往往一事无成。", "在一团漆黑中，\n她等待和死亡会面，\n死亡似乎是最伟大的情人。\n这是因为它非常陌生。", "活着成为一只猪和死掉，\n也不知哪个更可怕。", "生活是件很麻烦的事，\n其中最大的麻烦是避免误会。", "永不妥协就是拒绝命运的安排，\n直到它回心转意，\n拿出我能接受的东西来。", "她现在的这个身体没有了挑战性，\n只能诱使男人和她做爱，\n却不能使他对生活不满意。", "人活在世界上会做各种各样的梦，\n梦里一切事都可能发生。", "人在年轻时充满了做事的冲动，\n无休无止地变革一切，\n等到这些冲动骤然消失，\n他就老了。", "李卫公死后，\n他就保存在别人的记忆里。", "我们的人品的一切可取之处，\n都该感谢沉默的教诲。", "请你不要吃我不要吃我，\n我给你唱一支好听的歌。", "一想到你，\n我这张丑脸就泛起微笑。","过去是没有它就活得没意思，\n现在没有你也没意思。"],

  },
  //chuyao
  bindPickerChangeOne: function(e){
    this.setData({
      indexone: e.detail.value,
      isChecked1: true,
      disabled2: false
    });
    app.index1 = e.detail.value;

  },
  //eryao
  bindPickerChangeTwo: function (e) {
    this.setData({
      indextwo: e.detail.value,
      isChecked2: true,
      disabled3: false
    });
    app.index2 = e.detail.value;
  },
  //sanyao
  bindPickerChangeThree: function (e) {
    this.setData({
      indexthree: e.detail.value,
      isChecked3: true,
      disabled4: false
    });
    app.index3 = e.detail.value;
  },
  //siyao
  bindPickerChangeFour: function (e) {
    this.setData({
      indexfour: e.detail.value,
      isChecked4: true,
      disabled5: false
    });
    app.index4 = e.detail.value;
  },
  //wuyao
  bindPickerChangeFive: function (e) {
    this.setData({
      indexfive: e.detail.value,
      isChecked5: true,
      disabled6: false
    });
    app.index5 = e.detail.value;
  },
  //shangyao
  bindPickerChangeSix: function (e) {
    this.setData({
      indexsix: e.detail.value
    });
    app.index6 = e.detail.value;
  },
  //inputMonth
  bindMonthInput: function (e) {
    app.inputMonth = e.detail.value;
    this.setData({
      month: e.detail.value
    })
  },

  bindDayInput: function (e) {
    app.inputDay = e.detail.value;
    this.setData({
      month: e.detail.value
    })
  },
  /**
     * 点击按钮事件
     */
  showDialogBtn: function () {
    this.setData({
      showhim: true
    });
  },
  /**
     * 弹出框蒙层截断touchmove事件
     */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showhim: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
    wx.navigateTo({
      url: '../page-result/page-result',
    })
  },
  /**
   * 底部装卦按钮点击事件
   */
  bindTapJump: function (e){
    if (app.index1 === 0 || app.index2 === 0 || app.index3 === 0 || app.index4 === 0 || app.index5 === 0 || app.index6 === 0){
      wx.showModal({
        title: '错误',
        content: '请选择正确的卦象！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else {
      this.showDialogBtn();
      calgua.zhuanggua();
    }
    
  },

  onLoad: function (options) {
  },

  onShow: function (options) {
    app.inputMonth = util.solar2lunar().gzMonth;
    app.inputDay = util.solar2lunar().gzDay;
    rand = chance.integer({ min: 0, max: 21 });
    this.setData({
      random: chance.integer({ min: 0, max: 21 })
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