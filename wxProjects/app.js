//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    index5: 0,
    index6: 0,
    waiguanumbers: 0,
    neiguanumbers: 0,
    guagongnumbers: 0,
    godtellgua: 0,
    gonggua: 0,
    inputMonth: "",
    inputDay: "",
    shapeup: [0,0,0],
    shapedown: [0, 0, 0],
    dizhiup: [0, 0, 0],
    dizhidown: [0, 0, 0],
    liuqingua: [0, 0, 0, 0, 0, 0],
    shiyinglist: [0, 0, 0, 0, 0, 0],
    yuejian:"",
    yuepo: "",
    rijian: "",
    ripo: "",
    kongwangri:[0,0],
    sixanimalposition:[0,0,0,0,0,0],
    shapeupgong: [0,0,0],
    shapedowngong: [0,0,0],
    dizhiupgong: [0,0,0],
    dizhidowngong: [0,0,0],
    liuqinguagong: [0,0,0,0,0,0],
    zhigua: [0,0,0,0,0,0],

    array: ["<待输入>", "正正正<老阳>", "反反反<老阴>", "正反反<少阳>", "反正正<少阴>"],
    objectArray: [
      {
        id: 0,
        name: "<待输入>"
      },
      {
        id: 1,
        name: "正正正<老阳>"
      },
      {
        id: 2,
        name: "反反反<老阴>"
      },
      {
        id: 3,
        name: "正反反<少阳>"
      },
      {
        id: 4,
        name: "反正正<少阴>"
      }
    ],
    //used in core
    sanjingArray:[
      {
        id:0
      },
      {
        id: 1,
        name: "乾",
        wuxing: "金",
        waidizhi: ["戌土", "申金", "午火"],
        neidizhi: ["辰土", "寅木", "子水"],
        shape: ["▇▇▇▇▇▇▇", "▇▇▇▇▇▇▇", "▇▇▇▇▇▇▇"],
        yaobian: {
          "0,0,0": 1,
          "1,0,0": 2,
          "0,1,0": 3,
          "0,0,1": 5,
          "1,1,0": 4,
          "1,0,1": 6,
          "0,1,1": 7,
          "1,1,1": 8
        }
      },
      {
        id: 2,
        name: "兑",
        wuxing: "金",
        waidizhi: ["未土", "酉金", "亥水"],
        neidizhi: ["丑土", "卯木", "巳火"],
        shape: ["▇▇▇　▇▇▇", "▇▇▇▇▇▇▇", "▇▇▇▇▇▇▇"],
        yaobian: {
          "0,0,0": 2,
          "1,0,0": 1,
          "0,1,0": 4,
          "0,0,1": 6,
          "1,1,0": 3,
          "1,0,1": 5,
          "0,1,1": 6,
          "1,1,1": 7
        }
      },
      {
        id: 3,
        name: "离",
        wuxing: "火",
        waidizhi: ["巳火", "未土", "酉金"],
        neidizhi: ["亥水", "丑土", "卯木"],
        shape: ["▇▇▇▇▇▇▇", "▇▇▇　▇▇▇", "▇▇▇▇▇▇▇"],
        yaobian: {
          "0,0,0": 3,
          "1,0,0": 4,
          "0,1,0": 1,
          "0,0,1": 7,
          "1,1,0": 2,
          "1,0,1": 8,
          "0,1,1": 5,
          "1,1,1": 6
        }
      },
      {
        id: 4,
        name: "震",
        wuxing: "木",
        waidizhi: ["戌土", "申金", "午火"],
        neidizhi: ["辰土", "寅木", "子水"],
        shape: ["▇▇▇　▇▇▇", "▇▇▇　▇▇▇", "▇▇▇▇▇▇▇"],
        yaobian: {
          "0,0,0": 4,
          "1,0,0": 3,
          "0,1,0": 2,
          "0,0,1": 8,
          "1,1,0": 1,
          "1,0,1": 7,
          "0,1,1": 6,
          "1,1,1": 5
        }
      },
      {
        id: 5,
        name: "巽",
        wuxing: "木",
        waidizhi: ["卯木", "巳火", "未土"],
        neidizhi: ["酉金", "亥水", "丑土"],
        shape: ["▇▇▇▇▇▇▇", "▇▇▇▇▇▇▇", "▇▇▇　▇▇▇"],
        yaobian: {
          "0,0,0": 5,
          "1,0,0": 6,
          "0,1,0": 7,
          "0,0,1": 1,
          "1,1,0": 8,
          "1,0,1": 2,
          "0,1,1": 3,
          "1,1,1": 4
        }
      },
      {
        id: 6,
        name: "坎",
        wuxing: "水",
        waidizhi: ["子水", "戌土", "申金"],
        neidizhi: ["午火", "辰土", "寅木"],
        shape: ["▇▇▇　▇▇▇", "▇▇▇▇▇▇▇", "▇▇▇　▇▇▇"],
        yaobian: {
          "0,0,0": 6,
          "1,0,0": 5,
          "0,1,0": 8,
          "0,0,1": 2,
          "1,1,0": 7,
          "1,0,1": 1,
          "0,1,1": 5,
          "1,1,1": 3
        }
      },
      {
        id: 7,
        name: "艮",
        wuxing: "土",
        waidizhi: ["寅木", "子水", "戌土"],
        neidizhi: ["申金", "午火", "辰土"],
        shape: ["▇▇▇▇▇▇▇", "▇▇▇　▇▇▇", "▇▇▇　▇▇▇"],
        yaobian: {
          "0,0,0": 7,
          "1,0,0": 8,
          "0,1,0": 9,
          "0,0,1": 3,
          "1,1,0": 6,
          "1,0,1": 4,
          "0,1,1": 1,
          "1,1,1": 2
        }
      },
      {
        id: 8,
        name: "坤",
        wuxing: "土",
        waidizhi: ["酉金", "亥水", "丑土"],
        neidizhi: ["卯木", "巳火", "未土"],
        shape: ["▇▇▇　▇▇▇", "▇▇▇　▇▇▇", "▇▇▇　▇▇▇"],
        yaobian: {
          "0,0,0": 8,
          "1,0,0": 7,
          "0,1,0": 6,
          "0,0,1": 4,
          "1,1,0": 5,
          "1,0,1": 3,
          "0,1,1": 2,
          "1,1,1": 1
        }
      }
    ],
    wuxingke:{
      "金": "木",
      "木": "土",
      "土": "水",
      "水": "火",
      "火": "金"
    },
    wuxingsheng:{
      "金": "水",
      "水": "木",
      "木": "火",
      "火": "土",
      "土": "金"
    },
    liuqin:{
      //第一个为我
      "金金": "兄弟",
      "木木": "兄弟",
      "水水": "兄弟",
      "火火": "兄弟",
      "土土": "兄弟",
      //
      "金土": "父母",
      "木水": "父母",
      "水金": "父母",
      "火木": "父母",
      "土火": "父母",
      //
      "金火": "官鬼",
      "木金": "官鬼",
      "水土": "官鬼",
      "火水": "官鬼",
      "土木": "官鬼",
      //
      "金水": "子孙",
      "木火": "子孙",
      "水木": "子孙",
      "火土": "子孙",
      "土金": "子孙",
      //
      "金木": "妻财",
      "木土": "妻财",
      "水火": "妻财",
      "火金": "妻财",
      "土水": "妻财"
    },
    sixanimals: ["青龙", "朱雀", "勾陈", "腾蛇", "白虎", "玄武"],
    zhuriliushen:{
      "甲": 0, 
      "乙": 0, 
      "丙": 1, 
      "丁": 1, 
      "戊": 2, 
      "己": 3, 
      "庚": 4, 
      "辛": 4, 
      "壬": 5, 
      "癸": 5
    },
    dizhituple: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    dizhiseq:{
      "子": 1, 
      "丑": 2, 
      "寅": 3, 
      "卯": 4, 
      "辰": 5, 
      "巳": 6, 
      "午": 7, 
      "未": 8, 
      "申": 9, 
      "酉": 10, 
      "戌": 11, 
      "亥": 12
    },
    tianganseq:{
      "甲": 1, 
      "乙": 2, 
      "丙": 3, 
      "丁": 4, 
      "戊": 5, 
      "己": 6, 
      "庚": 7, 
      "辛": 8, 
      "壬": 9, 
      "癸": 10
    },
    dizhichong:{
      "子": "午", 
      "丑": "未", 
      "寅": "申", 
      "卯": "酉", 
      "辰": "戌", 
      "巳": "亥",
      "午": "子", 
      "未": "丑", 
      "申": "寅", 
      "酉": "卯", 
      "戌": "辰", 
      "亥": "巳"
    },
    dizhiwuxing:{
      "子": "水", 
      "丑": "土", 
      "寅": "木", 
      "卯": "木", 
      "辰": "土", 
      "巳": "火",
      "午": "火", 
      "未": "土", 
      "申": "金", 
      "酉": "金", 
      "戌": "土", 
      "亥": "水"
    },
    shiyingtuple: ["世", "　", "　", "应", "　", "　"],
    liushisigualist:{
      "1,1": "乾为天", "2,1": "泽天夬", "3,1": "火天大有", "4,1": "雷天大壮", "5,1": "风天小畜", "6,1": "水天需", "7,1": "山天大畜", "8,1": "地天泰",
      "1,2": "天泽履", "2,2": "兑为泽", "3,2": "火泽睽", "4,2": "雷泽归妹", "5,2": "风泽中孚", "6,2": "水泽节", "7,2": "山泽损", "8,2": "地泽临",
      "1,3": "天火同人", "2,3": "泽火革", "3,3": "离为火", "4,3": "雷火丰", "5,3": "风火家人", "6,3": "水火既济", "7,3": "山火贲", "8,3": "地火明夷",
      "1,4": "天雷无妄", "2,4": "泽雷随", "3,4": "火雷噬嗑", "4,4": "震为雷", "5,4": "风雷益", "6,4": "水雷屯", "7,4": "山雷颐", "8,4": "地雷复",
      "1,5": "天风姤", "2,5": "泽风大过", "3,5": "火风鼎", "4,5": "雷风恒", "5,5": "巽为风", "6,5": "水风井", "7,5": "山风蛊", "8,5": "地风升",
      "1,6": "天水讼", "2,6": "泽水困", "3,6": "火水未济", "4,6": "雷水解", "5,6": "风水涣", "6,6": "坎为水", "7,6": "山水蒙", "8,6": "地水师",
      "1,7": "天山遁", "2,7": "泽山咸", "3,7": "火山旅", "4,7": "雷山小过", "5,7": "风山渐", "6,7": "水山蹇", "7,7": "艮为山", "8,7": "地山谦",
      "1,8": "天地否", "2,8": "泽地萃", "3,8": "火地晋", "4,8": "雷地豫", "5,8": "风地观", "6,8": "水地比", "7,8": "山地剥", "8,8": "坤为地"
    }
  }
})