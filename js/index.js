
$(function(){
$(".head-dla").hover(function(){
	if($(this).find("dd").is(":hidden")){
		$(this).find("dd").slideDown(0);
		}else{
		$(this).find("dd").slideUp(0);	
		}						
	})	   

$('.sl6-gbox a').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".sl6-gboxm").find('.sl6-gboxmx').eq($(this).index()).show().siblings().hide();
});	
		   
$(".close").click(function(){
	$(".fbox").hide(0);							
	})	
		   
$(".fboxam span").click(function(){
	$(".fboxa").hide(0);							
	})		   


$(".slw-phe span").click(function(){
   var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},300);
 })
		   
$(".slw-phd-d a").click(function(){
	$(this).toggleClass("on");							
	})	
		   

});


 var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true
  })

 var mySwiper2 = new Swiper('.swiper-container2',{
    pagination: '.pagination2',
    paginationClickable: true,
    slidesPerView: 'auto'
  })
 
 $.showMore(".showmorelist");