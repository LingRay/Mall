// 头部navmenu， 底部navbar
var $tpl = $('#amz-tpl');
var source = $tpl.text();
var template = Handlebars.compile(source);
var data = {
	menu: {
		"options": {
			"cols": "1"
		},
		"content": [{
				"link": "##",
				"title": "车务服务",
				"subCols": 2,
				"channelLink": "进入栏目 »",
				"subMenu": [{
						"link": "nscx.html",
						"title": "年审查询"
					}, {
						"link": "wzcx.html",
						"title": "违章查询"
					}, {
						"link": "cxyh.html",
						"title": "车险优惠"
					}, {
						"link": "jyyh.html",
						"title": "加油优惠"
					}, {
						"link": "cwdb.html",
						"title": "车务代办"
					}

				]
			}, {
				"link": "##",
				"title": "用车养车",
				"subCols": 2,
				"subMenu": [{
					"link": "ptxc.html",
					"title": "普通洗车"
				}, {
					"link": "jzxc.html",
					"title": "精致洗车"
				}, {
					"link": "qcmr.html",
					"title": "汽车美容"
				}, {
					"link": "qcby.html",
					"title": "汽车保养"
				}, {
					"link": "qcwx.html",
					"title": "汽车维修"
				}]
			}, {
				"link": "yjfk.html",
				"title": "意见反馈",
			},

			{
				"link": "about.html",
				"title": "关于我们"
			}, {
				"link": "index.html",
				"title": '返回首页<i class="am-icon-home"></i>'
			}
		],
		"theme": "dropdown1"
	},
	navbar: {
		"options": {
			"cols": "4",
		},
		"content": [{
			"title": "主页",
			"link": "index.html",
			"icon": "home",
			"dataApi": ""
		},{
			"title": "商家",
			"link": "shoplist.html",
			"icon": "bullseye",
			"dataApi": ""
		}, {
			"title": "客服",
			"link": "tel:4008309277",
			"icon": "comment",
			"dataApi": ""
		}, {
			"title": "我的",
			"link": "my.html",
			"icon": "user",
			"dataApi": ""
		}],
		"theme": "dropdown1"
	},

	recordData: {
		"theme": "gapped",
		"content": [{
			"title": "消费一",
			"title2": "-100",
			"time": "2015-07-21 14:00",
			"content": "消费项目：洗车 <br/>消费金额：100元 <br/> 消费时间：2015年7月21日 <br/> 消费商家：XXXX汽车中心<br/> 消费详情：XXXXXXXXX<br/> 交易编号：2015072100001<br/> 消费积分：100",
			"active": true
		}, {
			"title": "消费一",
			"title2": "-100",
			"time": "2015-07-21 14:00",
			"content": "消费项目：洗车 <br/>消费金额：100元 <br/> 消费时间：2015年7月21日 <br/> 消费商家：XXXX汽车中心<br/> 消费详情：XXXXXXXXX<br/> 交易编号：2015072100001<br/> 消费积分：100"
		}, {
			"title": "消费一",
			"title2": "-100",
			"time": "2015-07-21 14:00",
			"content": "消费项目：洗车 <br/>消费金额：100元 <br/> 消费时间：2015年7月21日 <br/> 消费商家：XXXX汽车中心<br/> 消费详情：XXXXXXXXX<br/> 交易编号：2015072100001<br/> 消费积分：100"
		}]
	}
//	footer: {
//		/*  "options": {
//		   "modal": true,
//		   "techSupportCo": "玖贰汽车",
//		   "techSupportSite": ""
//		 }, */
//		"content": {
//			"owner": "玖贰汽车",
//			"companyInfo": [{
//				"detail": "CopyRight©2015 玖贰汽车产业有限公司"
//			}, {
//				"detail": "粤ICP备XXXXXXX"
//			}]
//		}
//	}
};
var html = template(data);
$tpl.before(html);


//弹出隐藏菜单
$("#nav_click").on('click', function() {
	$("#am_menu_toggle").click();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//获取商家列表
function getShoplist(data) {
	var $tpl = $('#shoplist_tpl');
	var data = {
		shoplist:{
			"content": data
		}
	}
	var source = $tpl.text();
	var template = Handlebars.compile(source);
	var html = template(data);
	$tpl.before(html);
	countStar();
}

//获取服务列表
function getServicelist(data) {
	var $tpl = $('#servicelist_tpl');
	var data = {
		servicelist:{
			"content": data
		}
	}
	var source = $tpl.text();
	var template = Handlebars.compile(source);
	var html = template(data);
	$tpl.before(html);
	countStar();
} 
 
//列出相应服务
function showService (a, b){
   	//a 服务类型，b地区
   	 var n = a + b;
   	 $(".am-list li").hide();
	 $("li:contains('"+ n + "')").show();

}

//判断服务类型
 function selectService() {
  	var service_select = $("#service_select option:selected").val();
  	 	showService (service_select);
 	  var area_select = $("#area_select option:selected").val(); 
  	    if (service_select =='全部' && area_select =="全城" ) {
        	$("li").show();
        }else if (service_select =='全部' && area_select !="全城") {
        	showService ( '',area_select);
        }else if (service_select !='全部' && area_select =="全城") {
        	showService ( service_select, '');
        }else {
        	showService ( service_select, area_select);
        }
 }
 
 
//数星星
 function countStar(){
  	$(".count-star").each(function() {
  	 var $this = $(this);
  	//获取评分
	   var star_number = $this.find('.star-number').text();
		 var star_number_int = parseInt(star_number);
  	//判断小数
		if (star_number_int != star_number ) {
		    	star_number = star_number_int;
		    	m =3 ;
		    	$(this).find(".am-icon-star-half-o").show();
		}else{
				m = 4;
		}
		
	    for (var i = 0; i < star_number ; i++) {
	    	 $this.find(".am-icon-star:eq("+ i +")").show();
	    }
	    
	    for (var n = m; n >= star_number ; n-- ) {
	    	 $this.find(".am-icon-star-o:eq("+ n +")").show();
	    }
	 
	});
}
 
//  ======================================================
//  =												 保险                        =  
//  ====================================================== 

var csx=
[
[
[619,590,584,602,0],
[743,708,701,722,0],
[743,708,701,722,0]
],
[[619,590,584,602,0],
[743,708,701,722,0],
[743,708,701,722,0]
],
[[619,584,590,602,608],
[743,701,708,722,730],
[743,701,708,722,730]
],
[
[619,590,584,602,0],
[743,708,701,722,0],
[743,708,701,722,0]
],
[
[619,590,584,602,0],
[743,708,701,722,0],
[743,708,701,722,0]
]
];

var csx_p=[
[[.0147,.014,.0139,.0143,0],
[.0147,.014,.0139,.0143,0],
[.0147,.014,.0139,.0143,0]
],
[[.0147,.0140,.0139,.0143,0],
[.0147,.0140,.0139,.0143,0],
[.0147,.0140,.0139,.0143,0]
],
[[.0147,.0139,.0140,.0143,.0145],
[.0147,.0139,.0140,.0143,.0145],
[.0147,.0139,.0140,.0143,.0145]
],
[[.0147,.014,.0139,.0143,0],
[.0147,.014,.0139,.0143,0],
[.0147,.014,.0139,.0143,0]
],
[[.0147,.014,.0139,.0143,0],
[.0147,.014,.0139,.0143,0],
[.0147,.014,.0139,.0143,0]
]
];

var d3=[
[
[765,1104,1260,1370,1546,1854,2414],
[708,998,1128,1217,1362,1622,2112],
[708,998,1128,1217,1362,1622,2112]
],
[
[765,1104,1260,1370,1546,1854,2414],
[708,998,1128,1217,1362,1622,2112],
[708,998,1128,1217,1362,1622,2112]
],
[
[765,1105,1261,1370,1546,1855,2416],
[708,997,1127,1216,1362,1621,2111],
[708,997,1127,1216,1362,1621,2111]
],
[
[765,1104,1260,1370,1546,1854,2414],
[708,998,1128,1217,1362,1622,2112],
[708,998,1128,1217,1362,1622,2112]
],
[
[765,1104,1260,1370,1546,1854,2414],
[708,998,1128,1217,1362,1622,2112],
[708,998,1128,1217,1362,1622,2112]
]
];

var csry=[
[
[.0021,.0010],
[.0021,.0010],
[.0021,.0010]
],
[[.0021,.0010],
[.0021,.0010],
[.0021,.0010]
],
[[.0021,.0010],
[.0021,.0010],
[.0021,.0010]
],
[
[.0021,.0010],
[.0021,.0010],
[.0021,.0010]
],
[
[.0021,.0010],
[.0021,.0010],
[.0021,.0010]
]
];

var dqx=[
[
[120,120,120,120],
[140,140,140,140],
[140,140,140,140]
],
[[120,120,120,120],
[140,140,140,140],
[140,140,140,140]
],
[[120,120,120,120],
[140,140,140,140],
[140,140,140,140]
],
[
[120,120,120,120],
[140,140,140,140],
[140,140,140,140]
],
[
[120,120,120,120],
[140,140,140,140],
[140,140,140,140]
]
];

var dqx_p=[
[
[.0052,0,0,0],
[.0048,0,0,0],
[.0048,0,0,0]
],
[[.0052,.0052,.0052,0],
[.0048,.0066,.0066,0],
[.0048,.0048,.0048,0]
],
[[.0052,0,0,0],
[.0048,0,0,0],
[.0048,0,0,0]
],
[
[.0052,0,0,0],
[.0048,0,0,0],
[.0048,0,0,0]
],
[
[.0052,0,0,0],
[.0048,0,0,0],
[.0048,0,0,0]
]
];

var blpsx=[
[
[.0033,.002],
[.0039,.0024],
[.0033,.002]
],
[
[.0033,.002],
[.0039,.0024],
[.0033,.002]
],
[
[.0033,.002],
[.0039,.0024],
[.0033,.002]
],
[
[.0033,.002],
[.0039,.0024],
[.0033,.002]
],
[
[.0033,.002],
[.0039,.0024],
[.0033,.002]
]
];

var cyear=
[
[
[1,2,6,1000,0],
],
[
[1,2,6,1000,0]
],
[
[1,4,6,8,1000]
],
[
[1,2,6,1000,0],
],
[
[1,2,6,1000,0],
]
];


var sunshixianxs	= 0.453;
var	disanzhexianxs	= 0.547;
var	daoqiangxianxs	= 0.648;
var	bolixianxs		= 0.65;
var	csbjxs			= 0.571;
//var	dszbjxs			= 0.647;
var	dqbjxs			= 0.567;

var pinganxs=1.08;
var taipingyangxs=1.06;
var piccxs=1.04;

function f_getRealMoney(cartype,sites,selT,buymoney,countmonth){

	var cartype = parseInt(cartype);   //车辆类型

	var sites = parseInt(sites);		//座位数

	var ts = parseInt(selT);			//核定吨位
	var idx = 0;														//
	var mp = [0.006,0.012,0.009];

	if(cartype<=3 && sites<10)
		idx = 0;
	else if(cartype==5 || (cartype==4 || cartype==8))
		idx = 1;
	else
		idx = 2;

	var buym = parseFloat(buymoney);
	var months = parseInt(countmonth);
	var t = buym * 0.2;
	document.getElementById("daoqiangxianshow2").innerHTML=FormatNumber(formatNum1(Math.max(buym*(1-months*mp[idx]),t)),2);
	document.getElementById("realmoney").value=FormatNumber(formatNum1(Math.max(buym*(1-months*mp[idx]),t)),2);
	getRealMoney=FormatNumber(formatNum1(Math.max(buym*(1-months*mp[idx]),t)),2);
}


function formatNum1(num)	{
		var str = String(num);
		var idx = str.indexOf(".");
		if(idx == -1) return str + ".00";
		str += "00";
		if(parseInt(str.substr(idx+5,1))>4)
		{
			num = parseFloat(str.substr(0,idx+5)) + 0.01;
			str = String(num);
			idx = str.indexOf(".");
			if(idx==-1) return str + ".00";
			str += "00";
		}
		str = str.substr(0,idx+5);
		return str;
	}


function FormatNumber(srcStr,nAfterDot)   {
　　        var srcStr,nAfterDot;
　　        var resultStr,nTen;
　　        srcStr = ""+srcStr+"";
　　        strLen = srcStr.length;
　　        dotPos = srcStr.indexOf(".",0);
　　        if (dotPos == -1){
　　　　        resultStr = srcStr+".";
　　　　        for (i=0;i<nAfterDot;i++){
　　　　　　        resultStr = resultStr+"0";
　　　　        }
　　　　        return resultStr;
　　        }
　　        else{
　　　　        if ((strLen - dotPos - 1) >= nAfterDot){
　　　　　　        nAfter = dotPos + nAfterDot + 1;
　　　　　　        nTen =1;
　　　　　　        for(j=0;j<nAfterDot;j++){
　　　　　　　　        nTen = nTen*10;
　　　　　　        }
　　　　　　        resultStr = Math.round(parseFloat(srcStr)*nTen)/nTen;
　　　　　　        return resultStr;
　　　　        }
　　　　        else{
　　　　　　        resultStr = srcStr;
　　　　　　        for (i=0;i<(nAfterDot - strLen + dotPos + 1);i++){
　　　　　　　　        resultStr = resultStr+"0";
　　　　　　        }
　　　　　　        return resultStr;
　　　　        }
　　        }
    } 


function f_feecomp(buymoney,countmonth,selT){
	var buyear = countmonth/12;
	var money = buymoney;
	var ts = selT;

	var idx = 0;
	var base,feep;
		for(var j=0;j<cyear[0][0].length;j++)
		{
			if(parseInt(cyear[0][0][j])>buyear)
			{
				yidx=j;
				break;
			}
		}

		base = csx[0][idx][yidx];

		feep = rnd(csx_p[0][idx][yidx]);
		feecomp=parseInt(formatNum(sumcs(base,money,feep))*sunshixianxs);
		document.getElementById("chesunxianshow").innerHTML = feecomp;
		document.getElementById("chesunxianhide").value=feecomp;
}   

function sumcs(base,money,feep){
	var res = parseFloat(base+money*10000*feep);
	return res;
}  

function rnd(num){
	var str = String(num);
	var idx = str.indexOf(".");
	if(idx==-1) return num;
	num = parseFloat(str.substr(0,idx+6));

	if(parseInt(str.substr(idx+6,1))>4)
		num += 0.00001;

	return num;
}

function formatNum(num){
	var str = String(num);
	var idx = str.indexOf(".");
	if(idx == -1) return str + ".00";
	str += "00";
	if(parseInt(str.substr(idx+3,1))>4)
	{
		num = parseFloat(str.substr(0,idx+3)) + 0.01;
		str = String(num);
		idx = str.indexOf(".");
		if(idx==-1) return str + ".00";
		str += "00";
	}
	str = str.substr(0,idx+3);
	return str;
}

function f_countd3(tbdsz){
	var idx=0;
	var i50 = 0;
	var tbm = tbdsz.value;
	countd3=parseInt(formatNum(d3[0][idx][tbdsz.selectedIndex])*disanzhexianxs);
	document.getElementById("sanzhexianshow").innerHTML = countd3;
	document.getElementById("sanzhexianhide").value=countd3;
}

function f_jsyzrx(jsytb){

	var m = parseInt(jsytb);
	var p = 0;
	var idx = 0;
	res = 10000*m*csry[0][idx][p];
	document.getElementById("jsyxianshow").innerHTML = parseInt(formatNum(res));
	jsyzrx=parseInt(formatNum(res));
	document.getElementById("jsyxianhide").value=jsyzrx;
}


function f_ckzrx(tbck,bsites){
	var m = parseInt(tbck);
	var part = parseInt(bsites);
	var p = 0;
	var idx = 0;

	res = 10000*m*0.001;   //强制将所有乘客责任险为0。0010
    res = res * (part-1);  //责任险＝单个座位*乘客座位数

	document.getElementById("ckxianshow").innerHTML = parseInt(formatNum(res));
	ckzrx=parseInt(formatNum(res));
	document.getElementById("ckxianhide").value=ckzrx;
}


function f_countdqx()
{
	var dqxtb = getRealMoney;
	var idx = 0;
	var base,feep;

	base = dqx[1][idx][1];
	feep = rnd(dqx_p[1][idx][1]);
	var res;

	res = sumcs(base,dqxtb,feep);	
	countdqx=parseInt(formatNum(res)*daoqiangxianxs);
	document.getElementById("daoqiangxianshow").innerHTML = countdqx;
	document.getElementById("daoqiangxianhide").value=countdqx;
}


function f_countblpsx(buymoney,tbboli){
	var m = parseFloat(buymoney) * 10000;
	var idx = 0;
	var bltype = tbboli;
	var res;
	res = formatNum(m * blpsx[0][idx][bltype]);
	countblpsx=parseInt(res*bolixianxs);	
	document.getElementById("bolixianshow").innerHTML = countblpsx;
	document.getElementById("bolixianhide").value=countblpsx;
}


function f_countBj_jd(){
	var countBj_fee = feecomp;
	countBj_fee = parseFloat((countBj_fee=="-")?0:countBj_fee);
	countBj_jd=parseInt(formatNum(countBj_fee*0.15)*csbjxs);
	document.getElementById("csbjshow").innerHTML = countBj_jd;
	document.getElementById("csbjhide").value=countBj_jd;
}

function f_countBj_d3(){
	var d3_fee = countd3;
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	countBj_d3=parseInt(formatNum(d3_fee*0.15));
	document.getElementById("d3bjshow").innerHTML = countBj_d3;
	document.getElementById("d3bjhide").value=countBj_d3;
}

function f_countBj_ry(){
	var d3_fee = jsyzrx;
	var d3_fee2 = ckzrx;
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	d3_fee2 = parseFloat((d3_fee2=="-")?0:d3_fee2);
	document.getElementById("rybjshow").innerHTML = parseInt(formatNum((d3_fee+d3_fee2)*0.15));
	countBj_ry=parseInt(formatNum((d3_fee+d3_fee2)*0.15));
	document.getElementById("rybjhide").value=countBj_ry;
	document.getElementById("jsybjhide").value=parseInt(formatNum(d3_fee*0.15));
	document.getElementById("ckbjhide").value=parseInt(formatNum(d3_fee2*0.15));
}


function f_countBj_dq(){
	var d3_fee = countdqx;
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	countBj_dq= parseInt(formatNum(d3_fee*0.2));
	document.getElementById("dqbjshow").innerHTML = countBj_dq;
	document.getElementById("dqbjhide").value=countBj_dq;
}

function countPrice(){
	var zongjia=feecomp+countd3+jsyzrx+ckzrx+countdqx+countblpsx+countBj_jd+countBj_d3+countBj_ry+countBj_dq;
	document.getElementById("totalshow2").innerHTML=zongjia;
    document.getElementById("tianpinghide").value=parseInt(zongjia);
    document.getElementById("pinganhide").value=parseInt(zongjia*pinganxs);
    document.getElementById("taipingyanghide").value=parseInt(zongjia*taipingyangxs);
    document.getElementById("picchide").value=parseInt(zongjia*piccxs);
}


function changeboli(buymoney,tbboli){
	var m = parseFloat(buymoney) * 10000;
	var idx = 0;
	var bltype = tbboli;
	var res;
	res = formatNum(m * blpsx[0][idx][bltype])*bolixianxs;
	document.getElementById("bolixianshow").innerHTML = parseInt(res);
	document.getElementById("bolixianhide").value=parseInt(res);
}

function changed3(tbdsz){
	var idx=0;
	var i50 = 0;
	var tbm = tbdsz.value;
	var d3_fee = parseInt(formatNum(d3[0][idx][tbdsz.selectedIndex])*disanzhexianxs);
	document.getElementById("sanzhexianshow").innerHTML = d3_fee;
	document.getElementById("sanzhexianhide").value=d3_fee;
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);

	document.getElementById("d3bjshow").innerHTML = parseInt(formatNum(d3_fee*0.15));
	document.getElementById("d3bjhide").value=parseInt(formatNum(d3_fee*0.15));
}


function changejsy(jsytb){

	var m = parseInt(jsytb);
	var p = 0;
	var idx = 0;
	res = 10000*m*csry[0][idx][p];
	document.getElementById("jsyxianshow").innerHTML = parseInt(formatNum(res));
	document.getElementById("jsyxianhide").value=parseInt(formatNum(res));
	var d3_fee = parseInt(formatNum(res));
	var d3_fee2 =0;
	if(document.getElementById('ckxian').checked){
		d3_fee2=document.getElementById("ckxianhide").value;
	}
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	d3_fee2 = parseFloat((d3_fee2=="-")?0:d3_fee2);
	document.getElementById("rybjshow").innerHTML = parseInt(formatNum((d3_fee+d3_fee2)*0.15));
	countBj_ry=parseInt(formatNum((d3_fee+d3_fee2)*0.15));
	document.getElementById("rybjhide").value=countBj_ry;
	document.getElementById("jsybjhide").value=parseInt(formatNum(d3_fee*0.15));
	document.getElementById("ckbjhide").value=parseInt(formatNum(d3_fee2*0.15));

}

function changeck(tbck,bsites){
	var m = parseInt(tbck);
	var part = parseInt(bsites);
	var p = 0;
	var idx = 0;

	res = 10000*m*0.001;   //强制将所有乘客责任险为0。0010
    res = res * (part-1);  //责任险＝单个座位*乘客座位数

	document.getElementById("ckxianshow").innerHTML = parseInt(formatNum(res));
	document.getElementById("ckxianhide").value		= parseInt(formatNum(res));

	var d3_fee = 0;
	var d3_fee2 =parseInt(formatNum(res));
	if(document.getElementById('jsyxian').checked){
		d3_fee=document.getElementById("jsyxianhide").value;
	}
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	d3_fee2 = parseFloat((d3_fee2=="-")?0:d3_fee2);
	document.getElementById("rybjshow").innerHTML = parseInt(formatNum((d3_fee+d3_fee2)*0.15));
	countBj_ry=parseInt(formatNum((d3_fee+d3_fee2)*0.15));
	document.getElementById("rybjhide").value=countBj_ry;
	document.getElementById("jsybjhide").value=parseInt(formatNum(d3_fee*0.15));
	document.getElementById("ckbjhide").value=parseInt(formatNum(d3_fee2*0.15));
}
//  ======================================================
//  =												 保险 end                    =  
//  ====================================================== 