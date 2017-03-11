/*
 * 自己的JS脚步
 * @Author: mingming
 * @Date:   2016-10-23
 * @Last Modified by:  mingming
 * @Last Modified time: 2016-10-23
 */


/*
 * 确保页面加载完之后
 */
window.onload=function(){
	search();
	searchKill();
};



$(function(){
	
	/*
	 * 轮播图移动端左右滑动，实现图片切换
	 */
	//1.获取手指在轮播图元素上的滑动方向（左右）
	//	手指触摸开始记录一下手指所在坐标的x坐标
	//	结束触摸一瞬间记录最后的手指所在x坐标
	//	获取界面上的轮播图组件
	var $carousels=$('.carousel');
	var startX;
	var endX;
	//偏移量超过30像素时,才确定为移动了
	var offset=30;
	//注册滑动事件
	$carousels.on('touchstart',function(e){
		startX=e.originalEvent.touches[0].clientX;
	});
	
	
	$carousels.on('touchmove',function(e){
	//	无法获取,因为刚结束触摸的瞬间,对clientX已经没有记录
	//最后得到的是离开瞬间的值
		endX=e.originalEvent.touches[0].clientX;
	});
	
	$carousels.on('touchend',function(e){
			var distance=Math.abs(startX-endX);
			if(distance>offset){
			//2.根据获得到的方向选择上一张或者下一张
			//	方案一:模拟用户点击事件
			//	方案二:使用bt（通过的原生的carousel的方法实现）
			//http://v3.bootcss.com/javascript/#carousel中的Methods
			$(this).carousel(startX>endX?'next':'prev');
			}
	});



});

/*
 * 实现头部搜索栏由透明变有色
 */
//方法
var search=function(){
//	搜索框对象
	var search=document.getElementsByClassName('jd_header_box')[0];
//	banner对象
	var banner=document.getElementById('jd_banner');
	var height=banner.offsetHeight;
	
//	监听事件
	window.onscroll=function()
	{
		var top=document.body.scrollTop;
//		当滚动高度大于banner的高度的时候
		if(top>height){
			search.style.background='rgba(201,21,35,0.85)';
		}else{
//			颜色透明度随,滚动高度而变化
			var op=top/height*0.85;
			search.style.background='rgba(201,21,35,'+op+')';
			
		}
	};
};


/*
 * 秒杀倒计时
 */
//方法
var searchKill=function(){
	var sk_time=document.getElementsByClassName('sk_time')[0];
	/*
	 * span时间
	 */
//		注意
	var time_list=sk_time.getElementsByClassName('num');
	
//	console.log(time_list.length);
//	倒计时四个小时
	var times=4*60*60;
	setInterval(function(){
		times--;
//		向下取整
		var h=Math.floor(times/(60*60));
//		var m=Math.floor(times/60%60);
		var m=Math.floor(times/60)-h*60;
//		取余
		var s=times%60;
//		console.log(h+"-"+m+"-"+s);
		time_list[0].innerHTML=h>10?Math.floor(h/10):0;
		time_list[1].innerHTML=h%10;
		
		time_list[2].innerHTML=m>10?Math.floor(m/10):0;
		time_list[3].innerHTML=m%10;
		
		time_list[4].innerHTML=s>10?Math.floor(s/10):0;
		time_list[5].innerHTML=s%10;
		
	},1000);
};
