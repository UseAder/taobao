

		function cookieToArray(){
			if(getCookie('cartval')){
				Inp=getCookie('cartval').split(',');//将cookie值通过逗号拆分为数组。
			}else{
				Inp=[];
			}
			
		}
			
//改变商品数量--
$('.jian ').on('click', function() {
var $count = $(this).siblings ('input').val();
//  alert($count)
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).siblings ('input').val($count);//input里面的值
//  $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
});
$('.jia').on('click', function() {
    var $count = $(this).siblings ('input').val();
//  alert($count)
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).siblings ('input').val($count);
});

$('input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
//
});

$('.xia-a2').on('click',function(){
	var $num=$(this).parents().siblings().find('input').val();
////			alert($num);
addCookie('cartval',$num,7)
addCookie('cartnum',$num*99,7)
})
