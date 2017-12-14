<?php
	require "gongyou.php";//引入数据库连接的文件
	if(isset($_POST['name'])||isset($_POST['emai'])){	
		$emai=@$_POST['emai'];
		$name=@$_POST['name'];		
	}else{
		exit('非法操作');
	}
	$query1="select * from user where email='$emai'";
	$query="select * from user where username='$name'";
	$result=mysql_query($query);
	$result1=mysql_query($query1);
	if(mysql_fetch_array($result)||mysql_fetch_array($result1)){
		echo true;
	}else{
		echo false;
	}
	if(isset($_POST['submit']) && $_POST['submit']=="完成注册"){
		$user=$_POST['name'];
		$pass=$_POST['password'];
		echo ('$user');
		$email=$_POST['email'];
		$query="insert user(username,password,email,regdate) values('$user','$pass','$email',NOW())";
		mysql_query($query);
		header('location:../login.html');
	}
?>