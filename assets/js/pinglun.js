function getPinglun() {
	var $tpl = $('#pinglun-tpl');
	var source = $tpl.text();
	var template = Handlebars.compile(source);
	var data = {
		pinglun: {
			"content": [{
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者1",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "商家回复：谢谢惠顾",
				"time2": "2015-07-04"
			}, {
				"author": "消费者2",
				"star": "4",
				"content": "老板活好",
				"time1": "2015-07-04",
				"reply": "",
				"time2": ""
			}]
		}
	};
	var html = template(data);
	$tpl.before(html);
}