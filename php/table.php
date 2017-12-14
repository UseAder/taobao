<?php

	$arr3=array(
		array('title'=>'夹克外套','titl'=>'#ff5000'),
		array('title'=>'零食大礼包','titl'),
		array('title'=>'新款男鞋','titl'=>'#ff5000'),
		array('title'=>'妈妈装','titl'),
		array('title'=>'男士外套','titl'),
		array('title'=>'新款裤子','titl'=>'#ff5000'),
		array('title'=>'夹克','titl'),
		array('title'=>'牛仔裤','titl'),
		array('title'=>'沙发','titl'),
		array('title'=>'男士内裤','titl'),
		array('title'=>'衬衫','titl')
	);
	$arr4=array(
		array('title'=>'针织衫'),
		array('title'=>'羽绒服','titl'=>'#ff5000'),
		array('title'=>'四件套'),
		array('title'=>'扫地机器人','titl'=>'#ff5000'),
		array('title'=>'客厅灯'),
		array('title'=>'男士毛衣'),
		array('title'=>'女鞋','titl'=>'#ff5000'),
		array('title'=>'双肩包'),
		array('title'=>'打底裤','titl'=>'#ff5000'),
		array('title'=>'文胸'),
		array('title'=>'行车记录仪'),
		array('title'=>'面膜','titl'=>'#ff5000'),
		array('title'=>'牛奶')
	);
	
	class Person{//创建一个类型
		//公有的属性和函数，私有的属性和函数，受保护的属性和函数
		//public $name='zhangsan';
	}
	$p1=new Person();	
	//echo $p1->name
	$p1->data1=$arr3;//给对象的成员赋值。
	$p1->data2=$arr4;
	echo json_encode($p1);		
?>

