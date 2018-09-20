$(function(){
    // 默认加载首页
    $('.loadHtml').html('<div class="lazyload"><div class="donghua">飞速加载中！Loading...</div></div>');
    $('.loadHtml').load('/newpc/index', function(){
        console.log('加载完成');
        $('.lazyload').remove();
    })
    // top_btn
    // 点击保存方案按钮
    $('.decorate_top').on('click', '.saveScheme_but', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(".bg-0,.al_2").fadeIn();
        $(".sea_tab1").addClass("on").siblings("p").removeClass("on");
        $("#save_scheme").addClass("active").siblings(".tab_info").removeClass("active");
        $(".new_programme").focus();
    })
    // 点击载入方案按钮
    $('.decorate_top').on('click', '.loadingScheme_but', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(".bg-0,.al_2").fadeIn();
        $(".sea_tab2").addClass("on").siblings("p").removeClass("on");
        $("#loading_scheme").addClass("active").siblings(".tab_info").removeClass("active");
    })
    // 点击预览按钮
    $('.decorate_top').on('click', '.allView', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        if ( $('.viewing').size() > 0 ) {
            $('body').find('.viewing').removeClass('viewing');
            $('body').find('.page').animate({ marginLeft : 100 });
        }else {
            // 隐藏侧边栏
            $('.bg-0, .bg-1, .bg-2').click();
            $('body').find('.fixed_l_r').addClass('viewing');
            $('body').find('.page').animate({ marginLeft : 0, marginRight: 0 });
            $('body').find('.field_wra').addClass('viewing');
            $('body').find('.edi').addClass('viewing')
            $('body').find('.showBut').addClass('viewing')
            $('.viewing').find('.addMod').addClass('viewing').removeClass('addMod');
        }
    })
    // 发送AJAX保存数据
    function sendAjax(url, json) {
        $.ajax({
            type: "post",
            url: url,
            data: json,
            dataType: "json",
            success: function (e) {
                if (e.code == 0) {
                   common.saveSuccessfull();
                } else {
                    alert("提交失败");
                }
            },
            error: function (e) {
                console.log(e)
                alert("提交失败，连接失败");
            }
        });
    }
    // 点击发布按钮
    $('.decorate_top').on('click', '.publish', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 获得所有数据，发送到后台保存
        var data = {
            isocId: 1,
            "commonjson": {   
                'pageColor': JSON.stringify( beautify.collectionBeauityData()),
            },
            "logojson": JSON.stringify( right_alert.collectionLogo($('.right_number_0'))),
            "titlejson": JSON.stringify( right_alert.collectionTitle($('.right_number_1'))),
            "bannerjson": JSON.stringify( right_alert.collectionColorImgData($('.right_number_2'))),
            "bannerjson": JSON.stringify( right_alert.collectionColorImgData($('.right_number_2'))),
            "footjson": JSON.stringify( right_alert.collectionColorImgData($('.right_number_3'))),
            "topjson": JSON.stringify( right_alert.collectionTop($('.right_number_5'))),
            "slidejson": JSON.stringify( right_alert.collectionSlide($('.right_number_6'))),
            "footjson": JSON.stringify( right_alert.collectionFootInfo($('.right_number_7'))),
            "contentjson": JSON.stringify( save_project.collectionJson($('.right_number_7')))
        }
        console.log(data)
        // sendAjax('http://www.daweiyuan.cn/br-isoc/drag/savejson', data);
    })
    
    // 点击页面左侧按钮
    $('.left_page_nav').on('click', '.pg_t', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 隐藏侧边栏
        $(".left_page_nav").addClass('viewing');
        // 展开中间视图
        $('body').find('.page').animate({ marginLeft : 0 });
        // 显示展开按钮
        $('.left_page_btn a').stop(false, true).animate({
            "left": "-20px"
        })
        // 功能区按钮显示隐藏
        // var left_t = $(target).siblings(".fun_module").css("left");
        // if (left_t == "0px") {
        //     $(target).siblings(".fun_module").stop(false, true).animate({
        //         "left": "-100px"
        //     }, function(){
        //         // 隐藏侧边栏
        //         $(".left_page_nav").stop(false, true).animate({
        //             "left": "-100px"
        //         })
        //     });
        // } else {
        //     $(target).siblings(".fun_module").stop(false, true).animate({
        //         "left": "0"
        //     });
        // };
    })
    // 点击右侧展开按钮
    $('.left_page_btn a').on('click', function(){
        // 显示侧边栏
        $(".left_page_nav").removeClass('viewing');
         // 收起中间视图
         $('body').find('.page').animate({ marginLeft : 100 });
         // 隐藏展开按钮
         $('.left_page_btn a').stop(false, true).animate({
            "left": "-40px"
        })
    })
    // 点击页面左侧按钮
    $('.left_page_nav').on('click', '.fun_module .mod', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(this).addClass('cur').siblings().removeClass('cur');
        var h = document.documentElement.clientHeight || document.body.clientHeight ;
        var winheight = h - $(".all_layout").offset().top;
        if ( $('.zIndex14').size() > 0 ) {
            common.closeAllMtk();
        }
        //点击左侧功能区按钮弹出侧边栏
        $('.bg-2').fadeIn();
        $(".all_layout").stop(false, true).animate({
            "left": "100px"
        }, 500);
        var thisindex = $(this).index();
        $(".wra_lay").stop(false, true).animate({
            top: -thisindex * winheight + "px"
        }, 500, function(){
            $('.all_layout .operation_panel').show();
        });
    })
    
    // 点击页面右侧按钮
    $('.right_page_nav').on('click', '.pg_t', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 隐藏侧边栏
        $(".right_page_nav").addClass('viewing');
        // 展开中间视图
        $('body').find('.page').animate({ marginRight: 0 });
        // 显示展开按钮
        $('.right_page_btn a').stop(false, true).animate({
            "right": "-20px"
        })
         // 页面区按钮显示隐藏
        //  var right_t = $(target).siblings(".pg_n").css("right");
        //  if (right_t == "0px") {
        //      $(target).siblings(".pg_n").stop(false, true).animate({
        //          "right": "-100px"
        //      });
        //  } else {
        //      $(target).siblings(".pg_n").stop(false, true).animate({
        //          "right": "0"
        //      });
        //  }
    })
    // 点击右侧展开按钮
    $('.right_page_btn a').on('click', function(){
        // 显示侧边栏
        $(".right_page_nav").removeClass('viewing');
         // 收起中间视图
         $('body').find('.page').animate({ marginRight: 100 });
         // 隐藏展开按钮
         $('.right_page_btn a').stop(false, true).animate({
            "right": "-40px"
        })
    })
    // 点击页面右侧标签load页面
    $('.right_page_nav').on('click', '.pg_n a', function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var val = $(this).attr('href').substr(1);
        console.log(val)
        $('.loadHtml').html('<div class="lazyload"><div class="donghua">飞速加载中！Loading...</div></div>');
        $('.loadHtml').load('/newpc/'+val, function(){
            console.log('加载完成');
            $('.lazyload').remove();
        })
    })
    // 滑过页面右侧标签load页面
    $('.right_page_nav').on('mouseenter', '.pg_n a', function(e){
        $(this).stop(false,true).animate({left: '-5px'});
    }).on('mouseleave', '.pg_n a', function(e){
        $(this).stop(false,true).animate({left: '0px'});
    })

    // 点击显示新页签
    $('.right_page_nav').on('click', '.pg_n a', function(e){
        // 功能区面板点击显示新页面 通用
       $(this).addClass('active').siblings().removeClass('active');
       var tpl = '';
       var title = $(this).text();
       tpl+= '<a class="on">'+title+'<i class="fa fa-close"></i></a>';

       $('.page_nav a').each(function(idx, ele){
           $(ele).removeClass('on');
           if ( title == $(ele).text() ) {
               $(ele).addClass('on').siblings().removeClass('on');
               tpl = '';
           }
       })
       $('.page_nav').append(tpl);
   })

    // 关闭页签
    $('.page .page_nav').on('click', 'a i.fa', function(e){
        var url = $(this).parent().next().attr('data-url');
        if ( url ) {
            $('.pg_n a[href=#'+url+']').click();
        }
        if ($(this).parents('.page_nav').find('a').size() <= 1 ) {
            // 只剩一个暂时不能关闭
            alert('只剩一个了')
            return;
        }
        $(this).parent().remove();
    })

    // 点击出现设置导航
    $('.loadHtml').on("click", ".nav_set_but a", function () {
        // 显示蒙版和弹窗
        $(".bg-0,.al_1").fadeIn();
        $(".al_1").draggable({
            handle: ".alert_tit",
            containment: ".bg-0",
            scroll: false
        });

        var localNavItemsArr = localStorage.NavItemsArr;
        //如果有localst记录则，按照这个进行排序元素
        if(localNavItemsArr){
                var resNavItemsArr = localNavItemsArr.split(',');
                var NavListUl = $('#b4');
                //li 数组
                for(var i = 0;i < resNavItemsArr.length;i++){
                    var Class = '.al_1 .'+resNavItemsArr[i];
                    if ( resNavItemsArr[i] != '' ) {
                        NavListUl.append($(Class));
                    }
                }
        }
    });
    // 点击出现设置导航外观
    $('.loadHtml').on("click", ".nav_style_but a", function () {
                // 显示蒙版和弹窗
                $(".bg-0,.al_4").fadeIn();
                // 可拖拽窗口
                $(".al_4").draggable({
                    handle: ".alert_tit",
                    containment: ".bg-0",
                    scroll: false
                });
                 // 重载滚动条和拖拽
               $(".al_4 .tab_con").sortable({
                    handle: ".title",
                    containment: ".al_4 .tab_con",
                    stop: function(){
                            //记录sort后的id顺序数组
                            var NavItemsArr = $( ".al_4 .tab_con" ).sortable('toArray');
                            //拖拽后利用localStorage记录顺序
                            localStorage.NavItemsArr = NavItemsArr;
                        }
                });
                $(".al_4 .tab_con").disableSelection();

                $(".al_4 .nav_item").sortable({
                    items: ".handle",
                    connectWith: ".al_4 .nav_item",
                    stop: function(){
                        //记录sort后的id顺序数组
                        var NavItemsArr = $( ".al_4 .tab_con" ).sortable('toArray');
                        //拖拽后利用localStorage记录顺序
                        localStorage.NavItemsArr = NavItemsArr;
                    }
                });
                $(".al_4 .nav_item").disableSelection();

    }).on('click','.al_4 .cancel', function(){
        $(".bg-0,.al_4").hide();
    }).on('click', '.al_4 .sure', function() {
        // 保存数据然后关闭
        $(".bg-0,.al_4").hide();
    });

    // 点击右侧面板，收起下拉框 
    $(document).on("click", ".right_alert", function (e) {
        $(".select_down ol").slideUp();
        e.stopPropagation();
    });
})