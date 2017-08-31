$(document).ready(function(){

    $('.main_l ul').on("click","li",function(){
    	$(this).addClass('current').siblings().removeClass('current');
    	var index = $(this).index();
    	$(".b_ul .b_li").eq(index).show().siblings().hide();
    })
    $('.s_ul').on("click",".s_li",function(){
    	$(this).children("p").toggle(100);
    	
    	if($(this).hasClass('more')){
    		$(this).removeClass('more');
    	}else{
    		$(this).addClass('more');
    	}
    })
});