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

function f_getRealMoney(cartype,sites,selT,buymoney,countmonth)
{

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


function formatNum1(num)
	{
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


function FormatNumber(srcStr,nAfterDot)
   {
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


function f_feecomp(buymoney,countmonth,selT)
{
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

function sumcs(base,money,feep)
{
	var res = parseFloat(base+money*10000*feep);
	return res;
}  

function rnd(num)
{
	var str = String(num);
	var idx = str.indexOf(".");
	if(idx==-1) return num;
	num = parseFloat(str.substr(0,idx+6));

	if(parseInt(str.substr(idx+6,1))>4)
		num += 0.00001;

	return num;
}

function formatNum(num)
{
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

function f_countd3(tbdsz)
{
	var idx=0;
	var i50 = 0;
	var tbm = tbdsz.value;
	countd3=parseInt(formatNum(d3[0][idx][tbdsz.selectedIndex])*disanzhexianxs);
	document.getElementById("sanzhexianshow").innerHTML = countd3;
	document.getElementById("sanzhexianhide").value=countd3;
}

function f_jsyzrx(jsytb)
{

	var m = parseInt(jsytb);
	var p = 0;
	var idx = 0;
	res = 10000*m*csry[0][idx][p];
	document.getElementById("jsyxianshow").innerHTML = parseInt(formatNum(res));
	jsyzrx=parseInt(formatNum(res));
	document.getElementById("jsyxianhide").value=jsyzrx;
}


function f_ckzrx(tbck,bsites)
{
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


function f_countblpsx(buymoney,tbboli)
{
	var m = parseFloat(buymoney) * 10000;
	var idx = 0;
	var bltype = tbboli;
	var res;
	res = formatNum(m * blpsx[0][idx][bltype]);
	countblpsx=parseInt(res*bolixianxs);	
	document.getElementById("bolixianshow").innerHTML = countblpsx;
	document.getElementById("bolixianhide").value=countblpsx;
}


function f_countBj_jd()
{
	var countBj_fee = feecomp;
	countBj_fee = parseFloat((countBj_fee=="-")?0:countBj_fee);
	countBj_jd=parseInt(formatNum(countBj_fee*0.15)*csbjxs);
	document.getElementById("csbjshow").innerHTML = countBj_jd;
	document.getElementById("csbjhide").value=countBj_jd;
}

function f_countBj_d3()
{
	var d3_fee = countd3;
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	countBj_d3=parseInt(formatNum(d3_fee*0.15));
	document.getElementById("d3bjshow").innerHTML = countBj_d3;
	document.getElementById("d3bjhide").value=countBj_d3;
}

function f_countBj_ry()
{
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


function f_countBj_dq()
{
	var d3_fee = countdqx;
	d3_fee = parseFloat((d3_fee=="-")?0:d3_fee);
	countBj_dq= parseInt(formatNum(d3_fee*0.2));
	document.getElementById("dqbjshow").innerHTML = countBj_dq;
	document.getElementById("dqbjhide").value=countBj_dq;
}

function countPrice()
{
	var zongjia=feecomp+countd3+jsyzrx+ckzrx+countdqx+countblpsx+countBj_jd+countBj_d3+countBj_ry+countBj_dq;
	document.getElementById("totalshow2").innerHTML=zongjia;
    document.getElementById("tianpinghide").value=parseInt(zongjia);
    document.getElementById("pinganhide").value=parseInt(zongjia*pinganxs);
    document.getElementById("taipingyanghide").value=parseInt(zongjia*taipingyangxs);
    document.getElementById("picchide").value=parseInt(zongjia*piccxs);
}


function changeboli(buymoney,tbboli)
{
	var m = parseFloat(buymoney) * 10000;
	var idx = 0;
	var bltype = tbboli;
	var res;
	res = formatNum(m * blpsx[0][idx][bltype])*bolixianxs;
	document.getElementById("bolixianshow").innerHTML = parseInt(res);
	document.getElementById("bolixianhide").value=parseInt(res);
}

function changed3(tbdsz)
{
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


function changejsy(jsytb)
{

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

function changeck(tbck,bsites)
{
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