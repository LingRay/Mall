﻿<?php

//服务端返回JSON数据
$arr='[{"bid":2,"id":"693","title":"A AC宝马","text":"A AC宝马"},{"bid":3,"id":"959","title":"A AMG","text":"A AMG"},{"bid":4,"id":"62","title":"A 阿斯顿马丁","text":"A 阿斯顿马丁"},{"bid":5,"id":"1","title":"A 奥迪","text":"A 奥迪"},{"bid":7,"id":"723","title":"B 巴博斯","text":"B 巴博斯"},{"bid":8,"id":"44","title":"B 保时捷","text":"B 保时捷"},{"bid":9,"id":"582","title":"B 宝骏","text":"B 宝骏"},{"bid":10,"id":"20","title":"B 宝马","text":"B 宝马"},{"bid":11,"id":"593","title":"B 北京","text":"B 北京"},{"bid":12,"id":"898","title":"B 北汽幻速","text":"B 北汽幻速"},{"bid":13,"id":"814","title":"B 北汽绅宝","text":"B 北汽绅宝"},{"bid":14,"id":"643","title":"B 北汽威旺","text":"B 北汽威旺"},{"bid":15,"id":"950","title":"B 北汽新能源","text":"B 北汽新能源"},{"bid":16,"id":"122","title":"B 北汽制造","text":"B 北汽制造"},{"bid":17,"id":"4","title":"B 奔驰","text":"B 奔驰"},{"bid":18,"id":"306","title":"B 奔腾","text":"B 奔腾"},{"bid":19,"id":"3","title":"B 本田","text":"B 本田"},{"bid":20,"id":"107","title":"B 比亚迪","text":"B 比亚迪"},{"bid":21,"id":"41","title":"B 标致","text":"B 标致"},{"bid":22,"id":"7","title":"B 别克","text":"B 别克"},{"bid":23,"id":"45","title":"B 宾利","text":"B 宾利"},{"bid":24,"id":"63","title":"B 布加迪","text":"B 布加迪"},{"bid":26,"id":"75","title":"C 昌河","text":"C 昌河"},{"bid":27,"id":"124","title":"C 长安","text":"C 长安"},{"bid":28,"id":"613","title":"C 长安商用","text":"C 长安商用"},{"bid":29,"id":"110","title":"C 长城","text":"C 长城"},{"bid":30,"id":"990","title":"C 成功","text":"C 成功"},{"bid":32,"id":"754","title":"D DS","text":"D DS"},{"bid":33,"id":"235","title":"D 大迪","text":"D 大迪"},{"bid":34,"id":"2","title":"D 大众","text":"D 大众"},{"bid":35,"id":"72","title":"D 道奇","text":"D 道奇"},{"bid":36,"id":"111","title":"D 东风","text":"D 东风"},{"bid":37,"id":"877","title":"D 东风风度","text":"D 东风风度"},{"bid":38,"id":"581","title":"D 东风风神","text":"D 东风风神"},{"bid":39,"id":"949","title":"D 东风风行","text":"D 东风风行"},{"bid":40,"id":"856","title":"D 东风小康","text":"D 东风小康"},{"bid":41,"id":"16","title":"D 东南","text":"D 东南"},{"bid":43,"id":"794","title":"F Fisker","text":"F Fisker"},{"bid":44,"id":"61","title":"F 法拉利","text":"F 法拉利"},{"bid":45,"id":"18","title":"F 菲亚特","text":"F 菲亚特"},{"bid":46,"id":"10","title":"F 丰田","text":"F 丰田"},{"bid":47,"id":"116","title":"F 福迪","text":"F 福迪"},{"bid":48,"id":"878","title":"F 福汽启腾","text":"F 福汽启腾"},{"bid":49,"id":"21","title":"F 福特","text":"F 福特"},{"bid":50,"id":"103","title":"F 福田","text":"F 福田"},{"bid":52,"id":"265","title":"G GMC","text":"G GMC"},{"bid":53,"id":"824","title":"G 观致","text":"G 观致"},{"bid":54,"id":"567","title":"G 光冈","text":"G 光冈"},{"bid":55,"id":"571","title":"G 广汽传祺","text":"G 广汽传祺"},{"bid":56,"id":"195","title":"G 广汽吉奥","text":"G 广汽吉奥"},{"bid":58,"id":"82","title":"H 哈飞","text":"H 哈飞"},{"bid":59,"id":"845","title":"H 哈弗","text":"H 哈弗"},{"bid":60,"id":"876","title":"H 海格","text":"H 海格"},{"bid":61,"id":"8","title":"H 海马","text":"H 海马"},{"bid":62,"id":"583","title":"H 海马郑州","text":"H 海马郑州"},{"bid":63,"id":"855","title":"H 恒天","text":"H 恒天"},{"bid":64,"id":"396","title":"H 红旗","text":"H 红旗"},{"bid":65,"id":"1001","title":"H 华颂","text":"H 华颂"},{"bid":66,"id":"115","title":"H 华泰","text":"H 华泰"},{"bid":67,"id":"133","title":"H 黄海","text":"H 黄海"},{"bid":69,"id":"38","title":"J Jeep","text":"J Jeep"},{"bid":70,"id":"13","title":"J 吉利汽车","text":"J 吉利汽车"},{"bid":71,"id":"804","title":"J 佳跃","text":"J 佳跃"},{"bid":72,"id":"78","title":"J 江淮","text":"J 江淮"},{"bid":73,"id":"101","title":"J 江铃","text":"J 江铃"},{"bid":74,"id":"26","title":"J 捷豹","text":"J 捷豹"},{"bid":75,"id":"83","title":"J 金杯","text":"J 金杯"},{"bid":76,"id":"355","title":"J 金龙汽车","text":"J 金龙汽车"},{"bid":77,"id":"114","title":"J 金旅","text":"J 金旅"},{"bid":78,"id":"568","title":"J 九龙","text":"J 九龙"},{"bid":80,"id":"888","title":"K KTM","text":"K KTM"},{"bid":81,"id":"704","title":"K 卡尔森","text":"K 卡尔森"},{"bid":82,"id":"1012","title":"K 卡威汽车","text":"K 卡威汽车"},{"bid":83,"id":"578","title":"K 开瑞","text":"K 开瑞"},{"bid":84,"id":"70","title":"K 凯迪拉克","text":"K 凯迪拉克"},{"bid":85,"id":"1075","title":"K 凯马","text":"K 凯马"},{"bid":86,"id":"970","title":"K 凯翼","text":"K 凯翼"},{"bid":87,"id":"570","title":"K 科尼赛克","text":"K 科尼赛克"},{"bid":88,"id":"991","title":"K 科瑞斯的","text":"K 科瑞斯的"},{"bid":89,"id":"39","title":"K 克莱斯勒","text":"K 克莱斯勒"},{"bid":91,"id":"64","title":"L 兰博基尼","text":"L 兰博基尼"},{"bid":92,"id":"663","title":"L 劳伦士","text":"L 劳伦士"},{"bid":93,"id":"47","title":"L 劳斯莱斯","text":"L 劳斯莱斯"},{"bid":94,"id":"1022","title":"L 雷丁","text":"L 雷丁"},{"bid":95,"id":"30","title":"L 雷克萨斯","text":"L 雷克萨斯"},{"bid":96,"id":"40","title":"L 雷诺","text":"L 雷诺"},{"bid":97,"id":"604","title":"L 理念","text":"L 理念"},{"bid":98,"id":"305","title":"L 力帆","text":"L 力帆"},{"bid":99,"id":"46","title":"L 莲花","text":"L 莲花"},{"bid":100,"id":"58","title":"L 猎豹汽车","text":"L 猎豹汽车"},{"bid":101,"id":"66","title":"L 林肯","text":"L 林肯"},{"bid":102,"id":"73","title":"L 铃木","text":"L 铃木"},{"bid":103,"id":"29","title":"L 路虎","text":"L 路虎"},{"bid":104,"id":"653","title":"L 路特斯","text":"L 路特斯"},{"bid":105,"id":"939","title":"L 陆地方舟","text":"L 陆地方舟"},{"bid":106,"id":"569","title":"L 陆风","text":"L 陆风"},{"bid":108,"id":"345","title":"M MG名爵","text":"M MG名爵"},{"bid":109,"id":"205","title":"M MINI","text":"M MINI"},{"bid":110,"id":"316","title":"M 玛莎拉蒂","text":"M 玛莎拉蒂"},{"bid":111,"id":"17","title":"M 马自达","text":"M 马自达"},{"bid":112,"id":"715","title":"M 迈凯伦","text":"M 迈凯伦"},{"bid":113,"id":"908","title":"M 摩根","text":"M 摩根"},{"bid":115,"id":"1032","title":"N Noble","text":"N Noble"},{"bid":116,"id":"623","title":"N 纳智捷","text":"N 纳智捷"},{"bid":117,"id":"1053","title":"N 南京金龙","text":"N 南京金龙"},{"bid":119,"id":"22","title":"O 欧宝","text":"O 欧宝"},{"bid":120,"id":"703","title":"O 欧朗","text":"O 欧朗"},{"bid":121,"id":"140","title":"O 讴歌","text":"O 讴歌"},{"bid":123,"id":"573","title":"P 帕加尼","text":"P 帕加尼"},{"bid":125,"id":"57","title":"Q 奇瑞","text":"Q 奇瑞"},{"bid":126,"id":"12","title":"Q 起亚","text":"Q 起亚"},{"bid":127,"id":"633","title":"Q 启辰","text":"Q 启辰"},{"bid":128,"id":"1074","title":"Q 前途","text":"Q 前途"},{"bid":130,"id":"15","title":"R 日产","text":"R 日产"},{"bid":131,"id":"365","title":"R 荣威","text":"R 荣威"},{"bid":132,"id":"580","title":"R 瑞麒","text":"R 瑞麒"},{"bid":134,"id":"603","title":"S Smart","text":"S Smart"},{"bid":135,"id":"23","title":"S 萨博","text":"S 萨博"},{"bid":136,"id":"980","title":"S 赛麟","text":"S 赛麟"},{"bid":137,"id":"32","title":"S 三菱","text":"S 三菱"},{"bid":138,"id":"673","title":"S 上汽大通MAXUS","text":"S 上汽大通MAXUS"},{"bid":139,"id":"546","title":"S 世爵","text":"S 世爵"},{"bid":140,"id":"119","title":"S 双环","text":"S 双环"},{"bid":141,"id":"53","title":"S 双龙","text":"S 双龙"},{"bid":142,"id":"49","title":"S 斯巴鲁","text":"S 斯巴鲁"},{"bid":143,"id":"69","title":"S 斯柯达","text":"S 斯柯达"},{"bid":144,"id":"733","title":"S 思铭","text":"S 思铭"},{"bid":146,"id":"969","title":"T 泰卡特","text":"T 泰卡特"},{"bid":147,"id":"774","title":"T 特斯拉","text":"T 特斯拉"},{"bid":148,"id":"743","title":"T 腾势","text":"T 腾势"},{"bid":150,"id":"753","title":"W 威兹曼","text":"W 威兹曼"},{"bid":151,"id":"579","title":"W 威麟","text":"W 威麟"},{"bid":152,"id":"24","title":"W 沃尔沃","text":"W 沃尔沃"},{"bid":153,"id":"118","title":"W 五菱","text":"W 五菱"},{"bid":154,"id":"918","title":"W 五十铃","text":"W 五十铃"},{"bid":156,"id":"154","title":"X 西雅特","text":"X 西雅特"},{"bid":157,"id":"34","title":"X 现代","text":"X 现代"},{"bid":158,"id":"225","title":"X 雪佛兰","text":"X 雪佛兰"},{"bid":159,"id":"6","title":"X 雪铁龙","text":"X 雪铁龙"},{"bid":161,"id":"516","title":"Y 野马汽车","text":"Y 野马汽车"},{"bid":162,"id":"9","title":"Y 一汽","text":"Y 一汽"},{"bid":163,"id":"132","title":"Y 依维柯","text":"Y 依维柯"},{"bid":164,"id":"28","title":"Y 英菲尼迪","text":"Y 英菲尼迪"},{"bid":165,"id":"919","title":"Y 英致","text":"Y 英致"},{"bid":166,"id":"275","title":"Y 永源","text":"Y 永源"},{"bid":167,"id":"1063","title":"Y 御捷","text":"Y 御捷"},{"bid":169,"id":"1043","title":"Z Zenvo","text":"Z Zenvo"},{"bid":170,"id":"929","title":"Z 知豆","text":"Z 知豆"},{"bid":171,"id":"866","title":"Z 之诺","text":"Z 之诺"},{"bid":172,"id":"104","title":"Z 中华","text":"Z 中华"},{"bid":173,"id":"506","title":"Z 中欧","text":"Z 中欧"},{"bid":174,"id":"325","title":"Z 中顺","text":"Z 中顺"},{"bid":175,"id":"125","title":"Z 中兴","text":"Z 中兴"},{"bid":176,"id":"307","title":"Z 众泰","text":"Z 众泰"}]';


//echo $_GET['callback'].'("Hello,World!")';
//echo $_GET['callback']."($result)";
//动态执行回调函数
$callback=$_GET['callback'];
echo $callback."($arr)";