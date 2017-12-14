<?php
// 物品搜索接口$html_content=file_get_contents("https://suggest.taobao.com/sug?code=utf-8&q=aaaa&_ksTS=1511581145910_1072&callback=jsonp1073&k=1&area=c2c&bucketid=10");
$city=isset($_GET['city'])? $_GET['city'] : '';
	$cb=isset($_GET['callback'])? $_GET['callback'] : 'fn';
	$weather=file_get_contents('https://suggest.taobao.com/sug?q='.$city);
	echo $cb.'('.json_encode($weather).')';
?>