Nav('#nav') //导航
Nav('#nav2') //导航
mobileMenu('#gp-menu'); //移动端导航
// SerMax('#searchBtn5','#gp-search4');//移动端
SerMax('#gp-serBtn4', '#gp-search4');
$(function () {
	$(".body_home").addClass("showdiv");
	setTimeout(function () {
		$(".body_home").addClass("s");
	}, 500);
	sameHeight()
});
$(".bb").click(function () {
	$(".body_b").addClass("showdiv");
	$(".header").addClass("mobile");
	setTimeout(function () {
		$(".body_home").removeClass("showdiv");
	}, 500);
})
$(".body_b").scrollTop(0);
$(".body_home").mousewheel(function (event, delta, deltaX, deltaY) {
	if (delta < 0) {
		$(".bb").click();
		// setTimeout(function(){ enterEffects2();}, 500);
	}
});
var sw_k = 1;
document.onkeydown = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if ((e.keyCode == 40 || e.keyCode == 34) && $(".body_home").hasClass("showdiv")) {
		sw_k = 0;
		$(".bb").click();
		$(".body_b").animate({
			scrollTop: 0
		}, 10);
		$(".body_b").focus();
		setTimeout(function () {
			sw_k = 1;
		}, 1000);
	}
	if ((e.keyCode == 38 || e.keyCode == 33) && $(".body_b").hasClass("showdiv") && $(".body_b").scrollTop() == 0) {
		sw_k = 0;
		$(".body_home").addClass("showdiv").focus();
		$(".body_b").removeClass("showdiv");
		if ($(".body_b").css("position") == "fixed") $(".header").removeClass("mobile");
		setTimeout(function () {
			sw_k = 1;
		}, 1000);
	}
}
$(window).scroll(function () {
	if ($(window).width() <= 850) {
		if ($(window).scrollTop() < 50) {
			$(".header").removeClass("mobile")
		} else {
			$(".header").addClass("mobile")
		}
	}
	lazyload();
});
$(".body_b").mousewheel(function (event, delta, deltaX, deltaY) {
	if (delta > 0 && $(".body_b").scrollTop() == 0) {
		$(".body_home").addClass("showdiv");
		$(".body_b").removeClass("showdiv");
		if ($(".body_b").css("position") == "fixed") $(".header").removeClass("mobile");
	}
	if (deltaY > 0) {
		$(".header2").removeClass("lit");
	}
	if (deltaY < 0) {
		$(".header2").addClass("lit");
	}
	lazyload();
});

$(document).on("mousewheel DOMMouseScroll", function (e) {
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
		(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
	if (delta > 0) {
		$('.wrapTop').removeClass('wrapTop1');
	} else if (delta < 0) {
		$('.wrapTop').addClass('wrapTop1');
	}
});

$(function () {
	//头图
	var swiperFlag = false;
	var BannerSwiper = new Swiper('.swiper1', {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		// autoplay: false,
		// loop: true,
		effect: 'fade',
		pagination: {
			el: '.banner .swiper-pagination',
			clickable: true,
		},
		lazy: {
			loadPrevNext: true,
			elementClass: 'swiper-lazy',
			loadOnTransitionStart: true,
		},
		on: {
			slideChange: function (swiper) {
				var _this = $('.swiper1 .swiper-slide').eq(this.activeIndex);
				if (!swiperFlag) {
					swiperFlag = true;
				} else {
					videoSelect(_this);
				}
			}
		}
	})

	videoSelect($('.swiper1 .swiper-slide.swiper-slide-active'));

	function videoSelect(_this) {
		var flag = true;
		var cc = _this.hasClass('ban_video');
		if (cc) {
			BannerSwiper.autoplay.stop();
			var videos = '<video src="' + _this.attr('data-video') + '" autoplay="autoplay" muted class="vv" style="object-fit: cover ;" poster=' + _this.attr('poster-src') + ' playsinline x5-video-player-type="h5" x5-video-orientation="portrait"></video>';
			_this.find('.slick-img').append(videos);
			_this.find('video').bind('ended', function () {
				BannerSwiper.slideNext();
				BannerSwiper.autoplay.start();
			});
		} else {
			$('.vv').remove();
		}
	}
	$('.banner-dots span').click(function () {
		BannerSwiper.autoplay.start();
	})

});



function lazyload() {
	var dom = document.querySelectorAll(".lazy"); // 获取所有的图片
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; // 获取滚动条的高度
	var windowHeight = window.innerHeight; // 获取视口高度
	for (var i = 0; i < dom.length; i++) {
		var imgHeight = $(dom[i]).offset().top; // 每张图片的偏移量
		if (imgHeight < scrollTop + 2 * windowHeight) { // 判断
			(function (i) {
				setTimeout(function () { // 用一个定时器，延迟多少秒后再渲染图片
					if ($(dom[i]).attr("data-src") != "" && $(dom[i]).attr("data-src") != undefined) {
						$(dom[i]).attr("src", $(dom[i]).attr("data-src"));
						$(dom[i]).removeAttr('data-src');
					}
					if ($(dom[i]).attr("data-background") != "" && $(dom[i]).attr("data-background") != undefined) {
						$(dom[i]).css("background-image", "url(" + $(dom[i]).attr("data-background") + ")");
						$(dom[i]).removeAttr('data-background');
					}
				}, 200);
			})(i)
		}
	}
}
window.onload = function () {
	lazyload();
}
$(window).scroll(function () {
	lazyload();
});

// 北科要闻
var USTB_swiper1 = new Swiper('.USTB_swiper1', {
	speed: 1000,
	// delay: 4000,
	// loop:true,
	autoplay: true,
	effect: 'fade',
	allowTouchMove: true,
	watchSlidesProgress: true,
	fadeEffect: {
		crossFade: true
	},
	//   navigation: {
	//      nextEl: '.homea .next',
	//      prevEl: '.homea .prev',
	//    },
	pagination: {
		el: ".mode1 .USTB_dots",
		// clickable: true,
		clickable: !0,
		bulletActiveClass: 'active'
	}
});

// 媒体北科

// 菁彩校园
var USTB_swiper1 = new Swiper('.USTB_swiper3', {
	speed: 1000,
	// delay: 4000,
	// loop:true,
	autoplay: true,
	slidesPerView: 1,
	spaceBetween: 20,
	allowTouchMove: true,
	watchSlidesProgress: true,
	fadeEffect: {
		crossFade: true
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	pagination: {
		el: ".mode3 .USTB_dots",
		// clickable: true,
		clickable: !0,
		bulletActiveClass: 'active'
	}
});

// $('.USTB_list6 li').hover(function(){
// 	$(this).addClass('active').siblings().removeClass('active')
// })
//科学研究
var t2
$('.USTB_list6 li').hover(function (e) {
	var that = $(this)
	t2 = setTimeout(function () {
		that.addClass('active').siblings().removeClass('active')
	}, 300)

}, function () {
	clearTimeout(t2)
})



// $('.USTB_list7').eq(0).find('li:first').addClass('active')
// $('.USTB_list7').eq(1).find('li:last').addClass('active')
//北科人物
var rwHover

// $('.USTB_list7 li').hover(function(e){
// 	var that =$(this)
//    rwHover =  setTimeout(function(){
// 				that.addClass('active').siblings().removeClass('active')
// 		},300)

// },function(){
// 	clearTimeout(rwHover)
// })



// 专题
var USTB_swiper4 = new Swiper('.USTB_swiper4', {
	speed: 1000,
	// delay: 4000,
	// loop:true,
	autoplay: true,
	slidesPerView: 4,
	spaceBetween: 30,
	allowTouchMove: true,
	watchSlidesProgress: true,
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".mode4 .USTB_dots",
		// clickable: true,
		clickable: !0,
		bulletActiveClass: 'active'
	},
	breakpoints: {
		320: { //当屏幕宽度大于等于320
			slidesPerView: 2,
			spaceBetween: 10
		},
		767: { //当屏幕宽度大于等于768 
			slidesPerView: 3,
			spaceBetween: 15
		},
		996: { //当屏幕宽度大于等于996
			spaceBetween: 20
		}
	}

});
// 数字北科
var USTB_swiper5 = new Swiper('.USTB_swiper5', {
	speed: 1000,
	// delay: 4000,
	loop: false,
	autoplay: true,
	slidesPerView: 6,
	spaceBetween: 30,
	allowTouchMove: true,
	watchSlidesProgress: true,
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".mode6 .USTB_dots",
		// clickable: true,
		clickable: !0,
		bulletActiveClass: 'active'
	},
	on: {
		transitionEnd: function () {
			$('.counter').each(function () {
				$(this).countTo().addClass("counted");
			});
		}
	},
	breakpoints: {
		320: { //当屏幕宽度大于等于320
			slidesPerView: 2,
			spaceBetween: 10
		},
		400: { //当屏幕宽度大于等于480
			slidesPerView: 3,
			spaceBetween: 15
		},
		767: { //当屏幕宽度大于等于768 
			slidesPerView: 4,
			spaceBetween: 15
		},
		996: { //当屏幕宽度大于等于996
			spaceBetween: 25,
			slidesPerView: 6
		},
		1320: { //当屏幕宽度大于等于996
			spaceBetween: 30,
			slidesPerView: 6
		}
	}

});
var iWSon = document.documentElement.clientWidth;
if (iWSon < 1200) {
	// 大学区位
	var USTB_swiper5 = new Swiper('.USTB_swiper6', {
		speed: 1000,
		// delay: 4000,
		loop: false,
		autoplay: true,
		slidesPerView: 5,
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: true,
		watchSlidesProgress: true,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".mode7 .USTB_dots",
			// clickable: true,
			clickable: !0,
			bulletActiveClass: 'active'
		},
		on: {
			transitionEnd: function () {
				$('.counter').each(function () {
					$(this).countTo().addClass("counted");
				});
			}
		},
		breakpoints: {
			320: { //当屏幕宽度大于等于320
				slidesPerView: 2,
				spaceBetween: 10
			},
			400: { //当屏幕宽度大于等于480
				slidesPerView: 3,
				spaceBetween: 15
			},
			767: { //当屏幕宽度大于等于768 
				slidesPerView: 4,
				spaceBetween: 15
			},
			996: { //当屏幕宽度大于等于996
				spaceBetween: 25,
				slidesPerView: 5
			},
			1320: { //当屏幕宽度大于等于996
				spaceBetween: 30,
				slidesPerView: 6
			}
		}

	});

} else {
	//大学区位

	var t3
	var that2
	$('.USTB_swiper6 .swiper-slide').hover(function () {
		that2 = $(this)
		t2 = setTimeout(function () {
			$('.USTB_swiper6 .swiper-slide').addClass('siblings')
			that2.addClass('active').siblings().removeClass('active')
		}, 300)

	}, function () {
		$('.USTB_swiper6 .swiper-slide').removeClass('siblings')
		that2.removeClass('active')
		clearTimeout(t2)
	})
}
//北科人物pad端口
$(window).resize(function () {
	var resizeTimer = null;
	if (resizeTimer) clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function () {
		sameHeight()
	}, 100);
})

function sameHeight() {
	var winW = window.innerWidth;
	if (winW > 996) {
		var resHeight = $('.USTB_list6').height();
		$('.USTB_list7').height(resHeight)
		$('.USTB_list7 .swiper-slide').each(function () {
			var sHeight = parseInt((resHeight - 20) / 2)
			$(this).height(sHeight)
		})

	}

}

var winW = window.innerWidth;
// if (winW <= 996) {
// var rwHtml = $('.USTB_list7').html()
// $('.USTB_list7').html('<div class="swiper-wrapper">'+ rwHtml +'</div><div class="USTB_dots"></div>')
// $('.USTB_list7 li').each(function(){
//  $(this).addClass('swiper-slide')
// })
var USTB_swiper15 = new Swiper('.USTB_list7', {
	speed: 1000,
	// delay: 4000,
	// loop:true,
	autoplay: true,
	slidesPerView: 3,
	// loop:true,

	// spaceBetween: 30,
	// effect: 'slide',
	allowTouchMove: true,
	// watchSlidesProgress: true,
	// fadeEffect: {crossFade: true},
	//   navigation: {
	//      nextEl: '.homea .next',
	//      prevEl: '.homea .prev',
	//    },
	pagination: {
		el: ".USTB_list7 .USTB_dots",
		// clickable: true,
		clickable: !0,
		bulletActiveClass: 'active'
	},
	breakpoints: {
		320: { //当屏幕宽度大于等于320
			slidesPerView: 2,
			spaceBetween: 10
		},
		400: { //当屏幕宽度大于等于480
			slidesPerView: 2,
			spaceBetween: 15
		},
		767: { //当屏幕宽度大于等于768 
			slidesPerView: 3,
			spaceBetween: 15
		},
		996: { //当屏幕宽度大于等于996
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerColumn: 2,
			slidesPerColumnFill: 'column', //行布局
			slidesPerGroup: 3
		}


	}
});
// }
// var matchMedia = window.matchMedia('(max-width: 1200px)');
// 	function widthChangeCallback(matchMedia) {
// 	  console.log(matchMedia, '-')
// 	  if(matchMedia.matches) {

// 	  } else {

// 	  }
// 	}
// 	widthChangeCallback(matchMedia)
// 	matchMedia.addEventListener('change', widthChangeCallback);
var counter_flag = true;
$('.body_b').scroll(function () {
	console.log(1)
	var scrollTop = $(this).scrollTop();
	if (scrollTop > $('.mode6 ').offset().top && counter_flag) {
		$('.counter').each(function () {
			$(this).countTo().addClass("counted");
		});
		counter_flag = false;
	}
})



// tab切换
$.fn.extend({
	tab: function (options) {
		var defaults = { //默认参数
			ev: 'mouseover', //默认事件'mouseover','click'
			til: 'h2', //默认标签
			box: '.tab_list', //默认列表
			defaultNum: 0, //默认展示第几个
			eachPage: 1, //每次切换的个数
			delay: 100, //延迟时间
			auto: true, //是否自动切换 true,false
			speed: 8000, //自动切换间隔时间(毫秒)
			init: function () {

			}, //首次加载时触发时间
			before: function () {
				

			}, //切换前触发事件
			after: function () {
			}, //切换后触发事件
			more: true //是否有more,false,true
		};
		var options = $.extend(defaults, options); //用户设置参数覆盖默认参数

		return this.each(function () {
			var o = options;
			var obj = $(this);
			var oTil = obj.find(o.til);
			var oBox = obj.find(o.box);
			var oMore = null;
			var iNum = o.defaultNum;
			var iLen = oTil.length;
			var iBefore = o.before;
			var iAfter = o.after;
			var iEach = o.eachPage;

			// 默认选中第一个
			o.init();
			if (iNum >= 0) {
				change(oTil.eq(iNum));
			}

			//鼠标事件绑定
			oTil.bind(o.ev, function () {
				var _this = this;
				if (o.ev == 'mouseover' && o.delay) {
					_this.timer = setTimeout(function () {
						change(_this);
					}, o.delay);
				} else {
					change(_this);
				};
			})

			oTil.bind('mouseout', function () {
				var _this = this;
				clearTimeout(_this.timer);
			});

			//自动切换效果
			(function autoPlay() {
				var timer2 = null;
				if (o.auto) {
					function play() {
						iNum++;
						if (iNum >= iLen) {
							iNum = 0;
						};
						change(oTil.eq(iNum));
					};
					timer2 = setInterval(play, o.speed);
					obj.on('mouseover', function () {
						clearInterval(timer2);
					})
					obj.on('mouseout', function () {
						timer2 = setInterval(play, o.speed);
					})
				};
			})();

			function change(box) {
				iBefore(iNum, obj);
				// console.log(1);
				iNum = $(box).index() - obj.find(o.til).eq(0).index();

				oTil.removeClass('on').addClass('off');
				oBox.removeClass('on').addClass('off');
				if (o.more) {
					oMore = obj.find('.more');
					oMore.removeClass('on').addClass('off');
					oMore.eq(iNum).addClass('on').removeClass('off');
				};
				oTil.eq(iNum).addClass('on').removeClass('off');
				oBox.slice(iEach * iNum, iEach * (iNum + 1)).addClass('on').removeClass('off');
				iAfter(iNum, obj);
			}

		});
	}
})
