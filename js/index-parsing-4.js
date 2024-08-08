var html = '';
$(document).ready(function () {
	
    // 媒体北科
    $.ajax({
        type: "get",
        url: "/_mediafile/bttzd/json/1791272759_1241.json?nocache=" + (new Date()).getTime(),
        //url: "../json/1791272759_1241.json",
        dataType: "JSON",
        success: function (res) {
            html = '';
            $.each(res, function (i, item) { 
                if (i < 4) {
                    html += '<div class="swiper-slide">\n<a target="_blank" class="item_info2" href="' + item.link +
                    '">\n<div class="res_top">\n<div class="resource">\n<img src="https://news.ustb.edu.cn' + item.picurl2 + '" >\n</div>\n<span class="date"><i class="iconfont icon-date"></i>' + item.wbdate.substring(0,10) +
                    '</span>\n</div>\n<h3 class="title gp-f20">' + item.title + 
                    '</h3>\n<div class="gp-img-responsive">\n<img src="https://news.ustb.edu.cn' + item.picurl1 + '" >\n</div>\n</a>\n</div>\n\n';
                }
            });
            console.log(res);
            $('.box1 .USTB_swiper2 .swiper-wrapper').html(html);
            var USTB_swiper2 = new Swiper('.box1  .USTB_swiper2', {
				speed:1000,
				// delay: 4000,
				// loop:true,
				autoplay:true,
				slidesPerView: 2,
				spaceBetween: 20,
				allowTouchMove: true,
				watchSlidesProgress: true,
				fadeEffect: {crossFade: true},
				scrollbar: {
				    el: ".box1 .swiper-scrollbar",
				},
				pagination: {
				 	el: ".mode2 .box1 .USTB_dots",
				 	// clickable: true,
				 	clickable: !0, 
				 	bulletActiveClass: 'active'
				}
	        }); 
        }
    });
		// var USTB_swiper2 = new Swiper('.box2 .USTB_swiper2', {
		// 	speed: 1000,
		// 	// delay: 4000,
		// 	// loop:true,
		// 	autoplay: true,
		// 	slidesPerView: 2,
		// 	spaceBetween: 20,
		// 	allowTouchMove: true,
		// 	watchSlidesProgress: true,
		// 	fadeEffect: {
		// 		crossFade: true
		// 	},
		// 	scrollbar: {
		// 		el: ".swiper-scrollbar",
		// 	},
		// 	pagination: {
		// 		el: ".mode2 .USTB_dots",
		// 		// clickable: true,
		// 		clickable: !0,
		// 		bulletActiveClass: 'active'
		// 	},
		// 	breakpoints: {
		// 		320: { //当屏幕宽度大于等于320
		// 			slidesPerView: 1,
		// 			spaceBetween: 10
		// 		},
		// 		480: { //当屏幕宽度大于等于768 
		// 			slidesPerView: 2,
		// 			spaceBetween: 15
		// 		}
		// 	}
		// });
		
		// 雄安校区动态
		$.ajax({
			type: "GET",
			// url: "js/1791272759_2281.json",
			url: "/_mediafile/bttzd/json/1791272759_2281.json?nocache=" + (new Date()).getTime(),
			dateType: "json",
			jsonp: 'callback',
			success: function (data) {
				// alert(1)
				// console.log("data" + JSON.stringify(data.data[0]))
				var html =
					'<div class="USTB_swiper2 swiper-container-initialized swiper-container-horizontal">' +
					'<div class = "swiper-wrapper" >';
				var list = data;
				for (var i = 0; i < list.length; i++) {
					// alert(list[i].title)
					// html +=
					// '<span class="date"><i class="iconfont icon-date"></i>' + list[i].title +
					// '</span>'
					html +=
						'<div class = "swiper-slide">' +
						'<a target = "_blank"class = "item_info2" href = "' + list[i].link + '" >' +
						'<div class = "res_top" >' +
						'<span class = "date" >' + '<i class = "iconfont icon-date">' +
						'</i>' + list[i].createTime + '</span >' +
						'</div>' +
						'<h3 class = "title gp-f20" >' + list[i].title + '</h3>' +
						'<div class = "gp-img-responsive" >' +
						'<img src = "https://news.ustb.edu.cn' + list[i].picurl1 + '" >' +
						'</div>' +
						'</a>' +
						'</div>'
		
				}
		
		
				html += '</div>' + '<div class="swiper-scrollbar"></div>' + '</div>'
				// $(".box1").html(html);
				$('.box2 .USTB_swiper2 .swiper-wrapper').html(html);
				var USTB_swiper1 = new Swiper('.box2 .USTB_swiper2', {
					speed: 1000,
					// delay: 4000,
					// loop:true,
					autoplay: true,
					slidesPerView: 2,
					spaceBetween: 20,
					allowTouchMove: true,
					watchSlidesProgress: true,
					fadeEffect: {
						crossFade: true
					},
					scrollbar: {
						el: ".box2 .swiper-scrollbar",
					},
					pagination: {
						el: ".mode2 .box2 .USTB_dots",
						// clickable: true,
						clickable: !0,
						bulletActiveClass: 'active'
					},
					breakpoints: {
						320: { //当屏幕宽度大于等于320
							slidesPerView: 1,
							spaceBetween: 10
						},
						480: { //当屏幕宽度大于等于768 
							slidesPerView: 2,
							spaceBetween: 15
						}
					}
				});
		
		
				// console.log(data.createTime)
				// $(".box1").html(
				// 	"<span class='date'><i class='iconfont icon-date'></i> + data.wbdate + </span>"
				// )
			},
			error: function () {
				// alert("获取用户信息失败，请联系管理员！");
			}
		})
		
		$(".mode2 .lf").tab({
			ev: 'click',
			til: '.listTitle h1',
			box: '.tab_box .box',
			// before: beforeTab1,
			// after: afterTab1,
			// init: init1,
			more: true,
			auto: true,
		
			init: function () {
		
			}
		
		
		
		});
    
    // 综合新闻
    $.ajax({
        type: "get",
        url: "/_mediafile/bttzd/json/1791272759_1088.json?nocache=" + (new Date()).getTime(),
        //url: "../json/1791272759_1088.json",
        dataType: "JSON",
        success: function (res) {
            html = '';
            $.each(res, function (i, item) { 
                if (i < 4) {
                    html += '<li><a target="_blank" href="' + item.link +
                    '">\n<h3 class="gp-f20 title">' + item.title +
                    '</h3>\n<span class="date"><i class="iconfont icon-date"></i>' + item.wbdate.substring(0,10) +
                    '</span>\n<i class="bg1"></i>\n</a></li>\n\n';
                }
            });
            $('.USTB_list3').html(html);
        }
    });
    
    // 菁彩校园
    $.ajax({
        type: "get",
        url: "/_mediafile/bttzd/json/1791272759_1126.json?nocache=" + (new Date()).getTime(),
        //url: "../json/1791272759_1201.json",
        dataType: "JSON",
        success: function (res) {
            html = '';
            $.each(res, function (i, item) { 
                if (i < 3) {
                    html += '<div class="swiper-slide">\n<a target="_blank" class="item_info3 " href="' + item.link +
                    '">\n<div class="gp-img-responsive">\n<img src="https://news.ustb.edu.cn' + item.picurl1 +
                    '" >\n</div>\n<div class="item_txt3 gp-white">\n<h3 class="title gp-f20 gp-ellipsis">' + item.title +
                    '</h3>\n<div class="item_bottom3">\n<span class="date"><i class="iconfont icon-date"></i>' + item.wbdate.substring(0,10) +
                    '</span>\n<span class="resource2"><i class="iconfont icon-res1"></i>' + item.wbtreename +
                    '</span>\n</div>\n</div>\n</a>\n</div>\n';
                }
            });
            $('.USTB_swiper3 .swiper-wrapper').html(html);
            var USTB_swiper3 = new Swiper('.USTB_swiper3', {
				speed:1000,
				// delay: 4000,
				// loop:true,
				autoplay:true,
				slidesPerView: 1,
				spaceBetween: 20,
				allowTouchMove: true,
				watchSlidesProgress: true,
				fadeEffect: {crossFade: true},
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
        }
    });
    
    // 科学研究
    $.ajax({
        type: "get",
        url: "/_mediafile/bttzd/json/1791272759_1120.json?nocache=" + (new Date()).getTime(),
        //url: "../json/1791272759_1120.json",
        dataType: "JSON",
        success: function (res) {
            html = '';
            $.each(res, function (i, item) { 
                if (i == 0) {
                    var active = ' class="active"';
                }
                var active = i == 0 ? ' class="active"' : '';
                if (i < 3) {
                    html += '<li'+ active +'><a target="_blank" class="" href="' + item.link +
                    '">\n<div class="gp-img-responsive">\n<img src="https://news.ustb.edu.cn' + item.picurl1 +
                    '" >\n</div>\n<h3 class="gp-f20 title gp-ellipsis">' + item.title +
                    '</h3>\n</a></li++>\n';
                }
            });
            $('.USTB_list6').html(html);
            $('.USTB_list6 li').hover(function(){
                $(this).addClass('active').siblings().removeClass('active')
            })
						sameHeight()
        }
    });
    
    // 导读
    $.ajax({
        type: "get",
        url: "/_mediafile/bttzd/json/1791272759_1087.json?nocache=" + (new Date()).getTime(),
        //url: "../json/1791272759_1087.json",
        dataType: "JSON",
        success: function (res) {
            html = '';
            res.sort((a, b) => {
							// 如果属性值为1，则确保该元素排在数组的最前面
							if(a.wbtop === 1) return -1;
							if(b.wbtop === 1) return 1;
							// 其他情况下按正常顺序排序
							return 0;
						  });

            $.each(res, function (i, item) { 
                if (i < 6) {
                    html += '<li><a target="_blank" href="' + item.link +
                    '">\n<span class="date"><i class="iconfont icon-date"></i>' + item.wbdate.substring(0,10) +
                    '</span>\n<h3 class="gp-f20 title">' + item.title +
                    '</h3>\n</a></li>\n';
                }
            });

            // console.log(res);
            $('.USTB_list1').html(html);
        }
    });
    
    // 北科要闻
    $.ajax({
        type: "get",
        url: "/_mediafile/bttzd/json/1791272759_1154.json?nocache=" + (new Date()).getTime(),
        // url: "js/1791272759_1154.json",
        dataType: "JSON",
        success: function (res) {
            var html1 = '';
						var html2 ='';
						var html3='';
						res.sort((a, b) => {
							// 如果属性值为1，则确保该元素排在数组的最前面
							if(a.wbtop === 1) return -1;
							if(b.wbtop === 1) return 1;
							// 其他情况下按正常顺序排序
							return 0;
						  });
            $.each(res, function (i, item) { 
                if (i == 0) {
										html1 = '<a target="_blank" class="item_img7 gp-img-responsive" href="'+ item.link +'"><img src="https://news.ustb.edu.cn'+ item.picurl1 +'"></a>'
						+'<div class="item_txt7 gp-f20 gp-ellipsis">'
							+'<a target="_blank" href="'+ item.link +'">'+ item.title +'</a>'
						+'</div>'
										html3 += '<li>'
											+'<a target="_blank" class="item_info8" href="'+ item.link +'">'
												+'<div class="gp-img-responsive">'
													+'<img src="https://news.ustb.edu.cn'+ item.picurl1 +'">'
												+'</div>'
												+'<div class="item_txt8 gp-f20">' + item.title + '</div>'
											+'</a>'
										+'</li>'
                }
								
								if(i > 0 &&i < 4){
									html2 += '<li>'
										+'<a target="_blank" class="item_info8" href="'+ item.link +'">'
											+'<div class="gp-img-responsive">'
												+'<img src="https://news.ustb.edu.cn'+ item.picurl1 +'">'
											+'</div>'
											+'<div class="item_txt8 gp-f20">' + item.title + '</div>'
										+'</a>'
									+'</li>'
								}
							
								
            });
            // console.log(html);
            $('.item_info7').html(html1);
            $('.USTB_list8 ').html(html2);
						var winW = window.innerWidth;
						if (winW <= 996) {
							 $('.USTB_list8 ').html('<div class="swiper-wrapper">'+ html3 + html2 +'</div><div class="USTB_dots"></div>')
							 $('.USTB_list8 li').each(function(){
								 $(this).addClass('swiper-slide')
							 })
							 var USTB_swiper11 = new Swiper('.USTB_list8', {
							 		speed:1000,
							 		// delay: 4000,
							 		// loop:true,
							 		autoplay:true,
							 		effect: 'fade',
							 		allowTouchMove: true,
							 		watchSlidesProgress: true,
							 		fadeEffect: {crossFade: true},
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
						}
    
        }
    });

});
