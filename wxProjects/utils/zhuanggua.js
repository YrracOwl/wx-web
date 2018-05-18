// 需要在使用的页面引入 const calgua = require('../../utils/zhuanggua.js');
// 然后直接调用 calgua.zhuanggua()就行

const app = getApp().globalData;

var array = app.array;
var objectArray = app.objectArray;

var zhuanggua = function() {
      var index1 = app.index1;
      var index2 = app.index2;
      var index3 = app.index3;
      var index4 = app.index4;
      var index5 = app.index5;
      var index6 = app.index6;
      console.log(app.index6, app.index5, app.index5, app.index4, app.index3, app.index2, app.index1);
      var sanjinggua = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      sanjinggua = app.sanjingArray;
      if (app.inputMonth === "") {
        app.inputMonth = util.solar2lunar().gzMonth;
      }
      if (app.inputDay === "") {
        app.inputDay = util.solar2lunar().gzDay;
      }
      /*数据处理------开始*/


      //data used in core
      //外卦内卦的阴阳
      var data = new Array(0, 0, 0, 0, 0, 0);
      //外卦内卦的动爻
      var yao = new Array(0, 0, 0, 0, 0, 0);

      var indexgroup = new Array(index6, index5, index4, index3, index2, index1);
      console.log(indexgroup);
      //预处理：外卦内卦的阴阳和动爻数组
      var datapreprocess = function (indexgroup) {
        for (var i = 0; i < 6; i++) {
          switch (indexgroup[i]) {
            case "3": {
              //yang
              data[i] = 1;
              //no movement
              yao[i] = 0;
            }
              break;

            case "1": {
              //yang
              data[i] = 1;
              //has movement
              yao[i] = 1;
            }
              break;

            case "4": {
              //yin
              data[i] = 0;
              //no movement
              yao[i] = 0;
            }
              break;

            case "2": {
              //yin
              data[i] = 0;
              //has movement
              yao[i] = 1;
            }
              break;

          }
        }
      }
      datapreprocess(indexgroup);
      console.log(data);
      console.log(yao);

      var waiguanum;
      var neiguanum;

      //找寻先天数
      var sanjingseeker = function (data) {
        var guaup = data.slice(0, 3);
        var guadown = data.slice(3, );
        guaup = guaup.join();
        guadown = guadown.join();
        switch (guaup) {
          case "1,1,1":
            waiguanum = 1;
            break;
          case "0,1,1":
            waiguanum = 2;
            break;
          case "1,0,1":
            waiguanum = 3;
            break;
          case "0,0,1":
            waiguanum = 4;
            break;
          case "1,1,0":
            waiguanum = 5;
            break;
          case "0,1,0":
            waiguanum = 6;
            break;
          case "1,0,0":
            waiguanum = 7;
            break;
          case "0,0,0":
            waiguanum = 8;
            break;
        }

        switch (guadown) {
          case "1,1,1":
            neiguanum = 1;
            break;
          case "0,1,1":
            neiguanum = 2;
            break;
          case "1,0,1":
            neiguanum = 3;
            break;
          case "0,0,1":
            neiguanum = 4;
            break;
          case "1,1,0":
            neiguanum = 5;
            break;
          case "0,1,0":
            neiguanum = 6;
            break;
          case "1,0,0":
            neiguanum = 7;
            break;
          case "0,0,0":
            neiguanum = 8;
            break;
        }
      }
      sanjingseeker(data);
      app.waiguanumbers = waiguanum;
      app.neiguanumbers = neiguanum;

      //获取上下经卦动爻数组
      var yaoup = yao.slice(0, 3);
      var yaodown = yao.slice(3, );

      //所起卦外卦内卦形状
      var shapeup = new Array();
      shapeup = sanjinggua[waiguanum].shape;
      app.shapeup = shapeup;

      var shapedown = new Array();
      shapedown = sanjinggua[neiguanum].shape;
      app.shapedown = shapedown;

      //卦象干支
      var dizhiup = new Array(0, 0, 0);
      var dizhidown = new Array(0, 0, 0);

      for (var i = 0; i < 3; i++) {
        dizhiup[i] = sanjinggua[waiguanum].waidizhi[i];
      }
      for (var i = 0; i < 3; i++) {
        dizhidown[i] = sanjinggua[neiguanum].neidizhi[i];
      }

      app.dizhiup = dizhiup;
      app.dizhidown = dizhidown;
      //定世应+安六亲

      //找世爻
      var shi;
      var shiseeker = function (shapeup, shapedown) {
        if (shapeup === shapedown) {
          shi = 6;
        }
        if (((shapeup[2] === shapedown[2]) || (shapeup[1] === shapedown[1])) && (shapeup[0] !== shapedown[0])) {
          shi = 4;
        }
        if ((shapeup[2] === shapedown[2]) && (shapeup[1] === shapedown[1]) && (shapeup[0] !== shapedown[0])) {
          shi = 5;
        }
        if ((shapeup[2] !== shapedown[2]) && (shapeup[1] !== shapedown[1]) && (shapeup[0] !== shapedown[0])) {
          shi = 3;
        }
        if ((shapeup[2] === shapedown[2]) && (shapeup[1] !== shapedown[1]) && (shapeup[0] === shapedown[0])) {
          shi = 3;
        }
        if ((shapeup[2] !== shapedown[2]) && (shapeup[1] !== shapedown[1]) && (shapeup[0] === shapedown[0])) {
          shi = 2;
        }
        if ((shapeup[2] !== shapedown[2]) && (shapeup[1] === shapedown[1]) && (shapeup[0] === shapedown[0])) {
          shi = 1;
        }
      }
      shiseeker(shapeup, shapedown);

      //定卦宫与五行
      var guagong;
      var decidewuxing = function (shi, waiguanum, neiguanum, shapeup, shapedown) {
        if (shi === 1 || shi === 2 || shi === 6) {
          guagong = sanjinggua[waiguanum];
        }
        if ((shapeup[0] !== shapedown[0]) && (shapeup[1] !== shapedown[1]) && (shapeup[2] !== shapedown[2])) {
          guagong = sanjinggua[waiguanum];
        }
        if ((shapeup[0] === shapedown[0]) && (shapeup[1] !== shapedown[1]) && (shapeup[2] === shapedown[2])) {
          guagong = sanjinggua[neiguanum];
        }
        if (shi === 4 || shi === 5) {
          guagong = sanjinggua[sanjinggua[neiguanum].yaobian["1,1,1"]];
        }
      }
      decidewuxing(shi, waiguanum, neiguanum, shapeup, shapedown);
      app.guagongnumbers = guagong.id;

      var wuxinggua = guagong.wuxing;

      //安六亲
      var liuqingua = new Array(0, 0, 0, 0, 0, 0);
      var liuqinfunc = function (wuxinggua, dizhiup, dizhidown) {
        //内外卦地支五行
        var upguawuxing = new Array(0, 0, 0);
        var downguawuxing = new Array(0, 0, 0);
        var liushisigua = new Array(0, 0, 0, 0, 0, 0);
        upguawuxing = [dizhiup[0].slice(1, ), dizhiup[1].slice(1, ), dizhiup[2].slice(1, )];
        downguawuxing = [dizhidown[0].slice(1, ), dizhidown[1].slice(1, ), dizhidown[2].slice(1, )];
        for (var i = 0; i < 3; i++) {
          liushisigua[i] = wuxinggua.concat(upguawuxing[i]);
        }
        for (var i = 0; i < 3; i++) {
          liushisigua[i + 3] = wuxinggua.concat(downguawuxing[i]);
        }
        //找寻六亲
        for (var i = 0; i < 6; i++) {
          liuqingua[i] = app.liuqin[liushisigua[i]];
        }
      }
      liuqinfunc(wuxinggua, dizhiup, dizhidown);
      app.liuqingua = liuqingua;

      //获取世应数组
      var shiyinglist = new Array(0, 0, 0, 0, 0, 0);
      var shiyingreturn = function (shi) {
        for (var i = 0; i < 6; i++) {
          shiyinglist[(6 - shi + i) % 6] = app.shiyingtuple[i];
        }
      }
      shiyingreturn(shi);
      app.shiyinglist = shiyinglist;

      //月建月破，日建日破
      var month = app.inputMonth;
      var day = app.inputDay;
      var
        yuejian,
        yuepo,
        rijian,
        ripo;
      yuejian = app.dizhiwuxing[month.slice(1, )];
      yuepo = app.dizhichong[month.slice(1, )];

      rijian = app.dizhiwuxing[day.slice(1, )];
      ripo = app.dizhichong[day.slice(1, )];
      //空亡日
      var kwdizhi = app.dizhiseq[day.slice(1, )];
      var kwtiangan = app.tianganseq[day.slice(0, 1)];
      var kongwangri = new Array(0, 0);
      kongwangri = [app.dizhituple[(10 - kwtiangan + kwdizhi) % 12], app.dizhituple[(11 - kwtiangan + kwdizhi) % 12]];

      app.yuejian = yuejian;
      app.yuepo = yuepo;
      app.rijian = rijian;
      app.ripo = ripo;
      app.kongwangri = kongwangri;

      //六神位置
      var sixanimalposition = new Array(0, 0, 0, 0, 0, 0);
      var zhuriliushen = function (richen) {
        var changeyao = app.zhuriliushen[richen.slice(0, 1)];
        for (var i = 0; i < 6; i++) {
          sixanimalposition[5 - i] = app.sixanimals[(i + changeyao) % 6];
        }
      }
      zhuriliushen(day);
      app.sixanimalposition = sixanimalposition;


      //卦宫形状
      var shapeupgong = new Array(0, 0, 0);
      var shapedowngong = new Array(0, 0, 0);
      shapeupgong = sanjinggua[guagong.id].shape;
      shapedowngong = sanjinggua[guagong.id].shape;

      app.shapeupgong = shapeupgong;
      app.shapedowngong = shapedowngong;

      //卦宫伏神五行

      //卦宫卦象干支
      var dizhiupgong = new Array(0, 0, 0);
      var dizhidowngong = new Array(0, 0, 0);

      for (var i = 0; i < 3; i++) {
        dizhiupgong[i] = sanjinggua[guagong.id].waidizhi[i];
      }
      for (var i = 0; i < 3; i++) {
        dizhidowngong[i] = sanjinggua[guagong.id].neidizhi[i];
      }

      app.dizhiupgong = dizhiupgong;
      app.dizhidowngong = dizhidowngong;

      //卦宫卦象伏神
      var liuqinguagong = new Array(0, 0, 0, 0, 0, 0);
      var fushenfunc = function (wuxinggua, dizhiupgong, dizhidowngong) {
        //内外卦地支五行
        var upguawuxinggong = new Array(0, 0, 0);
        var downguawuxinggong = new Array(0, 0, 0);
        var liushisiguagong = new Array(0, 0, 0, 0, 0, 0);
        upguawuxinggong = [dizhiupgong[0].slice(1, ), dizhiupgong[1].slice(1, ), dizhiupgong[2].slice(1, )];
        downguawuxinggong = [dizhidowngong[0].slice(1, ), dizhidowngong[1].slice(1, ), dizhidowngong[2].slice(1, )];
        for (var i = 0; i < 3; i++) {
          liushisiguagong[i] = wuxinggua.concat(upguawuxinggong[i]);
        }
        for (var i = 0; i < 3; i++) {
          liushisiguagong[i + 3] = wuxinggua.concat(downguawuxinggong[i]);
        }
        //找寻六亲
        for (var i = 0; i < 6; i++) {
          liuqinguagong[i] = app.liuqin[liushisiguagong[i]];
        }
      }
      fushenfunc(wuxinggua, dizhiupgong, dizhidowngong);

      app.liuqinguagong = liuqinguagong;

      //之卦动爻五行
      var zhigua = new Array(0, 0, 0, 0, 0, 0);
      var zhiguafunc = function (waiguanum, neiguanum, yao) {
        var yaoup = new Array(yao[0], yao[1], yao[2]);
        var yaodown = new Array(yao[3], yao[4], yao[5]);
        var yaoupstr = yaoup.join();
        var yaodownstr = yaodown.join();
        var waiguabian = new Array(0, 0, 0);
        var neiguabian = new Array(0, 0, 0);
        waiguabian = sanjinggua[sanjinggua[waiguanum].yaobian[yaoupstr]].waidizhi;
        neiguabian = sanjinggua[sanjinggua[neiguanum].yaobian[yaodownstr]].neidizhi;
        for (var i = 0; i < 3; i++) {
          if (yao[i] === 1) {
            zhigua[i] = "化".concat(waiguabian[i]);
          }
          if (yao[i] === 0) {
            zhigua[i] = "　　";
          }
        }
        for (var i = 0; i < 3; i++) {
          if (yao[i + 3] === 1) {
            zhigua[i + 3] = "化".concat(neiguabian[i]);
          }
          if (yao[i + 3] === 0) {
            zhigua[i + 3] = "　　";
          }
        }
      }
      zhiguafunc(waiguanum, neiguanum, yao);
      app.zhigua = zhigua;
      /*数据处理------结束*/
      var nameorigin = new Array(app.waiguanumbers, app.neiguanumbers);
      nameorigin = nameorigin.join();
      app.godtellgua = app.liushisigualist[nameorigin];

      var namechange = new Array(app.guagongnumbers, app.guagongnumbers);
      namechange = namechange.join();
      app.gonggua = app.liushisigualist[namechange];
}

module.exports = {
    zhuanggua: zhuanggua
}