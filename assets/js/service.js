function getServicelist() {
	var $tpl = $('#servicelist_tpl');
	var source = $tpl.text();
	var template = Handlebars.compile(source);
	var data = {
		servicelist: {
			"content": [{
				"service": "洗车",
				"star": "2.5",
				"shop": "力魔汽车养护",
				"area": "莞城区",
				"shoptype": "汽车维保",
				"distance": "2.5km",
				"oldprice": "100",
				"newprice": "50",
				"img": "assets/i/sj/10.jpg",
				"url": "#"
			}, {	
				"service": "打蜡",
				"shop": "万众汽车修配",
				"star": "3.5",
				"area": "南城区",
				"shoptype": "维修保养",
				"oldprice": "1800",
				"newprice": "1360",
				"distance": "2.5km",
				"img": "assets/i/sj/1.jpg",
				"url": "#"
			}, {
				"service": "救援",
				"shop": "万众汽车修配",
				"star": "3.5",
				"area": "南城区",
				"shoptype": "维修保养",
				"oldprice": "2800",
				"newprice": "2360",
				"distance": "2.5km",
				"img": "assets/i/sj/1.jpg",
				"url": "#"
			}, {
				"service": "检测",
				"shop": "万众汽车修配",
				"star": "3.5",
				"area": "南城区",
				"shoptype": "维修保养",
				"oldprice": "0",
				"newprice": "0",
				"distance": "2.5km",
				"img": "assets/i/sj/1.jpg",
				"url": "#"
			}, {
				"service": "检测",
				"shop": "万众汽车修配",
				"star": "3.5",
				"area": "南城区",
				"shoptype": "维修保养",
				"oldprice": "0",
				"newprice": "0",
				"distance": "2.5km",
				"img": "assets/i/sj/1.jpg",
				"url": "#"
			}, {
				"service": "检测",
				"shop": "万众汽车修配",
				"star": "3.5",
				"area": "南城区",
				"shoptype": "维修保养",
				"oldprice": "0",
				"newprice": "0",
				"distance": "2.5km",
				"img": "assets/i/sj/1.jpg",
				"url": "#"
			}]
		}
	};

	var html = template(data);
	$tpl.before(html);
}