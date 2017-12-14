$('header').append('<div class="site-nav site-nav-status-logout" id="J_SiteNav" data-tbar="{ &quot;show&quot;:true, &quot;miniCart&quot;: &quot;2.12.2&quot;,&quot;paramsBlackList&quot;: &quot;_wt,seeyouagain1722&quot;,&quot;my_activity&quot;: &quot;}"><div class="headerleft"><span>中国大陆<img src="img/t1.gif"/></span><a href="javascript:;" class="te">手机逛淘宝</a><div class="rl"><a href="reg.html" class="zhuce">免费注册</a><a href="login.html" class="hong dengyu">亲，请登录</a></div></div><div class="menu-hd"><a href="javascript:;" data-spm="d3"><img id="J_WeekendImg" src="https://img.alicdn.com/tfs/TB18tVOer_I8KJjy1XaXXbsxpXa-139-28.png"></a></div><div class="headerright"><ul><li><div class="te"><a href="javascript:;">我的淘宝<img src="img/t1.gif"/></a></div></li><li><div class="te"><a href="javascript:;"><span><span class="site-nav-icon site-nav-icon-highlight"></span>购物车<img src="img/t1.gif"/></span></a></div></li><li><div class="te"><a href="javascript:;"><span><span class="site-nav-icon"></span>收藏夹<img src="img/t1.gif"/></span></a></div></li><li><div class="te"><a href="javascript:;">商品分类</a></div></li><li class="shu">|</li><li><div class="te"><a href="javascript:;">卖家中心<img src="img/t1.gif"/></a></div></li><li><div class="te"><a href="javascript:;">联系客服<img src="img/t1.gif"/></a></div></li><li><div class="te"><a href="javascript:;"><span><span class="site-nav-icon site-nav-icon-highlight"></span>网站导航<img src="img/t1.gif"/></span></a></div></li></ul></div>')
$('body').append('<div class="fixed"><div class="fixed-center"></div><div class="fixed-top"><ul><div class="fixed-top-a"><a href="javascript"><i class="tb-toolbar-iconfont"></i><span class="tb-toolbar-item-hd-text">大促优惠</span></a><a href="javascript"><span class="tb-toolbar-item-hd-text tb-toolbar-item-hd-my-activity">我的1212 <i class="tb-toolbar-userhead"></i></span></a></div></ul></div><div class="fixed-bottom"><ul><li><div class="fixed-bottom-l"><b class="dian"></b><a href="javascript:;"><div class="tb-toolbar-item-icon tb-toolbar-item-icon-cart" id="gouwuche"></div><div class="tb-toolbar-item-label tb-toolbar-item-label-cart">购物车</div></a><span class="te"></span><div class="fixed-bottom-l-o"><div class="tb-toolbar-item-icon t1" ></div><div class="tb-toolbar-item-icon t2"></div><div class="tb-toolbar-item-tip r">我的足迹<span>◆</span><span class="sidebar-bubble"></span></div><div class="tb-toolbar-item-tip r1">帮助<span>◆</span><span class="sidebar-bubble"></span></div><div class="tb-toolbar-item-tip r2">返回顶部<span>◆</span><span class="sidebar-bubble"></span></div><div class="tb-toolbar-item-icon t3"></div></div></div></li><li></li><li></li></ul></div></div>')
//右侧固定定位有关
		$('.fixed-bottom-l-o .t1').hover(function(){
			$(this).siblings('.r').show()
		},function(){
			$(this).siblings('.r').hide()
		})
		$('.fixed-bottom-l-o .t2').hover(function(){
			$(this).siblings('.r1').show()
		},function(){
			$(this).siblings('.r1').hide()
		})
		$('.fixed-bottom-l-o .t3').hover(function(){
			$(this).siblings('.r2').show()
		},function(){
			$(this).siblings('.r2').hide()
		})
		
		$('.fixed-bottom-l').on('dblclick','a',function(){
				if (getCookie('UserName')) {
					location.href='cart.html';
				} else{
					alert('检测到用户未登入 ，点击后将跳转');
					location.href='login.html';
				}
				
		});
		
		$('.fixed-bottom-l-o .t3').on('click',function(){
			$('html,body').animate({
			'scrollTop':0
			});		
		});
	
	var fl=['时髦女装 >','家具灯具 >','美妆个护 >','精选美食 >','童装玩具 >','潮流男装 >','生活百货 >','家庭设计 >','运动户外 >','更多会场 >']
	fl.forEach(function (i,v) {	
	var oli="<li><a href='javascript:;'><span>"+i+"</a></li>"
	$('.fixed-top ul').append(oli);
	$('.fixed-top ul li').eq(9).css('background','red')
	})
		//footer相关
	var ql=['关于淘宝','合作伙伴','营销中心','廉正举报','联系客服','开放平台','诚征英才','联系我们','网站地图','法律声明及隐私权政策','知识产权']
ql.forEach(function (i,v) {	
  	var a="<a href='javascript:;'>"+i+"</li>";
		$('.footer-l').append(a)
	})
var l=['  阿里巴巴集团 ',' 淘宝网 ','天猫','聚划算','全球速卖通','阿里巴巴国际加交易市场','1688','阿里妈妈','飞猪','YunOS','阿里通信','一淘','万网','高德','UC','友盟','虾米','大麦网','钉钉','支付宝','优酷','土豆','阿里健康','阿里影业','阿里体育','网上银行'];
l.forEach(function (i,v) {	
  	var a="<a href='javascript:;'>"+i+"</li>";
  	var b="<b>|</b>"
		$('.footer-r').append(a)
		$('.footer-r').append(b)
		$('.footer-r b').eq(l.length-1).css({'display':'none'})
		$('.footer-r b').eq(15).css({'display':'none'})
		
		
	})
	
$(document).ready(function(){//页面刷新可输入
		$("#test").focus();
		if(getCookie('UserName')){//判断cookie是否纯在
			$('.rl').children().hide();
			var spa='<span class="rll"></span><span class="rlr">退出</span>';
		$('.rl').append(spa)
		$('.rll').html(getCookie('UserName'));
		}
});	
	$('.rl').on('click','span',function(){
		delCookie('UserName')
		$('.rl').children().show();
		$('.rl').children('span').hide()
	})
	

//购物传送  。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
	function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');//将cookie值通过逗号拆分为数组。
	}else{
		sidarr=[];
	}
	
	if(getCookie('cartnum')){//存放数量
		numarr=getCookie('cartnum').split(',');
	}else{
		numarr=[];
	}
}
	var num=1	
	var sidarr=[];//存放商品编号（sid）
	var numarr=[];//存放商品数量
	$('.mjcc').on('click','li',function(){
//		alert($(this).find('img').attr('sid'))
		$(this).css({
			'position':'relative'
		})
		abc($(this));		
		var $sid=$(this).find('img').attr('sid');
		var $num=$(this).find('img').attr('title');		
		cookieToArray()
		if($.inArray($sid,sidarr)!=-1){//判断当前的id是否存在于cookie中，如果存在数量累加，否则创建购物车。
			num++;
			numarr[sidarr.indexOf($sid)]=num;//当前的sid的位置，就是你num的位置。先获取sid位置。			
//			alert(num);
			addCookie('cartnum',numarr.toString(),7);//添加到cookie
//				totalprice();
		}else{
			sidarr.push($sid);
		addCookie('cartsid',sidarr.toString(),7);
		numarr.push($num);//将对应的数量添加到数组然后添加到cookie中,因为是第一次创建,数量为1,如果第二次创建走上面if语句.
		addCookie('cartnum',numarr.toString(),7);
		}
	})	
    var oDiv2 = document.getElementById('gouwuche');
	function abc(obj){
		var clonediv =obj.find('img').eq(0).clone(true);
		   obj.append(clonediv)
		   clonediv.css({
		   	'width':'60px',
		   	'height':'50px',
		   	'z-index':'100000',
		   	'bottom':'0px',
		   	'left':'0px',
		   	'background':'red',
		   	'position':'absolute',
		   	'visibility': 'visible',
		   	'overflow': 'hidden'
		   })
        var current = { //克隆div的位置
            x: clonediv.offset().left,
            y: clonediv.offset().top
        }
        var target = { //盒子之间的距离，求x，y
            x:$('#gouwuche').offset().left - current.x,
            y:$('#gouwuche').offset().top - current.y
        }
        var a = 0.001; //自己约定。y=a*x*x+b*x==>b=(y-a*x*x)/x;  数据越小，抛物线越平
        var b = (target.y - a * target.x * target.x) / target.x; //目标,求得b
        var timer = null;
        var x=0;
        timer=setInterval(function(){
        	x+=25;
        	clonediv.css({
        		'left':x,
        		'top':a*x*x+b*x+240,
        		'opacity':0.8
        	})
        	if(x>=target.x){
        		clearInterval(timer);
        		clonediv.remove()
        		$('.fixed-bottom-l').append("<b><b>");
        		$('.fixed-bottom-l').find('b').show()
        	}
        },20)
    }


//$('.input-xia').on('click','.xia-a2',function(){
//			alert($(this).offset().left)
//		abc($(this));	
//		
//		
//})