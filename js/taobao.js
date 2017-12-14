//淘宝搜索框数据接口  	 ./php/taobao.php
	function weather(info){
		var obj=JSON.parse(info);
		var arr=obj.result;
		var html='';
		for(var i=0;i<arr.length;i++){
			html+='<tr>';
//					for(var j in arr[i]){
				html+='<td>'+arr[i][0]+'</td>';
//					}
			html+='</tr>';
		}
		$('table').html(html);				
	}
		var oInput=document.getElementsByTagName('input')[0];
	
	oInput.oninput=function(){		
		var cscript=document.createElement('script');
		cscript.src='./php/taobao.php?callback=weather&city='+oInput.value;
		document.body.appendChild(cscript);
	};		
	
//淘宝搜索框数据接口 旁的table切换 ./php/table.php	
    	$.getJSON("php/table.php", function(data){
				$.each(data.data1, function(i,item){
				var olia=$("<a href='javascript:;'>"+data.data1[i].title+"</a>");
				var oli=$("<li></li>");
				$(".cup-top-center-bottom").append(oli);
//				$(".cup-top-center-bottom li").find('a').css({'color':'#ff5000'})
//				$(".cup-top-center-bottom span a").css({'float':'right'})
				$(oli).append(olia);
				})
				});	

	$("ol li").eq(0).addClass('active')
		$("ol li").on('click',function(){
			$('ul.cup-top-center-bottom li').remove();
				$(this).eq(0).css({'color':'#fff'}).siblings('li').css({'color':'#000'});
				$(this).eq(0).addClass('active').siblings('li').removeClass('active');
			if ($(this).index()==1) {
//				var data=data.data2 
				$.getJSON("./php/table.php", function(data){
				$.each(data.data2, function(i,item){
					var olia=$("<a href='javascript:;'>"+data.data2[i].title+"</a>");
					var oli=$("<li></li>");
					$("ul.cup-top-center-bottom").append(oli);
					$(oli).append(olia);
				
				})
//				alert(1)
				$('ul').find('a.te').hide()
			});	
			}
			else{
				$.getJSON("./php/table.php", function(data){
				$.each(data.data1, function(i,item){
				var olia=$("<a href='javascript:;'>"+data.data1[i].title+"</a>");
				var oli=$("<li></li>");
				$("ul.cup-top-center-bottom").append(oli);
				$(oli).append(olia);
				$('ul.cup-top-center-bottom').find('a.te').show()
				})
				});	
			}
    	})	

//淘宝轮播图左侧二级菜单
	
	
	$.ajax({
		url: "./json/second.json",
		dataType: "json",
		success: function(msg) {
			$.each(msg, function(i, item) {
				var e='<div class="ds-reght-s"><a href="#"></a></div>';
				var img='<div class="imgss"><img src='+msg[i].url+'></div>'
				var h4='<h5>'+msg[i].h4+'</h5>';
				$(".ds-reght").append(e);
				$('.ds-reght .ds-reght-s a').eq(i).append(img);
				$('.ds-reght .ds-reght-s a').eq(i).append(h4);

			})
		}
	});
	$.getJSON("./json/second1.json", function(data){
   			var js=JSON.stringify(data);
   			var data=JSON.parse(js);
		$.each(data, function(i,item){
				var arr = Object.keys(data[i]);
				var newa=$("<a>"+data[i].t1+"<i class='tb-ifont service-arrow'></i></a>");
				var newLi=$("<li></li>");
				$("ul.article-left-ul").append(newLi);
				$(newLi).append(newa);
				$(newLi).css({ 'overflow': 'hidden','line-height': '32px','height': '32px','padding-left': '25px','padding-right': '19px','position': 'relative','font-size': '14px','font-weight': '400','width': '145px','color': '#666'})
				$('.service-arrow').css({'position':'absolute',
'right': '10px','font-size': '12px'})
		})				
 	});	



	//淘宝轮播图table切换
		var list=['公告','规则','论坛','安全','公益'];
		var olist=['星巴克携手阿里为全球最大新零售智慧门店揭幕','阿里公益牵手团中央','淘宝发布达人收入榜单']
		var olist1=['淘宝头条规范变更','新增住宅家具行业标准','游戏软件类目准入公告','天天特价规则变更']
		var olist2=['流量发放返15%','双12作战室发布','客户运营优秀同行案例','深度解读千人千面']
		var olist3=['人人3小时','公益亿起来','阿里巴巴总监下令','对这种人追杀到底']
		var olist4=['九寨沟地震紧急救援','公益宝贝卖家准入公告','致百万商家的感谢信','公益宝贝卖家发票索取']		
		list.forEach(function (i,v) {
  			var oli="<li>"+i+"</li>";
  			$('.aside-center-ul').append(oli)
  			$('.aside-center-ul li').css({    'float': 'left',
			    'line-height': '20px',
			    'width': '32px',
			    'text-align': 'center',
			    'margin-left':'11px',
  				'margin-right':'11px'})
		})
		olist.forEach(function (i,v) {
//			var ali="<a>"+i+"</a>";
  			var oli="<li>"+i+"</li>";
  			$('.aside-center-div ol.t').append(oli)
  			$('.aside-center-div ol').eq(0).show()
  			$('.aside-center-ul li').eq(0).addClass('selected')
		})
		olist1.forEach(function (i,v) {
  			var oli="<li>"+i+"</li>";
  			$('.aside-center-div ol.t1').append(oli)
		})
		olist2.forEach(function (i,v) {
  			var oli="<li>"+i+"</li>";
  			$('.aside-center-div ol.t2').append(oli)
		})
		olist3.forEach(function (i,v) {
  			var oli="<li>"+i+"</li>";
  			$('.aside-center-div ol.t3').append(oli)
  			$('.aside-center-div ol.t3 li').css({'width':'120px','margin':0,'text-align': 'left'})
		})
		olist4.forEach(function (i,v) {
  			var oli="<li>"+i+"</li>";
  			$('.aside-center-div ol.t4').append(oli)
		})
	$(".aside-center ul li").mouseenter(function(){
			  $this=$(this);
               b=setTimeout(function(){
               	 $('li').removeClass('selected');
				 $this.addClass('selected');
			$('.aside-center-div ol').hide();
			$('.aside-center-div ol').eq($this.index()).show();},300);
           }).mouseleave(function(){
               clearTimeout(b);
       });
      
	//淘宝轮播图右侧服务列表
	var olist5=['充话费','旅行','车险','游戏','彩票','电影','酒店','理财','找服务','演出','水电煤','火车票']
	var c=['0','-85px','-44px','-132px','-176px','-220px','-264','-308px','-352','-396px','-440xp','-482px']
       	for (var i=0;i<olist5.length;i++) {
       		
       		var oli="<li></li>";
       		 $('.aside-bottom ul').append(oli);
       		 var ospan="<span></span>";
       		 var op="<p>"+olist5[i]+"</p>";
       		 
       		 $('.aside-bottom ul li').eq(i).append(ospan)
       		 
       		  $('.aside-bottom ul li span').eq(i).css({
       		 	'background': 'url(img/TB1eiXTXlTH8KJjy0FiXXcRsXXa-24-595.png)'+0+' '+c[i]+' no-repeat'
       		 });
       		 $('.aside-bottom ul li').eq(i).append(op);
       	}
     //淘宝轮播图右侧小列表  			
		$.ajax({
  			url: "./json/weiyi.json",
			dataType:"json",
   			success: function(msg){
   				
				$.each(msg, function(i,item){
					var newLi=$("<li><a><img src="+msg[i].img+"	></a></li>");
					$(".aside-weiyi ul").append(newLi);
									
				})
   			}
		});
	//淘宝轮播纵向图
		$.ajax({
				url: "./json/verticallunbotu.json",
				dataType: "json",
				success: function(msg) {
					$.each(msg, function(i, item) {
							var e='<div class="e"><a href="#"></a></div>';
							var img='<img src='+msg[i].img+'>'
							var h4='<h4>'+msg[i].h4+'</h4>'
							var p='<p>'+msg[i].p+'</p>'
						$(".w").append(e);
						$('.w .e a').eq(i).append(img);
						$('.w .e a').eq(i).append(h4);
						$('.w .e a').eq(i).append(p);
					})
				}
			});
		var a=0
		var timer1,timer2;
		function add(){
			a++;
			var ttt=$('.e').eq(a).position().top;
			$('.w').css({
					'top':-ttt
					})
			if(a>=2){
			clearInterval(timer1);
			timer2=setInterval(sub,1100);
			}
		}
		function sub(){
		a--;
		 var ttt=$('.e').eq(a).position().top;
			$('.w').css({
					'top':-ttt
					})
		if(a<=0){
		clearInterval(timer2);
		timer1=setInterval(add,1100);
		} 
		}
	timer1=setInterval(add,1100);
	$('.w').on('mouseenter',function(){
		clearInterval(timer1);
		$(this).on('mouseleave',function(){
			timer1=setInterval(add,1100);
		})
	})
	

//淘宝轮播纵向图下第一列图片
	$.ajax({
		url: "./json/list1.json",
		dataType:"json",
		success: function(msg){
			$.each(msg, function(i,item){
				var img=$("<img/>");
				var div=$("<div class='wrap-img'></div>");

				var h4=$("<h4>"+msg[i].h4+"</h4>");
				var p=$("<p>"+msg[i].p+"</p>");					
				var newLi=$("<li></li>");
				$("ul.layer-f1-center").append(newLi);
				$(div).append(img);
				$(newLi).append(div);
				$(newLi).append(h4);
				$(newLi).append(p);
				$("ul.layer-f1-center img").eq(i).attr("src",msg[i].img);
			})
   		}
	});

//淘宝轮播纵向图下第二列图片
	$.ajax({
		url:'./json/list2.json',
		dataType:'json',
		success:function(data){
			var html='<ul>';	
			for(var i=0;i<data.length;i++){
				html+='<li>'+
					'<div class="wrap-img">'+
						'<img src='+data[i].img+'>'+
					'</div>'+
					'<div class="right">'+
						'<h4>'+data[i].h4+'</h4>'+
							'<p>'+
								data[i].p+
							'</p>'+
							"<p class='extra'><i class='tb-ifont'></i>人气859235</p>"+
					'</div>'+
					'</li>';
			}
			html+='</ul>';
			$('.layer-f2-ul').html(html)
		}	
	})
	
//淘宝轮播纵向图下第三列图片 好店直播	
		$.ajax({
		url: "./json/list3.json",
		dataType:"json",
		success: function(msg){
			$.each(msg, function(i,item){
//					alert(msg)
				var h44=$("<h4><img/>"+msg[i].h4+"</h4>");
				var p=$("<p class='extra'>"+msg[i].p+"</p>");
				var p1=$("<p><img src='//img.alicdn.com/bao/uploaded/i3/165210263464182707/TB2lSwItVXXXXbLXpXXXXXXXXXX_!!0-mytaobao.jpg_30x30.jpg' alt='潮流女孩girl' style='width:22px;height:22px;display: inline;float:left'>"+msg[i].p1+"</p>");
				var newa=$("<a href='javascript:;'></a>");
				var img="<img class='te'/>"
				var ddiv="<div></div>";
				var newLi=$("<li></li>");
				$(".layer-f3-left ul").append(newLi)
				$(newLi).append(newa);
				$(newLi).append(img);
				$(newLi).append(h44);
				$(newLi).append(p);
				$(newLi).append(p1);
				$(".layer-f3-left ul img.te").eq(i).attr("src",msg[i].img);
				$(".layer-f3-left ul h4 img").eq(i).attr("src",msg[i].h4img);
			})
		}
	});
   		
	$('.layer-f3').clone().insertAfter('.layer-f3').css({'float':'right'})
	$('.layer-f3').eq(0).addClass('gege');
	
	$.ajax({
		url: "./json/list3.json",
		dataType:"json",
		success: function(msg){
			$.each(msg, function(i,item){
				var h44=$("<h4><img/>"+msg[i].h4+"</h4>");
				var p=$("<p class='extra'>"+msg[i].p+"</p>");
				var p1=$("<p><span class='tb-ifont'></span>"+msg[i].p1+"</p>");
				var newa=$("<a href='javascript:;'></a>");
				var img="<img class='te'/>"
				var ddiv="<div></div>";
				$('.gege .layer-f3-left ul li').eq(i).append(newa);
				$('.gege .layer-f3-left ul li').eq(i).append(img);
				$('.gege .layer-f3-left ul li').eq(i).append(h44);
				$('.gege .layer-f3-left ul li').eq(i).append(p);
				$('.gege .layer-f3-left ul li').eq(i).append(p1);
				$(".layer-f3-left ul img.te").eq(i).attr("src",msg[i].img);
				$(".layer-f3-left ul h4 img").eq(i).attr("src",msg[i].h4img);
			})
		}
	});

//品质生活
	$('.layer-f7-left').clone(true).insertAfter('.layer-f7-left').css({'float':'right'})
	
	$('.layer-left-t-ul li').clone().insertAfter('.layer-left-t-ul li').css({'float':'left'}).addClass('hongse')
	$('.layer-left-t-ul li.hongse').clone(true).insertAfter('.layer-left-t-ul li').css({'float':'left'})
	$('.layer-left-t-ul li').eq(0).remove()


//热卖商品
	var li=['客厅灯','床垫','冲锋衣','沙发垫','电脑椅','大闸蟹','男内裤','窗帘','皮带','鞋柜','沙发','夹克','茶几','运动鞋','衣柜','牛仔裤','男裤','电脑桌','拉杆箱','椅子','保温杯','男包','打底衫','阔腿裤'];
	li.forEach(function (i,v) {	
  	var oli="<li><a href='javascript:;'>"+i+"</a></li>";
  		$('.layer-f8-left').append(oli)
	})

	$.ajax({
	url:'./json/list4.json',
	dataType:'json',
	success:function(data){
		var html='<ul>';	
		for(var i=0;i<data.length;i++){
			html+='<li>'+
				'<a class="layer-f8-center-a">'+
					'<span class="layer-f8-center-a-span1">'+
						'<img src='+data[i].url+'>'+
					'</span>'+
					'<p class="layer-f8-center-a-span">'+
						data[i].title+
					'</p>'+
					'<span class="layer-f8-center-a-span2">'+
						'<span class="layer-f8-center-a-span2-r">'+
							'<em>'+data[i].t1+'</em>'+'<em>'+data[i].t2+'</em>'+
						'</span>'+
						'<span class="layer-f8-center-a-span2-l">'+
							'<span class="span2-l1">'+
								'<i>'+data[i].t3+'</i>'+
								'<b>'+data[i].t4+'</b>'+
							'</span>'+
							'<span class="span2-l2">'+
								'<i>'+data[i].t5+'</i>'+
							'</span>'+
						'</span>'+
					'</span>'+
				'</a>'
			+'</li>';
		}
		html+='</ul>';
		$('.layer-f8-center').html(html)
		}	
	})

//猜你喜欢
	$.ajax({
		url:'http://127.0.0.1/taoba/php/1.php?__hbt=1512711688644',
		dataType:'json',
		success:function(data){
			var html='<ul>';	
			for(var i=0;i<data.length;i++){
				html+='<li>'+
						'<a class="wu">'+
							'<span class="item-pic">'+
								'<img title="1" src="'+data[i].url+'" sid="'+data[i].side+'">'+
							'</span>'+
							'<span class="item-info">'+
								'<span class="item-desc">'+
									'<em>'+data[i].title+'</em>'+
								'</span>'+
								'<span class="item-detail">'+
									'<span class="mui-price">¥'+
										'<i>'+data[i].price+'</i>'+
									'</span>'+
								'</span>'+
							'</span>'+
						'</a>'
					+'</li>';
			}
			html+='</ul>';
			$('.mjcc').html(html)
		}	
})	
$('.mjcc').on('mouseenter','ul li',function(){
		$('.item-info').eq($(this).index()).hide();
		var aimg=$("<a href='javascript:;' class='qqq'><img src='img/t14.gif'/></a>");
		$('.mjcc ul li a.wu').eq($(this).index()).append(aimg);
		$('.mjcc ul li a.qqq').css({
			'margin-top':'27px',
			'margin-left':'-1px',
'position':'absolute'
		})
})
$('.mjcc').on('mouseleave','ul li',function(){
		$('.item-info').eq($(this).index()).show();
		$('.mjcc ul li a.qqq').hide()	
})	


//
	 

//定位布局  楼梯
		$(window).on('scroll',function(){
		var $top=$(this).scrollTop();//滚动条的距离
		if($top>=600){
			var t=document.body.clientWidth;
			$('.search-combobox').css({
				'top':0,'z-index':100,
				'background':'#fff',
				'position':'fixed',
				'padding':'10px',
				'padding-left':'400px',
				'padding-right':'400px',
				'left':0		
			})
			var img='<img class="imgs" src="//img.alicdn.com/tfs/TB1TGfMcwMPMeJjy1XbXXcwxVXa-80-33.png"/>';
			$('.search-combobox').append(img)
			$('.imgs').css({
				'position':'absolute',
				'left':'50px'
			})
			
			$('.imgs').show()
			$('table').css({
				'position':'fixed'
			})
		}
		else if($top<600){
				$('.search-combobox').css({
				'position':'relative',	
				'padding':'0',
				'padding-left':'0',
				'padding-right':'0',
			})
			$('.imgs').hide()
		$('table').css({
				'position':'absolute'
			})
		}


		if($top>=900){
			$('#louti').show();
			$('#fixed-bottom1').fadeIn(300);
			$('#fixed-bottom22').fadeIn(300);
		}else if($top<900){
			$('#louti').hide();
			$('#fixed-bottom1').fadeOut(300);
			$('#fixed-bottom22').fadeOut(300);
	//			$('#fixed-bottom1').hide()
		}

		$('.f').each(function(){
			var $loutitop=$('.f').eq($(this).index('.f')).offset().top+300;
			if($loutitop>$top){
				$('#louti a').removeClass('at');
				$('#louti a.a').eq($(this).index('.f')).addClass('at');
				return false;//终止循环
			}
		});
	
		
		
		
		});
	//	点击楼梯让右边的内容达到顶部
	var $offsettop=0
	$('#louti').find('a').not('.louti-tea').on('click',function(){
			var $this=$(this).index()-1;
			if ($this>=4) {			
//				$offsettop=$('.f').eq(4).offset().top;
			} else{
				$offsettop=$('.f').eq($this).offset().top;
		
			}
		
		
		$('html,body').stop(true,false).animate({
			scrollTop:$offsettop
		});
	});	
	//回到顶
	
	$('#louti').on('click','a',function(){
		if($(this).index()==6){
			$('html,body').stop(true,false).animate({
			scrollTop:0
		});
		}
		
	});
	
	$('#louti').find('a').hover(
		function(){
			$(this).addClass('att')
		},function(){
			$('#louti').find('a').removeClass('att')
		})
//	

//划过出现二级菜单
	$('.article-left-ul').on('mouseenter','li',function(){
		$('.ds').show(),
		$('.article-left-ul').on('mouseleave','li',function(){
			$('.ds').hide()
		})
	})
		
	//划过nav上方标签出现图片
	$('.nav-center').find('li').on('mouseenter','a',function(){
	   	$('.nav-center').find('a').removeClass('fff')
		$(this).addClass('fff')
			$(this).on('mouseleave',function(){
				$('.nav-center').find('a').removeClass('fff')
			})
			return false;
	  })	
	
	//轮播图的左右按钮
	$('#wrap,.wrap1').hover(function(){			
			$(this).find('.hiSlider-btn-prev,.hiSlider-btn-next').show()
		},function(){
			
			$(this).find('.hiSlider-btn-prev,.hiSlider-btn-next').hide()
	})
	

 