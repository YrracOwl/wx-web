// pages/page-shuifa/page-shuifa.js

var Chance = require('../../utils/chance.js');
var chance = new Chance();
var rand;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageId: 5,
    showhim: false,
    random: rand,

    test: ["生活能有什么寓意呢？\n在它里面有些指望就好了。", "梦里不知身是客,\n一晌贪欢。", "我是人间惆怅客,\n知君何事泪纵横。", "叶上初阳干宿雨，\n水面清圆，\n一一风荷举。", "人的眼光是沉重的负担，\n是吸人膏血的吻。", "每个人都经历着受骗和伤痛，\n最终掌握了生活下去的本领。", "何况尘世嚣嚣，\n我们不管干什么，\n都是困难重重。", "所以寻找就是一切，\n而找的是谁却无关紧要。", "请不要使我知道任何故事的开头，\n除非那故事已经结束了。", "人在二十五岁时，\n什么事情都想干，\n但是往往一事无成。", "在一团漆黑中，\n她等待和死亡会面，\n死亡似乎是最伟大的情人。\n这是因为它非常陌生。", "活着成为一只猪和死掉，\n也不知哪个更可怕。", "生活是件很麻烦的事，\n其中最大的麻烦是避免误会。", "永不妥协就是拒绝命运的安排，\n直到它回心转意，\n拿出我能接受的东西来。", "她现在的这个身体没有了挑战性，\n只能诱使男人和她做爱，\n却不能使他对生活不满意。", "人活在世界上会做各种各样的梦，\n梦里一切事都可能发生。", "人在年轻时充满了做事的冲动，\n无休无止地变革一切，\n等到这些冲动骤然消失，\n他就老了。", "李卫公死后，\n他就保存在别人的记忆里。", "我们的人品的一切可取之处，\n都该感谢沉默的教诲。", "请你不要吃我不要吃我，\n我给你唱一支好听的歌。", "一想到你，\n我这张丑脸就泛起微笑。", "过去是没有它就活得没意思，\n现在没有你也没意思。","我想跟你说话，\n那是因为我喜欢你。","你这么好，\n我喜欢你。"],

    multiArray1: [["1.增值税", "2.消费税", "3.关税", "4.企业所得税", "5.个人所得税", "6.其他税"], ["一般纳税人", "进口货物", "小规模纳税人"]],
    objectMultiArray1: [
      [
        {
          id: 0,
          name: '1.增值税'
        },
        {
          id: 1,
          name: '2.消费税'
        },
        {
          id: 1,
          name: '3.关税'
        },
        {
          id: 1,
          name: '4.企业所得税'
        },
        {
          id: 1,
          name: '5.个人所得税'
        },
        {
          id: 1,
          name: '6.其他税'
        }
      ], [
        {
          id: 0,
          name: '一般纳税人'
        },
        {
          id: 1,
          name: '进口货物'
        },
        {
          id: 2,
          name: '小规模纳税人'
        }
      ]
    ],
    multiIndex1: [0, 0],

    part1:{
      "0,0": ["应纳税额=销项税额-进项税", "销项税额=销售额×税率  此处税率为17%", "组成计税价格=成本×（1+成本利润率）", "组成计税价格=成本×（1+成本利润率）÷（1-消费税税率）"],
      "0,1": ["应纳税额 = 组成计税价格 × 税率", "组成计税价格=关税完税价格+关税（+消费税）"],
      "0,2": ["应纳税额=销售额×征收率", "销售额=含税销售额÷（1+征收率）"],
      "1,0": ["应纳税额=销售额×税率", "不含税销售额=含税销售额÷（1+增值税税率或征收率）", "组成计税价格=（成本 + 利润）÷（1 - 消费税率）", "组成计税价格=成本×（1+成本利润率）÷（1-消费税税率）", "组成计税价格=（材料成本+加工费）÷（1-消费税税率）", "组成计税价格=（关税完税价格+关税）÷（1-消费税税率）"],
      "1,1": ["应纳税额=销售数量×单位税额", "                   "],
      "2,0": ["应纳税额=应税进口货物数量×单位完税价×适用税率", "                   "],
      "2,1": ["应纳税额=应税进口货物数量×关税单位税额", "                   "],
      "2,2": ["应纳税额=应税进口货物数量×关税单位税额+应税进口货物数量×单位完税价格×适用税率", "                   "],
      "3,0": ["应纳税所得额=收入总额-准予扣除项目金额", "应纳税所得额=利润总额+纳税调整增加额—纳税调整减少额", "应纳税额=应纳税所得额×税率", "月预缴额=月应纳税所得额×25%", "月应纳税所得额=上年应纳税所得额×1/12"],
      "4,0": ["应纳税额=应纳税所得额×使用税率 - 速算扣除数", "                   "],
      "4,1": ["应纳税额=应纳税所得额×使用税率×（1-30%）", "                   "],
      "4,2": ["应纳税额=应纳税所得额×使用税率", "                   "],
      "5,0": ["年应纳税额=计税土地面积（平方米）×使用税率", "                   "],
      "5,1": ["年应纳税额=应税房产原值×（1 - 扣除比例）×1.2%", "或年应纳税额=租金收入×12%"],
      "5,2": ["年应纳税额=课税数量×单位税额", "                   "],
      "5,3": ["增值税=转让房地产取得的收入 - 扣除项目", "应纳税额=∑（每级距的土地增值额×适用税率）"],
      "5,4": ["应纳税额计税依据×税率", "                   "]
    },
    part1num: 0,
    multiArray2: [["1.增值税", "2.消费税", "3.企业所得税", "4.个人所得税", "5.土地增值税", "6.城市建设维护税", "7.资源税", "8.车船税", "9.土地使用税", "10.印花税", "11.关税", "12.房产税"], ["直接计税法", "间接计税法"]],
    objectMultiArray2: [
      [
        {
          id: 0,
          name: '1.增值税'
        },
        {
          id: 1,
          name: '2.消费税'
        },
        {
          id: 2,
          name: '3.企业所得税'
        },
        {
          id: 3,
          name: '4.个人所得税'
        },
        {
          id: 4,
          name: '5.土地增值税'
        },
        {
          id: 5,
          name: '6.城市建设维护税'
        },
        {
          id: 6,
          name: '7.资源税'
        },
        {
          id: 7,
          name: '8.车船税'
        },
        {
          id: 8,
          name: '9.土地使用税'
        },
        {
          id: 9,
          name: '10.印花税'
        },
        {
          id: 10,
          name: '11.关税'
        },
        {
          id: 11,
          name: '12.房产税'
        }
      ], [
        {
          id: 0,
          name: '直接计税法'
        },
        {
          id: 1,
          name: '间接计税法'
        }
      ]
    ],
    multiIndex2: [0, 0],

    part2num: 0,
    part2:{
      "0,0": ["应纳增值税额：＝增值额×增值税税率", "增值额＝工资＋利息＋租金＋利润＋其他增值项目-货物销售额的全值-法定扣除项目购入货物金额"],
      "0,1": ["扣除税额＝扣除项目的扣除金额×扣除税率", "1.购进扣税法", "    扣除税额＝本期购入扣除项目金额×扣除税率＋已由受托方代收代缴的税额", "2.实耗扣税法", "    扣除税额＝本期实际耗用扣除项目金额×扣除税率＋已由受托方代收代交的税额", "    （1）一般纳税人应纳增值税额", "        一般纳税人应纳增值税额＝当期销项税额－当期进项税额", "          (一)销项税额＝销售额×税率", "            销售额＝含税销售额/（1＋税率）", "            组成计税价格＝成本×（1＋成本利润率）", "          (二)进项税额", "            不得抵扣的进项税额＝当月全部进项税额×当月免税项目销售额、非应税项目营业额合计/当月全部销售额、营业额合计", "    （2）小规模纳税人应纳增值税额", "        小规模纳税人应纳增值税额＝销售额×征收率", "        销售额＝含税销售额/（1＋征收率）", "        销售额＝含税收入（1＋增值税征收率）", "    （3）进口货物应纳增值税额", "        进口货物应纳增值税额＝组成计税价格×税率", "        组成计税价格＝关税免税价格＋关税＋消费税"],
      "1,0": ["实行从价定率办法计算的应纳消费税额＝销售额×税率", "1.应税消费品的销售额＝含增值税的销售额/(1＋增值税税率或征收率)", "2.组成计税价格＝（成本＋利润）/（1-消费税率）", "3.组成计税价格＝（材料成本＋加工费）/（1-消费税率）", "4.组成计税价格＝关税完税价格＋关税＋应纳消费税税额", "5.组成计税价格＝（关税完税价格＋关税）/（1-消费税税率）"],
      "1,1": ["实行从量定额办法计算的应纳消费税额＝销售数量×单位数额", "                   "],
      "2,0": ["工业企业应纳税所得额＝利润总额＋（－）税收调整项目金额", "利润总额＝营业利润＋投资收益＋营业外收入－营业外支出", "营业利润＝产品销售利润＋其他业务利润－管理费用－财务费用", "产品销售利润＝产品销售收入－产品销售成本－产品销售费用－产品销售税金及附加", "其他业务利润＝其他业务收入－其他业务成本－其他销售税金及附加", "本期完工产品成本＝期初在产品自制半成品成本余额＋本期产品成本会计－期末在产品自制半成品成本余额", "本期产品成本会计＝材料＋工资＋制造费用"],
      "2,1": ["应纳税所得额＝利润总额＋（－）税收调整项目金额", "利润总额＝营业利润＋投资收益＋营业外收入－营业外支出", "营业利润＝主营业务利润＋其他业务利润－管理费用－财务费用－汇兑损失", "主营业务利润＝商品销售利润＋代购代销收入", "商品销售利润＝商品销售净额－商品销售成本－经营费用－商品销售税金及附加", "商品销售净额＝商品销售收入－销售折扣与折让"],
      "2,2": ["应纳税所得额＝利润总额＋（－）税收调整项目金额", "利润总额＝营业利润＋投资收益＋营业外收入－营业外支出", "营业利润＝经营利润＋附营业务收入－附营业务成本", "经营利润＝营业收入－营业成本－营业费用－营业税金及附加", "营业成本＝期初库存材料、半成品产成（商）品盘存余额＋本期购进材料、商品金额金额－期末库存材料、半成品、产成（商）品盘存余额"],
      "3,0": ["工资、薪金所得应纳个人所得税额＝应纳水所得额×适用税率－速算扣除数", "应纳税所得额＝每月收入额－800", "应纳税额＝应纳税所得额×适用税率－速算扣除数", "应纳税所得额＝（不含税所得额－速算扣除数）/(1-税率)"],
      "3,1": ["应纳所得税额＝应纳税所得额×适用税率－速算扣除数", "1.将当月累计应纳税所得额换算成全年应纳税所得额", "    全年应纳税所得额＝当月累计应纳税所得额×12/当月累计经营月份数", "2.计算全年应纳所得税额", "    全年应纳所得税额＝全年应纳税所得额×适用税率－速算扣除数", "3.计算当月累计应纳所得税额", "    当月应纳所得税额＝全年应纳所得税额×当月累计经营月份数/12", "4.计算本月应纳所得税额", "    本月应纳所得税额＝当月累计应纳所得税额－累计已缴所得税额"],
      "3,2": ["应纳所得税额＝应纳税所得额×20%×（1-30%）＝应纳税所得额×20%×70%", "                   "],
      "3,3": ["1.一次收入在20000元以下时", "    应纳所得税额＝应纳税所得额×20%", "2.一次收入20000～50000时", "    应纳所得税额＝应纳税所得额×20%＋应纳税所得额×20%×50%＝应纳税所得额×（20%＋10%）", "3.一次收入超过50000时", "应纳所得税税额＝应纳税所得额×20%＋应纳税所得额×20%×100%＝应纳税所得额×（20%＋20%）"],
      "3,4": ["财产转让应纳所得税额＝应纳税所得额×20%", "应纳税所得额＝转让财产收入额－财产原值－合理费用"],
      "3,5": ["应纳所得税额＝应纳税所得额×20%", "                   "],
      "3,6": ["境外个人所得税税款扣除限额＝境内、境外所得按税法计算的应纳税总额×来源于某外国的所得额/境内、外所得总额", "                   "],
      "3,7": ["手续费金额＝扣缴的个人所得税额×2%", "                   "],
      "4,0": ["应纳税总额＝∑各级距土地增值额×适用税率", "某级距土地增值额×适用税率", "土地增值率＝土地增值额×100%/扣除项目金额", "土地增值额＝转让房地产收入－扣除项目金额"],
      "4,1": ["1.土地增值额未超过扣除项目金额金额50%的", "    应纳税额＝土地增值额×30%", "2.土地增值额超过扣除项目金额50%，未超过100%的", "    应纳税额＝土地增值额×40%－扣除项目金额×0.05", "3.土地增值额超过扣除项目金额100%、未超过200%的", "    应纳税额＝土地增值额×50%－扣除项目金额×0.15", "4.土地增值额超过项目金额200%", "    应纳税额＝土地增值额×60%－扣除项目金额×0.35"],
      "5,0": ["应纳城市维护建设税额＝（产品销售收入额＋营业收入额＋其他经营收入额）×地区适用税率 ", "应补交税额=实际营业收入额×地区适用税率－已纳税额", "应退税额＝已交税额－核实后的应纳税额"],
      "6,0": ["应纳税额＝课税数量×单位税额", "                   "],
      "7,0": [" 乘人车、二轮摩托车、三轮摩托车、畜力车、人力车、自行车等车辆的年应纳税额的计算公式为：", "    年应纳税额＝车辆拥有量×适用的年税额"],
      "7,1": ["年应纳税额=载货汽车净吨位×适用的年税额", "                   "],
      "7,2": ["年应纳税额=载人部分年应纳税额+载货部分年应纳税额", "载人部分年应纳税额=载人车适用年税额×50%", "载货部分年应纳税额=载货部分的净吨位数×适用的年税额"],
      "7,3": ["机动船年应纳税额=机动船的净吨位×适用的年税额", "                   "],
      "7,4": ["非机动船应纳税额=非机动船的载重吨位×适用的年税额", "                   "],
      "7,5": ["新购买的车辆按购期年内的余月数比例征收车船税，其计算公式为：", "    新购买车船应纳车船税额=各种车船的吨位（或辆数）×购进起始月至征期终了的余月数/征期月数", "    补交本期漏报漏缴税额=漏报漏缴车船税的数量(或净吨位、载重吨位)×适用税额/按规定缴库的次数", "    补交本期少交的税款=[应缴车船税的数量（或净吨位、载重吨位）×适用税额/按规定缴库的次数]－已缴税款", "    退还误交的税款＝已缴的误交税款", "    退还应计算错误而多交的税款＝已入库的税款－重新核实后的应纳税额"],
      "8,0": ["年应纳土地使用税税额=使用土地的平方米总数×每平方米土地年税额", "月或季应纳土地使用税税额=年应纳土地使用税额/12（或）4"],
      "9,0": ["应纳税额=购销金额×3/1000", "                   "],
      "9,1": ["应纳税额=收取的费用×5/10000", "                   "],
      "9,2": ["应纳税额=加工及承揽收入×5/10000", "                   "],
      "9,3": ["应纳税额=承包金额×3/10000", "                   "],
      "9,4": ["应纳税额=租赁金额×1/1000", "                   "],
      "9,5": ["应纳税额=仓储保管费用×1/1000", "                   "],
      "9,6": ["应纳税额=借款金额×0.5/10000", "                   "],
      "9,7": ["应纳税额=保险费收入×1/1000", "                   "],
      "9,8": ["应纳税额=书据所载金额×6/10000", "                   "],
      "9,9": ["应纳税额=合同所载金额×3/10000", "                   "],
      "9,10": ["应纳税额=运输费用×5/10000", "                   "],
      "9,11": ["1.记载资金账簿应纳印花税的计算公式为：", "    应纳税额=[（固定资产原值年初数－上年已计算缴纳印花税固定资产原值）＋（自有流动资金年初数－上年已计算缴纳印花税自有流动资金总额）]×5/10000", "2.其他账簿应纳税额的计算公式为：", "    应纳税额=证照件数×5"],
      "10,0": ["应纳关税税额=完税价格×进口税率", "完税价格=离岸价格+运输费、保险费等=国内批发价/（1+进口税率+费用和利润率（20%））"],
      "10,1": ["出口关税应纳税额=完税价格×出口税率", "完税价格=离岸价格/（1+出口税率）"],
      "11,0": ["年应纳房产税税额＝房产评估值×税率", "月应纳房产税税额=年应纳房产税额/12", "季应纳房产税税额=年应纳房产税额/4"],
    }

  },

  bindMultiPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex1: e.detail.value
    })
  },
  bindMultiPickerColumnChange1: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray1: this.data.multiArray1,
      multiIndex1: this.data.multiIndex1
    };
    var class1 = 0;
    var class2 = 0;
    var tempposition1 = 0;
    data.multiIndex1[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex1[0]) {
          case 0:
            data.multiArray1[1] = ['一般纳税人', '进口货物','小规模纳税人'];
            class1 = data.multiIndex1[0];
            class2 = 0;
            var position1 = new Array(class1, class2);
            tempposition1 = position1.join();
            console.log(tempposition1);
            this.setData({
              part1num: tempposition1
            });
            break;
          case 1:
            data.multiArray1[1] = ['一般情况', '从量计征'];
            class1 = data.multiIndex1[0];
            class2 = 0;
            var position1 = new Array(class1, class2);
            tempposition1 = position1.join();
            console.log(tempposition1);
            this.setData({
              part1num: tempposition1
            });
            break;
          case 2:
            data.multiArray1[1] = ['从价计征', '从量计征', '复合计征'];
            class1 = data.multiIndex1[0];
            class2 = 0;
            var position1 = new Array(class1, class2);
            tempposition1 = position1.join();
            console.log(tempposition1);
            this.setData({
              part1num: tempposition1
            });
            break;
          case 3:
            data.multiArray1[1] = ['通用'];
            class1 = data.multiIndex1[0];
            class2 = 0;
            var position1 = new Array(class1, class2);
            tempposition1 = position1.join();
            console.log(tempposition1);
            this.setData({
              part1num: tempposition1
            });
            break;
          case 4:
            data.multiArray1[1] = ['工资薪金所得', '稿酬所得', '其他各项所得'];
            class1 = data.multiIndex1[0];
            class2 = 0;
            var position1 = new Array(class1, class2);
            tempposition1 = position1.join();
            console.log(tempposition1);
            this.setData({
              part1num: tempposition1
            });
            break;
          case 5:
            data.multiArray1[1] = ['城镇土地使用税', '房地产税', '资源税', '土地增值税', '契税'];
            class1 = data.multiIndex1[0];
            class2 = 0;
            var position1 = new Array(class1, class2);
            tempposition1 = position1.join();
            console.log(tempposition1);
            this.setData({
              part1num: tempposition1
            });
            break;
        }
        data.multiIndex1[1] = 0;
        console.log(data.multiIndex1);
        break;

      case 1:
        class1 = data.multiIndex1[0];
        class2 = e.detail.value;
        var position1 = new Array(class1, class2);
        tempposition1 = position1.join();
        console.log(tempposition1);
        this.setData({
          part1num: tempposition1
        });
        break;

    }
      
    this.setData(data);
  },


  bindMultiPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex2: e.detail.value
    })
  },
  bindMultiPickerColumnChange2: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray2: this.data.multiArray2,
      multiIndex2: this.data.multiIndex2
    };
    var class3 = 0;
    var class4 = 0;
    var tempposition2 = 0;
    data.multiIndex2[e.detail.column] = e.detail.value;
    console.log(data.multiIndex2);
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex2[0]) {
          case 0:
            data.multiArray2[1] = ['直接计税法', '间接计税法'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 1:
            data.multiArray2[1] = ['从价定率的计算', '从量定额的计算'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 2:
            data.multiArray2[1] = ['工业企业', '商品流通企业', '饮服企业'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 3:
            data.multiArray2[1] = ['工资、薪金所得', '个体工商户', '稿酬所得', '劳务报酬所得', '财产转让', '利息、股息红利所得', '境外个人所得税款扣除限额', '支付给扣缴义务人手续费的计算'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 4:
            data.multiArray2[1] = ['一般计算方法', '简便计税方法'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 5:
            data.multiArray2[1] = ['通用'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 6:
            data.multiArray2[1] = ['通用'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 7:
            data.multiArray2[1] = ['乘非机动车等车辆', '载货车', '客货两用的车', '机动船', '非机动船', '新购买的车辆'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 8:
            data.multiArray2[1] = ['通用'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 9:
            data.multiArray2[1] = ['购销合同', '建设工程勘察设计合同', '加工承揽合同', '建筑安装工程承包合同', '财产租赁合同', '仓储保管合同', '借款合同', '财产保险合同', '产权转移书据', '技术合同', '货物运输合同', '营业账簿'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 10:
            data.multiArray2[1] = ['进口关税', '出口关税'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
          case 11:
            data.multiArray2[1] = ['通用'];
            class3 = data.multiIndex2[0];
            class4 = 0;
            var position2 = new Array(class3, class4);
            tempposition2 = position2.join();
            console.log(tempposition2);
            this.setData({
              part2num: tempposition2
            });
            break;
        }
        data.multiIndex2[1] = 0;
        break;
      case 1:
        class3 = data.multiIndex2[0];
        class4 = e.detail.value;
        var position2 = new Array(class3, class4);
        tempposition2 = position2.join();
        console.log(tempposition2);
        this.setData({
          part2num: tempposition2
        });
        break;
    }
    this.setData(data);
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
  },

  onShow: function () {
    rand = chance.integer({ min: 0, max: 23 });
    this.showDialogBtn();
    this.setData({
      random: chance.integer({ min: 0, max: 23 })
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

