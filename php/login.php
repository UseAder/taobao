<?php
	require "gongyou.php";//部分引入公用的php
	if(isset($_POST['name'])){//获取值
		$name=$_POST['name'];
//		$pass=md5($_POST['pass']);
		$pass=$_POST['pass'];
	}else{
		exit('非法操作');
	}
	$query="select * from user where username='$name'and password='$pass'";
	$result=mysql_query($query);
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo true;//有重复
	}else{
		echo false;//没有重复
	}
	
?>