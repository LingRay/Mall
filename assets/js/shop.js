function getShoplist() {
	var $tpl = $('#shoplist_tpl');
	var source = $tpl.text();
	var template = Handlebars.compile(source);
	var data = {
		shoplist: {
			"content": [{
				"shop": "力魔汽车养护",
				"star": "2.5",
				"area": "东城区",
				"shoptype": "汽车维保",
				"tel": "400300200100",
				"distance": "2.5km",
				"address": "东莞市润德汽车用品中心2栋17号",
				"img": "assets/i/sj/10.jpg",
				"url": "#"
			}, {
				"shop": "添添聚源味",
				"star": "3.5",
				"area": "莞城区",
				"shoptype": "餐饮美食",
				"tel": "400300200100",
				"distance": "2.5km",
				"address": "莞城区东方宝泰负一层1053商铺",
				"img": "assets/i/sj/1.jpg",
				"url": "#"
			}, {
				"shop": "嘉顿蛋糕",
				"star": "3",
				"area": "南城区",
				"shoptype": "休闲娱乐",
				"tel": "400300200100",
				"distance": "3.5km",
				"address": "南城区东方宝泰负一层1053商铺",
				"img": "assets/i/sj/2.jpg",
				"url": "#"
			}, {
				"shop": "康活水世界",
				"star": "0.5",
				"area": "南城区",
				"shoptype": "美容保健",
				"tel": "400300200100",
				"distance": "5.5km",
				"address": "南城区东方宝泰负一层1150商铺",
				"img": "assets/i/sj/3.jpg",
				"url": "#"
			}, {
				"shop": "海皇饭店",
				"star": "2.5",
				"area": "东城区",
				"shoptype": "餐饮美食",
				"tel": "400300200100",
				"distance": "3.8km",
				"address": "东城区东方宝泰负一层1053商铺",
				"img": "assets/i/sj/4.jpg",
				"url": "#"
			}, {
				"shop": "赛牛炙烧牛排",
				"star": "4",
				"area": "南城区",
				"shoptype": "餐饮美食",
				"tel": "400300200100",
				"distance": "3.8km",
				"address": "南城东方宝泰负一层1053商铺",
				"img": "assets/i/sj/7.jpg",
				"url": "#"
			}]
		}
	};
	
	var html = template(data);
	$tpl.before(html);
}