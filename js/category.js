$(function(){
	
	//2.找到需要拉动的box
		var scroll_box=$('.jd_category_left');
	//导航项的字体样式的变化实现
	//1.添加当前类current的样式
	$('.jd_category_left_box li').on('click',function(){
		//2.添加非当前类current的样式
		$('.jd_category_left_box li').removeClass("current");
		console.log(this);
		console.log(this);
		$this=$(this);
		$this.addClass("current");
		
//导航的跳动变化		
//		1.读取当前点击的是哪个导航项，并且计算需要滑动的高度
		var scroll_length=$this.data('num')*42;
//		console.log($this.prop("className"));
//		console.log(scroll_box.prop("className"));
	//3.拉动box
//		console.log("scroll_length:"+scroll_length);
		scroll_box[0].scrollTop=scroll_length;
	});
	
	
	//实现导航条拉动
	var preY;
	var curY;
	
	//注册滑动事件开始
	$('.jd_category_left').on('touchstart',function(e){
		preY=e.originalEvent.touches[0].clientY;

	});
	//移动
	$('.jd_category_left').on('touchmove',function(e){
//	touchend无法获取,因为刚结束触摸的瞬间,对clientY已经没有记录
//最后得到的是离开瞬间的值
	preY=curY;
	curY=e.originalEvent.touches[0].clientY;
	if(preY!=undefined&&curY!=undefined)
	{
		scroll_box[0].scrollTop=scroll_box[0].scrollTop+preY-curY;
		
	}
//		console.log(scroll_box[0].scrollTop);
	});
	$('.jd_category_left').on('touchend',function(e){
		preY=undefined;
		curY=undefined;
	});
});
