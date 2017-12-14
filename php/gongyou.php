<?php
	//php数据库连接
	header('content-type:text/html;charset=utf-8');
	//连接数据库
	$coss=@mysql_connect('localhost','root','444444444');//赋值  主机  用户名  密码   @表示一些警告 容错符号
	if(!$coss){
		die('渣渣 连接失败'.mysql_error());//die():输出错误，exit()   .mysql_error()数据本身的报错
	}
	
	//选择数据库
	mysql_select_db('tianmao',$coss)or die('Can\'t use foo :选择数据库失败'.mysql_error());//or后是没有连接报错
	mysql_query('set names utf8');//为了让下方中文
	
	
?>
