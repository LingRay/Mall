<?php
header('Content-type:text/html; charset=utf-8');
 
include 'link.php';
$id = $_GET['id'];
$time = $_GET['time']; 

if($id == 'top'){
	$sql = 'select * from shop where top = 1 ';
}else{
	$sql = 'select * from shop limit '. 50*$time.',50';
}
 
$result = mysqli_query($link, $sql);
$jarr = '';

//建立储存类

class Arr {
	public $shop;
	public $star;
	public $area;
	public $address;
	public $tel;
	public $shoptype;
	public $img;
	public $service;
	public $oldprice;
	public $newprice;
	public $url;
	public $distance;
}

while ($row = mysqli_fetch_array($result)) {
	$arr = new Arr();
	$arr -> shop = $row['shop_name'];
	$arr -> star = $row['star'];
	$arr -> area = $row['area'];
	$arr -> address = $row['address'];
	$arr -> tel = $row['tel'];
	$arr -> shoptype = $row['business_sort'];
	$arr -> img = $row['img'];
	$arr -> service = $row['service'];
  $arr -> oldprice = $row['oldprice'];
	$arr -> newprice = $row['newprice'];
	$arr -> url = $row['url'].$row['shop_number'];
	$arr -> distance = $row['distance'];
	
	
	$result_arr[] = $arr;
}

//转换为中文json
$jarr = ch_json_encode($result_arr);

//回调
$callback = $_GET['callback'];
echo $callback.$jarr;

//返回中文json
function ch_json_encode($data) {
	function ch_urlencode($data) {
		if (is_array($data) || is_object($data)) {
			foreach ($data as $k => $v) {
			    if (is_scalar($v)) {
					if (is_array($data)) {
						$data[$k] = urlencode($v);
					} else if (is_object($data)) {
						$data -> $k = urlencode($v);
					}
				} else if (is_array($data)) {
					$data[$k] = ch_urlencode($v);
					//递归调用该函数
				} else if (is_object($data)) {
					$data -> $k = ch_urlencode($v);
				}
			}
		}
		return $data;
	}

	$ret = ch_urlencode($data);
	$ret = json_encode($ret);
	return urldecode($ret);
}
?>