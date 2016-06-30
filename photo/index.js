
$(function(){
	//移动的小圆球
	for(var i=0;i<50;i++){
		var w=Math.floor(Math.random()*50+10);
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var c=$('<div>').addClass('circle').addClass(function(){
			if(Math.random()>0.5){
				return 'zuo';
			}else{
				return 'you'
			}
		}).width(w).height(w).css({
			top:Math.floor(Math.random()*400),
			left:Math.floor(Math.random()*800),
			background:'rgba('+r+','+g+','+b+',0.8)'
		});
		$('.bu').append(c);
	}
	//点击小圆点收集
	$('.bu .circle').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('secected');
		$(this).toggleClass('del');
		if($(this).hasClass('secected')){
			$(this).data('color',$(this).css('background'));
			$(this).css('background','black');
			
		}else{
			$(this).css('background',$(this).data('color'));
		}
	})
	//拖拽
	// $('.bu .circle').on('mousedown',function(e){
	// 	e.preventDefault();
	// 	var 
	// })
	$(document).on('keydown',function(e){
		if(e.keyCode===13){
			$('.secected').appendTo('.bu .hezi');
		}
		if(e.keyCode===46){
			// $('.secected').attr('style',{width:0,height:0})
			$('.del').detach();
		}
		if(e.keyCode===37){
			$('.bu .zuo').wrap("<div class='wrap'></div>");
			$('.bu .wrap').each(function(){
				var circle=$(this).find('.zuo');
				var pos=circle.position();
				circle.css({
					top:0,
					left:0
				});
				$(this).css({
					width:circle.width(),
					height:circle.height(),
					top:pos.top,
					left:pos.left
				})
			})
		}
	})

	//换一批图片
	var xiayipi=[
		{img:"9.jpg",link:"http://www.baidu.com"},
		{img:"10.jpg",link:"www.soho.com"},
		{img:"11.jpg",link:"www.10086.com"},
		{img:"12.jpg",link:"www.163.com"},
		{img:"13.jpg",link:"www.qq.com"},
		{img:"14.jpg",link:"www.baidu.com"},
		{img:"15.jpg",link:"www.baidu.com"},
		{img:"16.jpg",link:"www.baidu.com"}
	];
	$('.box .button').on('click',function(){
		$('.box img').attr('src',function(i,el){
			return xiayipi[i].img;
		});
		$('.box a').attr('href',function(i,el){
			return xiayipi[i].link;
		});
	});

	//相册
	$('.box li').on('click',function(e){
		e.preventDefault();//阻止默认时间（a链接会自动跳到顶部）
		$('.zhezhao').addClass('show');
		$('.zhezhao').attr('index',$(this).index());
		$('.zhezhao img').attr('src',$(this).find('img').attr('src'));

		// //设置图片大小
		// var img=$(this).find('img');
		// var x=img.width()/img.height()*$(window).outerWidth();
		// if(x<$(window).outerWidth){
		// 	$('.zhezhao img').width(x);
		// }
	})

	$('.box .close').on('click',function(e){
		$('.zhezhao').removeClass('show');
	})
	var imgs=$('.box img');
	$('.zhezhao').on('mousedown',function(e){
		e.preventDefault();
	})
	$('.zhezhao').on('click',function(e){
		$('.zhezhao .tishi').removeClass('xianshi');
		var index=parseInt($(this).attr('index'));
		if(e.clientX>$(this).outerWidth(true)/2){
			index+=1;
		}else{
			index-=1;
		}
		if(index===imgs.length-1){
			// $('.zhezhao img').attr('src','');
			$('.zhezhao .tishi').addClass('xianshi');
			$('.zhezhao .tishi span').replaceWith('<span>已经是最后一张了</span>');
			setTimeout(function(){
				$('.zhezhao .tishi').removeClass('xianshi');
			},2000);
			return;
		}
		if(index==-1){
			// $('.zhezhao img').attr('src','');
			$('.zhezhao .tishi').addClass('xianshi');
			$('.zhezhao .tishi span').replaceWith('<span>已经是第一张了</span>');
			setTimeout(function(){
				$('.zhezhao .tishi').removeClass('xianshi');
				// $('.zhezhao').attr('index',index);
				// $('.zhezhao img').attr('src',imgs.eq(index).attr('src'));
				// // $('.zhezhao').removeClass('show');
			},2000);
			return;
		}
		$('.zhezhao').attr('index',index);
		$('.zhezhao img').attr('src',imgs.eq(index).attr('src'));
		 //eq是一个筛选过滤器。表示从对象中寻找某一个属性
		//  //设置图片大小
		// var img=imgs.eq(index);
		// var x=img.width()/img.height()*$(window).outerWidth();
		// if(x<$(window).outerWidth){
		// 	$('.zhezhao img').width(x);
		// }
	})

})