/*
移动端主导航 
例调用：mobileMenu('#gp-menu');
*/
function mobileMenu(id){
  var oMenu = $(id);
	oMenu.find(".gp-menu-header .gp-menu-header-icon").click(function(){
	  	oMenu.find(this).toggleClass("gp-menu-header-icon-click gp-menu-header-icon-out");
	  	$('.mobile_bg').fadeToggle(300)
	  	oMenu.find(".gp-menu-nav").filter('.gp-menu-dropdown1').slideToggle(300);//下拉竖排
	  	oMenu.find(".gp-menu-nav").filter('.gp-menu-dropdown2').slideToggle(300);//下拉横排
      oMenu.find(".gp-menu-nav").filter('.gp-menu-dropdown2').find('ul:first').children('li').find('a.iconfont').attr('href','javascript:void(0)')
	  	// oMenu.find(".gp-menu-nav").filter('.gp-menu-offcanvas1').slideToggle(300);//下拉横排
      $('body').toggleClass('open')
	  });
    $('.mobile_bg').click(function(){
      oMenu.find('.gp-menu-header-icon').toggleClass("gp-menu-header-icon-click gp-menu-header-icon-out");
      oMenu.find(".gp-menu-nav").filter('.gp-menu-dropdown1,.gp-menu-dropdown2').slideToggle(300);
      $(this).fadeToggle(300)
      $('body').removeClass('open');
    })
	  // oMenu.find(".gp-menu-nav > ul > li").each(function( index ) {
	  //   var len = oMenu.find(".gp-menu-nav > ul > li").length;
	  // 	$( this ).css({'transition-delay': (index/len)+0.5+'s'});
	  // });
    oMenu.find(".gp-menu-nav li > ul").each(function() {
      var $this = $(this);
      $this.find('li').each(function(index){
        var len = $this.find('li').length;
        $(this).css({'animation-delay': (index/len)+'s'});
      })
    });
	  oMenu.find('.gp-menu-nav li .gp-menu-arrow').click(function(){
      if($(this).parent('li').hasClass('on')){
      		$(this).next('ul').slideUp(500)
      		$(this).parent('li').removeClass('on')
      	}else{
      		$(this).next('ul').slideDown(500);
      		$(this).parent().siblings().find('ul').slideUp(500)
      		$(this).parent().siblings().removeClass('on')
      		$(this).parent('li').addClass('on')
      	}
	  })
    oMenu.find('.gp-menu-nav').filter('.gp-menu-dropdown2').find('a.icon-down').click(function(){
      if($(this).parent('li').hasClass('on')){
      		$(this).next('ul').slideUp(500)
      		$(this).parent('li').removeClass('on')
      	}else{
      		$(this).next('ul').slideDown(500);
      		$(this).parent().siblings().find('ul').slideUp(500)
      		$(this).parent().siblings().removeClass('on')
      		$(this).parent('li').addClass('on')
      	}
    })
    		
}



// $('.media_list .box').each(function(index) {
// 		$(this).flipbox({
// 			vertical: false
// 		});
// 	}).mouseenter(function() {
// 		$(this).flipbox('next', false);
// 	});
	
	/*
	搜索点击弹出效果 
	例调用：SerMax('#gp-serBtn2','#gp-search2');
	*/
	function SerMax(id,main,close){
	  var serBtn = $(id);
	  var wrapSer = $(main);
	    serBtn.click(function(){
	    	$(this).filter('#gp-serBtn2').fadeOut(300);
	    	$(this).filter('#gp-serBtn3').toggleClass('active');
				$(this).filter('#gp-serBtn3').toggleClass('icon-sousuo','icon-')
	      if($(main).hasClass('no-overlay')){
	        wrapSer.toggleClass('active');
	      }else{
	        serFun ()
	      }
	      
	    })
			// $(close).click(function(){
			// 	serFun ()
			// 	})
				$('.gp-overlay').click(function(){
					serFun ()
					})
	    function serFun (){
				console.log(1)
	      wrapSer.toggleClass('active');
	      if($(wrapSer).hasClass('active')){
	      	$('body').addClass('searchActive');
	      	$('.gp-overlay').fadeIn(300)
	      }else{
	        wrapSer.removeClass('active');
	        $('.gp-overlay').fadeOut(300)
	        $('body').removeClass('searchActive');
	      }
	    }
	  
	  //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
	  //  $(document).click(function(event){
	  // 	 var _con1 = serBtn  // 设置目标区域
	  // 	 var _con2 = wrapSer;  // 设置目标区域
	  // 	 if(!_con1.is(event.target) && _con1.has(event.target).length === 0 && !_con2.is(event.target) && _con2.has(event.target).length === 0){
	  //     wrapSer.removeClass('active')
	  //     $('body').removeClass('searchActive')
	  //     serBtn.delay(300).fadeIn(300)
	  // 	 }
	  // });
	}
	
	/*
	返回顶部
	*/
	$('.body_b').scroll(function(){
	    var docHeight = $(document).height()
	    var winHeight = $(window).height();
	    var scrollTop = $('.body_b').scrollTop();
	   //  if(scrollTop > 1){
	   //  	$('.asideBar').fadeIn(500);
				
				
	   //  }else{
	   //  	$('.asideBar' ).fadeOut(500)
				
	   //  }
	    // if(scrollTop >= docHeight - winHeight){
	    //   $('.gp-goTop-fixed').addClass('bottom')
	    // }else{
	    //   $('.gp-goTop-fixed').removeClass('bottom')
	    // }
	  })
	// var goTopHtml = '<a href="javascript:void(0)" class="gp-goTop gp-goTop-fixed iconfont icon-zhiding"></a>'
	// $(goTopHtml).insertAfter('footer');
	$('.topTop').click(function(){
		$('.body_b').stop().animate({scrollTop:0});
		return false;
	});
	$('.topTop').click(function(){
		$('body,html').stop().animate({scrollTop:0});
		return false;
	});
$('.quickclose').click(function(){
	$('.aside_quicklink').slideDown(500);
	$(this).slideUp(500);
	$('.asideBar').addClass('on')
})	
$('.show_btn').click(function(){
	$('.quickclose').slideDown(500);
	$('.aside_quicklink').slideUp(500);
	$('.asideBar').removeClass('on')
})	
