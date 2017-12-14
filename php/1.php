<?php
	include "gongyou.php";//部分引入公用的php
	//操作数据库(增删改查)
	$query="select * from cai";
	$result=mysql_query($query);//获取内容，存放到$result  记录集
	 $arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result , MYSQL_ASSOC);//将数组给另外一个数组，形成二维数组。
	}
	echo json_encode($arr);
	
////	mysql_fetch_array：逐条的获取记录集，返回一个数组，参1：记录集  参2：获取数字下标，字符串下标
//	print_r(mysql_fetch_array($result , MYSQL_NUM));//获取记录集的第一条
//	print_r(mysql_fetch_array($result , MYSQL_ASSOC));//获取记录集的第二条........??这里要隐藏  否则下面接口无法输出
//	print_r(mysql_fetch_array($result , MYSQL_ASSOC));//获取记录集的第三条
// echo mysql_num_rows($result); //获取条数5
   
  
	//json_encode()该函数主要用来将数组和对象，转换为json格式。
	//json_decode()该函数用于将json文本转换为相应的PHP数据结构。
	//json_encode()和json_decode()是编译和反编译过程，注意json只接受utf-8编码的字符，所以json_encode()的参数必须是utf-8编码，否则会得到空字符或者null。
 
   ////	mysql_close()//关闭数据库  阻止前端传输
   
?>
