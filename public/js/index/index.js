var index = {
    el: '.loadHtml',
    // 初始化js
    init: function() {
        // logo和网站名称可移动位置
        $( ".logo,.association_name" ).draggable({ containment: ".logoname", scroll: false });
        this.bindEvent();
    },
    bindEvent: function(){
        var me = this;
        $(this.el).on('click', function(e){
            var target = e.srcElement ? e.srcElement : e.target;
            if ( $('.foot .sel_line .sel').has(target).length > 0 ) {
                return;
            }
            $('.foot .sel_line .sel ul').stop(false, true).slideUp();
        })
        $(this.el).on('click', '.pub_mask', function(e){
            me.top_settings(e);
        })
        .on('click', ' .logo_set_but', function(e){
            me.logo_settings(e);
        })
        .on('change', ' input[name=height]', function(e){
            me.addMoreData(e);
        })
        .on('click', ' .clearMod', function(e){
            me.clearMod(e);
        })
        .on('click', '.association_name .set_hide .hide', function(e){
            me.clearMod(e);
        })
        .on('click', '.logo .set_hide .hide', function(e){
            me.logoDisplay(e);
        })
        .on('click', '.foot .set_hide .hide', function(e){
            me.footDisplay(e);
        })
        .on('click', '.foot .sel_line .sel p', function(e){
            me.footDropDown(e);
        })
        .on('click', '.foot .sel_line .sel li a', function(e){
            me.selectDropDown(e);
        })
        .on('mouseenter', '.field', function(e){
            me.disableLayout(e);
        })
    },
    footDropDown: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(target).siblings('ul').stop(false, true).slideToggle();
    },
    selectDropDown: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var text = $(target).html();
        console.log(text)
        var tpl = text+'<span><i class="fa fa-angle-down"></i></span>';
        $(target).parents('.sel').find('p').html(tpl);
        $(target).parents('ul').stop(false, true).slideUp();
    },
    // 加高数据
    addMoreData: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        if ( $(target).is(':checked') ) {
            if ( $(target).val() == '默认' ) {
                console.log('默认')
                $(target).parents('.field_wra').find('.edi').each(function(idx, ele){
                    if ( $(ele).hasClass('line_1') ) {
                        $(ele).removeClass('line_1').addClass('line_2');
                    }
                    if ( $(ele).hasClass('line_0') ) {
                        $(ele).removeClass('line_0').addClass('line_1');
                    }
                })
            } else if ( $(target).val() == '加高' ) {
                console.log($(target).val() )
                $(target).parents('.field_wra').find('.edi').each(function(idx, ele){
                    if ( $(ele).hasClass('line_1') ) {
                        $(ele).removeClass('line_1').addClass('line_0');
                    }
                    if ( $(ele).hasClass('line_2') ) {
                        $(ele).removeClass('line_2').addClass('line_1');
                    }
                })
            }
        }
    },
    // 换布局，有内容显示不能点击
    disableLayout: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        $(target).parents('.field_wra').find('.edi').each(function (idx, ele) {
            if (!$(ele).hasClass('addMod')) {
                $(target).parents('.field_wra').find('.changeLayout').css({
                    backgroundColor: "#F5F5F5",
                    color: " #ccc",
                    cursor: "default",
                })
                return false;
            } else {
                $(target).parents('.field_wra').find('.changeLayout').css({
                    backgroundColor: "#f5f5f5",
                    color: " #444",
                    cursor: "pointer",
                })
            }
        })
    },
    // 去除模块 - 显示添加栏目
    clearMod: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var addModIcon = '<div class="addModT_sty"><i></i><p>添加栏目</p></div>';
        var parents =  $(target).parents('.edi').parent('.column');
        // 添加到dom上
        $(target).parents('.edi').addClass('addMod').html(addModIcon);

        // 检测是否加高了
        if ( parents.siblings('.edi_line').find('input[value=加高]').is(':checked') ) {
            // 如果去除的是一个多层栏目，高度自动修改
            if ( parents.find('.edi').size() > 1 ) {
                parents.find('.addMod').css('minHeight','280px');
            }else {
                parents.find('.addMod').css('minHeight','600px');
            }
        }else if ( parents.siblings('.edi_line').find('input[value=默认]').is(':checked') ) {
            console.log(parents.find('.edi').size())
            // 如果去除的是一个多层栏目，高度自动修改
            if ( parents.find('.edi').size() > 1 ) {
                parents.find('.addMod').css('minHeight','160px');
            }else {
                parents.find('.addMod').css('minHeight','320px');
            }
        }
    },
    // 页脚显示隐藏
    footDisplay: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        // 说明显示着
        if ($(target).hasClass('on')) {
            $('.sel_line').show();
            $('.sel_line .sel').show();
            $('.sel_line').css({
                'height':'',
            });
            $(target).removeClass('on');
            $(target).html('隐藏');
        } else {
            $('.sel_line').show();
            $('.sel_line .sel').hide();
            $('.sel_line').css({
                'height':'30',
            });
            $(target).addClass('on');
            $(target).html('显示');
        }
    },
    // 网站名称显示隐藏
    webNameDisplay: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 说明显示着
        if ($(target).hasClass('on')) {
            $('.association_name').show();
            $('.association_name p').show();
            $('.association_name').css({
                'height':'',
                'width':'',
            });
            $(target).removeClass('on');
            $(target).html('隐藏');
        } else {
            $('.association_name').show();
            $('.association_name p').hide();
            $('.association_name').css({
                'height':'30',
                'width':'60',
            });
            $(target).addClass('on');
            $(target).html('显示');
        }
    },
    // logo显示隐藏
    logoDisplay: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 说明显示着
        if ($(target).hasClass('on')) {
            $('.logo').show();
            $('.logo img').show();
            $('.logo').css({
                'height':'',
                'width':'',
            });
            $(target).removeClass('on');
            $(target).html('隐藏');
        } else {
            $('.logo').show();
            $('.logo img').hide();
            $('.logo').css({
                'height':'60',
                'width':'60',
            });
            $(target).addClass('on');
            $(target).html('显示');
        }
    },
     // 顶部设置
     top_settings: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        if ($(".bg-1").length < 1) {
            $(".content").append("<div class='bg-1'></div>");
        }
        $(target).parents(".top_show").eq(0).addClass("zIndex14");
     },
      // logo设置
      logo_settings: function(e) {
        $(".right_number_0").show();
        $(".right_alert").stop(false, true).animate({
            "right": "100px"
        });
        e.stopPropagation();
     },
}