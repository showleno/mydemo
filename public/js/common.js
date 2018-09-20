
    var common = {
        initJs: function(){
            this.pageNav();
            this.tabNav();
            this.planRename();
            this.changeLayout();
            this.dragInit();
            this.addLine();
            this.autoHeight();
            this.closeAllMtk();
            this.alert_size();
            this.virtualDropDown();
            // this.packUp();
            this.deleteMod();
            // this.addLine2Layout();
            this.copyLayout();
            this.addLayoutLine();
            this.allBackgroundPosition();
            this.modMoveDown();
            this.modMoveUp();
            this.addHeightSize();
            this.pubmask();
            this.clickSettings();
            this.showAllStyle();
            this.changefootStyle();
            this.chooseStyle();
            this.allKeyUpColor();
            this.ModRename();
            this.showModName();
            this.renameLink();
            this.MtkcloseBtn();

            // 效果联动
            this.preview();
            this.allPopUp();
            // 拖拽时阻止点击事件
            this.dragingNoneClick();

        },
        preview: function(){
            // 效果联动
            // logo图片
            this.updateLogo(".upLogo input", 'right_number_0', '.logo img');
            this.width('.logo_modify_input .width', 'right_number_0', '.logo');
            this.displayBase('.changeDisplay ol li', 'right_number_0', '.logo img');
            this.clearImgFile('.right_number_0 .upImg_but .clearLogo', 'right_number_0', '.logo img');
            this.height(".logo_modify_input input", 'right_number_0', '.logo');

            // 网页名称
            this.editText(".editText ", 'right_number_1', '.association_name p');
            this.fontStyle(".select_down ol li", 'right_number_1', '.association_name p');
            this.displayBase('.select_down ol li', 'right_number_1', '.association_name p');

            // 页标
            this.height(".modify_height", "right_number_2", ".logoname");
            this.setWidth("right_number_2", ".logoname");
            this.height(".changeHeight input", "right_number_2", ".logoname");
            this.marBottom(".modify_marBot", "right_number_2", ".logo_line");
            this.marBottom(".changeMbot input", "right_number_2", ".logo_line");
            this.updateImgFile(".up_but input", 'right_number_2', '.logoname');
            this.clearImgFile('.right_number_2 .up_but .eliminate', 'right_number_2', '.topBack');
            this.displayColorOrImg('.changeDisplay ol li', 'right_number_2', '.logoname', '.right_number_2 .change_color input', '.right_number_2 .show_img .img')

            // 页尾
            this.height(".modify_height", "right_number_3", ".foot");
            this.setWidth("right_number_3", ".foot");
            this.marTop('.modify_marTop', "right_number_3", ".footer");
            this.displayBase('.changeDisplay ol li', 'right_number_3', '.footer .footer_0');
            // this.editText(".editText ", 'right_number_7', '.record_0 p:first-child');

            // 页头
            this.displayColorOrImg('.changeDisplay ol li', 'right_number_5', '.topBack', '.right_number_5 .change_color .addColor', '.right_number_5 .show_img .img')
            this.setWidth("right_number_5", ".topBack");
            this.height(".modify_height", "right_number_5", ".topBack");
            this.height(".modify_height", "right_number_5", ".topBack");
            this.marBottom(".modify_marBot", "right_number_5", ".topLab");
            this.marBottom(".modify_marBot", "right_number_5", ".topLab");
            this.updateImgFile(".up_but input", 'right_number_5', '.topBack');
            this.clearImgFile('.right_number_5 .up_but .eliminate', 'right_number_5', '.topBack');

            // 轮播图设置
            this.setWidth("right_number_6", ".fullSlide");
            this.height('.logo_modify_input .modify_height', "right_number_6", ".L_1");
            this.marTop('.modify_marTop', "right_number_6", ".full")
            this.marBottom(".modify_marBot", "right_number_6", ".full");
            // this.displayBase('.changeDisplay ol li', 'right_number_6', '.L_1');

            // 美化面板
            this.clearImgFile('.beautify .up_but .eliminate', 'beautify', '.nav_line');
        },
        // 颜色值输入时触发联动
        allKeyUpColor: function(){
            // top文字颜色
            this.keyUpColor('.top_colorwell_1', '.right_number_5', '.top_font_color', 'color');
            // top背景颜色
            this.keyUpColor('.top_colorwell_0', '.right_number_5', '.topBack', 'backgroundColor');
            // top按钮颜色
            this.keyUpColor('.top_colorwell_2', '.right_number_5', '.deputy_bg_color', 'backgroundColor');

            // 页头背景颜色
            this.keyUpColor('.colorwell3', '.right_number_2', '.logoname', 'backgroundColor');
            // 页脚背景颜色
            this.keyUpColor('.colorwell4', '.right_number_3', '.footer','backgroundColor');
            // 页脚文字颜色
            this.keyUpColor('.colorwell7', '.right_number_7', '.record_0 p', 'color');

            // 美化面板  模块标题边框色
            this.keyUpColor('.color_radio_0', '.beautify', '.bot_main_color', 'borderBottomColor');
            // 美化面板  模块标题背景色
            this.keyUpColor('.color_radio_0', '.beautify', '.main_color', 'backgroundColor');
            // 美化面板  网站所有按钮背景色
            this.keyUpColor('.color_radio_1', '.beautify', '.deputy_bg_color', 'backgroundColor');
            // 美化面板  导航栏目背景色
            this.keyUpColor('.color_radio_2', '.beautify', '.nav_bg_color', 'backgroundColor');
            // 美化面板  导航栏目文字色
            this.keyUpColor('.color_radio_3', '.beautify', '.nav_text_color', 'color');
            // 美化面板  网站body背景色
            this.keyUpColor('.color_radio_4', '.beautify', '.frame', 'backgroundColor');
        },
        // 颜色值输入时联动元素颜色
        keyUpColor: function(element, parent, changeDom, type){
            $(parent).on('input',element, function(){
                    $(changeDom).css(type, $(element).val());
            })
        },
        allPopUp: function(){
            // 所有弹出框
            // 公司名称设置按钮
            this.popUp('.name_set_but', '.right_number_1', '.right_alert', {
                "right": "0px"
            });
            // 设置抬头按钮
            this.popUp('.set_rise', '.right_number_2', '.right_alert', {
                "right": "0px"
            });
            // 顶部设置按钮
            this.popUp('.top_set', '.right_number_5', '.right_alert', {
                "right": "0px"
            });
            // 底部设置按钮
            this.popUp('.footBut .bottom_set', '.right_number_3', '.right_alert', {
                "right": "0px"
            });
            // 底部信息设置按钮
            this.popUp('.footBut_info .bottom_set', '.right_number_7', '.right_alert', {
                "right": "0px"
            });
            // // 底部风格按钮
            // this.popUp('.footBut .bottom_style', '.right_number_8', '.right_alert', {
            //     "right": "0px"
            // });
            // 添加栏目 -> 选择模块
            this.popUp('.addMod', '.right_number_4', '.right_alert', {
                "right": "0px"
            })
            // 轮播图设置按钮
            this.popUp('.slide_set', '.right_number_6', '.right_alert', {
                "right": "0px"
            })
            //  添加轮播图
            this.popUp('.addSlide', '.right_number_6', '.right_alert', {
                "right": "0px"
            }, function(){
                $('.line_num a:first-child').click();
            })
        },
        
        // 图片定位联动
        allBackgroundPosition: function(){
            this.backgroundPositionNew('#beautify .column_upload .bg_position input[name=bj_img_posi]','.nav_line');
            this.backgroundPositionNew('#beautify .bg_upload .bg_position input[name=bj_img_posi]','.frame');
            this.backgroundPositionNew('.right_number_2 .bg_position input[name=bj_img_posi]','.logoname');
            this.backgroundPositionNew('.right_number_3 .bg_position input[name=bj_img_posi]','.footer');
            this.backgroundPositionNew('.right_number_5 .bg_position input[name=bj_img_posi]','.topBack');
        },
        saveSuccessfull: function(){
            $(".save_information").fadeIn(function () {
                $(".save_information").show()
                setTimeout(function () {
                    $(".save_information").fadeOut();
                    $(".save_information").hide()
                }, 3000);
            });
        },
        // 轮播图
        picimg: function(obj) {
            obj.slide({
                    titCell: ".hd ul",
                    mainCell: ".bd ul",
                    effect: "left",
                    autoPlay: true,
                    autoPage: true,
                    trigger: "click",
                    startFun: function (i) {
                        var curLi = obj.find(".bd li").eq(i);
            
                        if (!!curLi.attr("_src")) {
                            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src");
                        };
                        if (!!curLi.attr("_title")) {
                            obj.find(".tit").text(curLi.attr("_title"));
                        };
                    }
                });
        },
        // 拖拽的时候阻止点击
        dragingNoneClick: function(){
            
            var me = this;
            var lock = 0;
            var interval = null;

            $('body').on('mousedown',function(e){
                clearInterval(interval)
                    lock = 0;
                    interval = setInterval(function () {
                        lock ++ ;
                    }, 100);
            }).on('mouseup', function(e){
                var target = e.srcElement ? e.srcElement : e.target;
                clearInterval(interval)
                if ( $(target).hasClass('drag') ) {
                    if ( e.button == 0 ) {
                        if ( lock >= 2 ) {
                            $(target).on('click', function(e){
                                me.stopBubble(e)
                            })
                        }else {
                            $(target).off('click')
                         }
                    }
                 }
            })
        },
        // 弹出右侧编辑框
        popUp: function(eventDom, obj1, obj2, cssObj, fn) {
            $('body').on("click", eventDom, function (e) {
                var target = e.srcElement ? e.srcElement : e.target;
                $(obj1).show();
                $(obj2).stop().animate(cssObj);
                // 如果点击的是添加模块
                if ( $(eventDom).hasClass('addMod') ) {
                    $('.bg-2').show();
                    // 去掉上一个正在编辑的布局
                    $(' .edi').removeClass('editing');
                    // 标记正在编辑的布局
                    $(this).addClass('editing');
                    $(this).addClass('zIndex14');
                    // 清空选中的模块
                    $('.mod_all input').removeAttr('checked');
                }
                // 执行回调函数
                fn && fn();
            });
        },
        // 共同方法 - 图片定位按钮
        backgroundPositionNew: function(element, changedDom) {
            $('body').on('click', element,function(e){
                var target = e.srcElement ? e.srcElement : e.target;
                $(target).parent().addClass("on").siblings().removeClass("on");
                if ($(target).parent().hasClass('posi_top') && $(target).is(':checked')) {
                    // console.log('我是上')
                    $(changedDom).css('backgroundPosition', 'top center')
                } else if ($(target).parent().hasClass('posi_middle') && $(target).is(':checked')) {
                    // console.log('我是中')
                    $(changedDom).css('backgroundPosition', 'center center')
                } else if ($(target).parent().hasClass('posi_bottom') && $(target).is(':checked')) {
                    // console.log('我是下')
                    $(changedDom).css('backgroundPosition', 'bottom center')
                }
            })
        },
        // 共同方法 - 图片重复按钮
        backgroundRepeatNew: function(element, changedDom) {
            $('body').on('click', element,function(e){
                var target = e.srcElement ? e.srcElement : e.target;
                var thisText = $(target).html();
                $(target).parents("ul").siblings("span").children("em").html(thisText);
                $(target).parents("ul").siblings("input[type='hidden']").val(thisText);
                $(target).parents("ul").slideUp();
                console.log($(target).attr('data-repeat'))
                if ($(target).attr('data-repeat') == 'no-repeat') {
                    // console.log('我是不重复')
                    $(changedDom).css('backgroundRepeat', 'no-repeat')
                } else if ($(target).attr('data-repeat') == 'repeat-x') {
                    // console.log('我是水平重复')
                    $(changedDom).css('backgroundRepeat', 'repeat-x')
                } else if ($(target).attr('data-repeat') == 'repeat-y') {
                    // console.log('我是垂直重复')
                    $(changedDom).css('backgroundRepeat', 'repeat-y')
                } else if ($(target).attr('data-repeat') == 'repeat') {
                    // console.log('我是填充')
                    $(changedDom).css('backgroundRepeat', 'repeat')
                }
            })
        },
        // 点击添加新布局按钮
        addLine: function(){
            $('.loadHtml').on('click', '.addLine', function(){
                // 触发点击事件，弹出左侧布局栏
                $('.mod.layout_but').click();
            })
        },
        // 计算栏目标题宽度
        pageNav: function(){
            //   分页tab栏目宽度计算
            var top_nav = $(".page_nav");
            var top_nav_child = $(".page_nav a");
            var top_nav_length = top_nav_child.length;
            var top_nav_width = top_nav_child.outerWidth();
            var page_nav_width = top_nav.width();

            if (top_nav_length * top_nav_width > page_nav_width) {
                top_nav_child.width(100 / top_nav_length + "%");
            } else {
                top_nav_child.removeAttr("style");
            }
        },
        // 通用编辑面板tab选项卡效果
        tabNav: function(){
            $(".line_num a").on("click", function () {
                var tab = $(this).attr("tab");
                $(this).addClass("on").siblings().removeClass("on");
                if (tab == "0") {
                    $(this).parent().siblings(".line_con").stop(false, true).animate({
                        "left": "0"
                    });
                } else if (tab == "1") {
                    $(this).parent().siblings(".line_con").stop(false, true).animate({
                        "left": "-214px"
                    });
                }
            });
        },
        removeClass: function(element, className){
            if ( className == void 0 ) {
                $('.'+element).removeClass(element);
                return;
            }
            $('.'+element).removeClass(className);
        },
        hideDom: function(element){
            $(element).hide();
        },
        // 弹窗的关闭按钮
        MtkcloseBtn: function(){
            var me = this;
            $('.bg-0').on('click', '.post_cancel', function(){
                me.hideDom('.alert_set, .bg-0');
                $('.bg-1').remove();
                me.removeClass('changing');
                me.removeClass('zIndex14');
            })
        },
        // 点击背景蒙版关闭所有弹窗
        closeAllMtk: function(){
            var me = this;
            $('body').on("click",'.bg-2,.bg-1',function (event) {
                var e = window.event || event;
                var target = e.srcElement ? e.srcElement : e.target;
                event.stopPropagation();
                $(this).hide();
                // 点击模态框就去除正在修改classname
                me.removeClass('changing');
                me.removeClass('editing');
                me.removeClass('layoutAdding');

                $(".all_layout").stop(false, true).animate({
                    "left": "-220px"
                }, 500); 
                $('.right_alert').stop(false,true).animate({
                    "right": "-220px"
                },500, function () {
                    $(".right_alert .operation_panel").hide();
                });
                $(".sel ul,.chenga_name,.select ol,.select_down ol").slideUp();
                $(".bg-1").remove();

                me.removeClass('zIndex14');
                me.removeClass('mod', 'cur');
            
            });
        },
        // 模拟下拉框效果
        virtualDropDown: function(){
            // 点击通用自定义下拉框 - 共享
            $(document).on("click", ".select_down > p", function (e) {
                // $(this).siblings("ol").slideToggle();
                e.stopPropagation();
            });
            $(document).on("click", ".select_down ol li", function () {
                var this_text = $(this).text();
                $(this).parent().siblings("p").html(this_text + '<i class="fa fa-caret-down"></i>');
                $(this).parent().siblings("input").val(this_text);
                $(this).parent().slideUp();
            });
        },
        getHeight: function(){
            // 获取高度
            var height = document.documentElement.clientHeight || document.body.clientHeight;
            var topH = 70;
            var titH = 40;
            var minus_topH = height - topH;
            var minus_topH_titH = height -  ( topH + titH );
            return {
                bodyHeight: height,
                mainH:  minus_topH,
                loadHtmlH: minus_topH_titH
            }
        },
        autoHeight: function(){
            // 动态改变 页面高度
            $('.page, .main_wrap, .all_layout, .operation_panel').height(this.getHeight().mainH);
            $('.loadHtml').height(this.getHeight().loadHtmlH);
            $(".right_alert .out, .right_alert .scrollbar").height($(window).height() - 240 + "px");
            $(".beautify .out, .beautify .scrollbar,.all_layout .out, .all_layout .scrollbar").height($(window).height() - 203 + "px");
            var me = this;
            $(window).resize (function(){
                $('.page, .main_wrap, .all_layout, .operation_panel').height(me.getHeight().mainH);
                $('.loadHtml').height(me.getHeight().loadHtmlH);
                $(".right_alert .out, .right_alert .scrollbar").height($(window).height() - 203 + "px");
                $(".beautify .out, .beautify .scrollbar,.all_layout .out, .all_layout .scrollbar").height($(window).height() - 203 + "px");
            })
        },
        showModName: function(){
            // 点击模块更名，显示可编辑名称
            $(document).on("click", ".mod_edi_but ol li .on", function () {
                $(this).siblings("p").slideToggle();
            });
        },
        showEditMod: function(){
            // 鼠标经过显示编辑层，离开隐藏编辑层
            $(".content").on("mouseenter mouseleave", ".field .edi", function (e) {
                if (e.type == "mouseleave") {
                    $(this).find(".chenga_name_sel").hide();
                }
            });
        },
        // 更名词联动
        renameLink: function(){
            $('.loadHtml').on('keyup', '.chenga_name input[type=text]', function(){
                var text = $(this).val();
                $(this).parents('.mod_edi_but').siblings('.list_box').find('.list_hd').html(text);
            })
        },
        displayColorOrImg: function(eventDom, className, obj1, colorObj2, imgObj3){
            var me = this;
            $(document).on("click", eventDom, function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(className)) {
                    if ($(this).parent().siblings('input').hasClass('colorDoesShow')) {
                        console.log(1111)
                        me.displayColor(className, obj1, colorObj2, $(this).text())
                    } else {
                        me.displayImg(className, obj1, imgObj3, $(this).text())
                    }
                }
            })
        },
        stopBubble: function(e){
            if(e.stopPropagation){
                e.stopPropagation();
            }else if(e.cancleBubble){
                e.cancleBubble = true;
            }
        },
        cancelHandler: function(e){
            if(e.preventDefault){
                e.preventDefault();  //方法2 W3C   IE9以下不兼容
            }else{
                e.returnValue = false;  //方法3  兼容IE
            }
        },
        ModRename: function(){
            var me = this;
            // 点击布局模块更名，显示编辑框
            $(document).on("click", ".chenga_name_sel span", function (e) {
                var thisText = $(this).text();
                $(this).parents("ol").siblings(".chenga_name").slideDown(function () {
                    $(this).children("input").focus();
                }).children("input").val(thisText);
                    $(this).parent().hide();
                    me.stopBubble(e);
            }).on("click", ".chenga_name", function (e) {
                    me.stopBubble(e);
            });  
        },
        addHeightSize: function(){
            // 鼠标经过给默认和加高增加name=height
            $(".loadHtml").on("mouseenter mouseleave", ".field", function (e) {
                if (e.type == "mouseenter") {
                    $(this).find("input[type='radio']").attr("name", "height");
                } else {
                    $(this).find("input[type='radio']").removeAttr("name");
                }
            });
            // 更名
            $(document).on('click', '.chenga_name > a', function (e) {
                if ($(this).html() == '确定') {
                    // 发送ajax
                    
                    // 回调关闭编辑框renameLink
                    $(this).parents('.mod_edi_but').siblings('.list_box').children('.list_hd').html($(this).parent('.chenga_name').children('input').val());
                    $('.chenga_name_sel').hide();
                    $('.chenga_name').hide();
                    
                } else if ($(this).html() == '取消') {
                    // 关闭编辑框
                    // chenga_name_sel 和 chenga_name 隐藏
                    $('.chenga_name_sel').hide();
                    $('.chenga_name').hide();
                }
            })
            $(document).on('click', '.mod_edi_but  .on', function (e) {
                var text =  $(this).parents('.moveMod').find('.list_hd').html();
                $(this).siblings('.chenga_name_sel').find('span').html(text);
            })
        },
        copyLayout: function(){
            var me = this;
            // 复制布局
            $(".content").on("click", ".layout .copy_layout", function () {
                $(this).parents(".edi_line").find("input[type='radio']").attr("name", "");
                var lab_html = $(this).parents(".field").html();
                $(this).parents(".wra_width980").after("<div class='wra_width980 field_wra' type='field'><div class='field'>" + lab_html + "</div></div>");
                var nextObj = $(this).parents(".wra_width980").next().find(".L_2");
                me.picimg(nextObj);
                
            });
        },
        addLayoutLine: function(){
            // 新增布局
            $("body").on("click", ".new_layout", function () {
                var new_field = "";
                new_field += '<div class="wra_width980 field_wra " type="field">';
                new_field += '<div class="field">';
                new_field += '<div class="wid240">';
                new_field += '<div class="line_1 edi addMod" DR_drag="1" DR_replace="1">';
                new_field += '<div class="addModT_sty">';
                new_field += '<i></i>';
                new_field += '<p>添加栏目</p>';
                new_field += '</div><i class="drag"></i></div></div>';
                new_field += '<div class="wid480">';
                new_field += '<div class="line_1 edi addMod" DR_drag="1" DR_replace="1">';
                new_field += '<div class="addModT_sty">';
                new_field += '<i></i>';
                new_field += '<p>添加栏目</p>';
                new_field += '</div><i class="drag"></i></div></div>';
                new_field += '<div class="wid240">';
                new_field += '<div class="line_1 edi addMod" DR_drag="1" DR_replace="1">';
                new_field += '<div class="addModT_sty">';
                new_field += '<i></i>';
                new_field += '<p>添加栏目</p>';
                new_field += '</div><i class="drag"></i></div></div>';

                new_field += '<div class="edi_line">';
                new_field += '<div class="layout_set">';
                new_field += '<div class="layout"><p class="new_layout"><i class="fa fa-plus"></i>新增布局</p><p class="copy_layout"><i class="fa fa-files-o"></i>复制布局</p></div>';
                new_field += '<div class="up_down"><p class="up"><i class="fa fa-arrow-up"></i></p><p class="down"><i class="fa fa-arrow-down"></i></p></div>';
                new_field += '</div>';
                new_field += '<div class="lay_hei">';
                new_field += '<div class="hei_set">';
                new_field += '<span>高度:</span>';
                new_field += '<label><input type="radio" name="" checked><i></i>默认</label>';
                new_field += '<label><input type="radio" name=""><i></i>加高</label>';
                new_field += '</div>';
                new_field += '<div class="lay_but"><p class="changeLayout">换布局</p><p  class="delMod">删除</p></div>';
                new_field += '</div></div></div></div>';

                $(this).parents(".field_wra").after(new_field);
            });
        },
        clearMod: function(){
            // 清除模块
            $(document).on('click', '.clearMod', function () {
                var addModIcon = '<div class="addModT_sty"><i></i><p>添加栏目</p></div>';
                $(this).parents('.line_1.edi').addClass('addMod').html(addModIcon);
            })
        },
        modMoveDown: function(){
            // 模块下移
            $(".content").on("click", ".down", function () {
                var parHtml = $(this).parents(".field_wra");
                var parIndex = parHtml.index();
                var childLength = $(this).parents(".content").children("[type='field']").length;
                var nextObj = parHtml.next().html();
                var thisObj = parHtml.html();

                if (parIndex != childLength - 1) {
                    parHtml.html(nextObj);
                    parHtml.next().html(thisObj);

                    // 重置轮播图js
                    var nextL_2 = $("[type='field']").eq(parIndex + 1).find(".L_2");
                    var thisL_2 = $("[type='field']").eq(parIndex).find(".L_2");
                    if (nextL_2.length == 1) {
                        picimg(nextL_2);
                    }
                    if (thisL_2.length == 1) {
                        picimg(thisL_2);
                    }
                };
                $("input[type='radio']").removeAttr("name");
            });
        },
        modMoveUp: function(){
            // 模块上移
            $(".content").on("click", ".up", function () {
                var parHtml = $(this).parents(".field_wra");
                var parIndex = parHtml.index();
                var prevObj = parHtml.prev().html();
                var thisObj = parHtml.html();
                if (parIndex != 0) {
                    parHtml.html(prevObj);
                    parHtml.prev().html(thisObj);

                    // 重置轮播图js
                    var prevL_2 = $("[type='field']").eq(parIndex - 1).find(".L_2");
                    var thisL_2 = $("[type='field']").eq(parIndex).find(".L_2");
                    if (prevL_2.length == 1) {
                        picimg(prevL_2);
                    }
                    if (thisL_2.length == 1) {
                        picimg(thisL_2);
                    }
                };
                $("input[type='radio']").removeAttr("name");
            });
        },
        // 动态改变弹窗大小
        alert_size: function(){
            var leftSidebar = 100;
            var rightSidebar = 100;
            $(".bg-0").css({
                "width": $(window).width() - leftSidebar + "px",
                "height": $(window).height() - 110 + "px"
            });
            $(window).resize(function () {
                $(".bg-0").css({
                    "width": $(window).width() - leftSidebar + "px",
                    "height": $(window).height() - 110 + "px"
                });
            });
        },
        showAllStyle: function(){
            var me = this;
            $('.loadHtml').on('click', '.chooseStyle',function(){
                $(this).parents('.moveMod').addClass('changing');
                if ( $('.zIndex14').size() > 0 ) {
                    me.closeRightSide();
                }
                $(".bg-0,.al_5").fadeIn();
                $(".alert_set").draggable({
                    handle: ".alert_tit",
                    containment: ".bg-0",
                    scroll: false
                });
            })
        },
        changefootStyle: function(){
            var me = this;
            $('.loadHtml').on('click', '.footBut .bottom_style',function(){
                $(this).parents('.moveMod').addClass('changing');
                if ( $('.zIndex14').size() > 0 ) {
                    me.closeRightSide();
                }
                $(".bg-0,.al_6").fadeIn();
                $(".alert_set").draggable({
                    handle: ".alert_tit",
                    containment: ".bg-0",
                    scroll: false
                });
            })
        },
        closeRightSide: function(){
                $('.bg-0, .bg-1').fadeOut();
                $('.zIndex14').removeClass("zIndex14");
                $('.editing').removeClass("editing");
                $(".right_alert").stop(false, true).animate({
                    "right": "-220px"
                });
        },
        chooseStyle: function(){
            $('.bg-0').on('click','.changeStyle ul li', function(){
                var loadUrl = $(this).attr('data-layout-style');
                $('.changing').load('/newpc/'+loadUrl)
            })
        },
        chooseLayout: function(eventDom) {
            // 通栏布局模版 -- 选择布局
                // 新增布局
                if( $('.frame .content').find('.changing').size() == 0 ) {
                    $('.addLine').parents('.field_wra').before('<div class="wra_width980 field_wra " type="field"></div>')
                    var prevDom = $('.addLine').parents('.field_wra').prev();
                    prevDom.load('/newpc/public/loadHtml/common/layout/'+eventDom+'.html', function(){
                        console.log('添加成功')
                        // 让页面滚动到添加的那个模块
                        $('.loadHtml').scrollTop( $('.loadHtml')[0].scrollHeight );
                    })
                }else {
                    // 给当前的布局切换布局
                        this.changeCurLayout(eventDom)
                }

        },
        changeCurLayout: function(eventDom){
                if( $('.frame .content').find('.changing') ) {
                    $('.changing').load('/newpc/public/loadHtml/common/layout/'+eventDom+'.html', function(){
                        console.log('添加成功')
                    })
                    
                }
        },
        addLine2Layout: function(){
            var me = this;
            // 点击增加二行布局
            $('.allStyle').on('click', 'ul li', function(){
                me.chooseLayout($(this).attr('data-layout-type'));
            })
        },
        footClickDisplay: function(){
            // footer点击隐藏
            $(document).on('click', '.foot .set_hide a', function () {
                if ($(this).hasClass('show')) {
                    $(this).parents('.set_hide').siblings('.sel').show();
                } else {
                    $(this).parents('.set_hide').siblings('.sel').hide();
                }
            })
        },
        // 换布局
        changeLayout: function(){
            $(document).on('click', '.frame .content', function(e){
                var e = window.event || event;
                var target = e.srcElement ? e.srcElement : e.target;
                if ( $(target).attr('class') == 'changeLayout') {
                    // 有内容先不让它换布局
                    if ( $(target).parents('.field_wra').find('.mod_edi_but').size() == 0 ) {
                        // 标记当前正在换布局的元素
                        $(target).parents('.field_wra').addClass('changing').siblings().removeClass('changing');
                        // 触发点击事件，弹出左侧布局栏
                        $('.mod.layout_but').click();
                    }
                }
            })
        },
        disableChangeLayout: function(){
            // 如果是有内容的布局，换布局按钮就显示不能点击的效果
            $(document).on('mouseenter', '.field', function () {
                $(this).find('.edi').each(function (idx, ele) {
                    if (!$(ele).hasClass('addMod')) {
                        $(this).parents('.field').find('.changeLayout').css({
                            backgroundColor: "#F5F5F5",
                            color: " #ccc",
                            cursor: "default",
                        })
                        return false;
                    } else {
                        $(this).parents('.field').find('.changeLayout').css({
                            backgroundColor: "#f5f5f5",
                            color: " #444",
                            cursor: "pointer",
                        })
                    }
                })
            })
        },
        // 方案改名
        planRename: function(){
            // 点击方案更名
            $(document).on("click", ".name_edi p a", function () {
                $(this).parent()
                    .hide()
                    .siblings(".name_input").show()
                    .children("input").focus();
                $(this).parents("tr").addClass("bg_d0e9ff");
            });
            // 确定方案改名
            $(document).on("click", ".name_input .b_1", function () {
                $(this).parents(".name_input")
                    .hide()
                    .siblings("p").show();
                $(this).parents("tr")
                    .removeClass("bg_d0e9ff");
            });
            // 关闭方案改名
            $(document).on("click", ".name_input .b_2", function () {
                $(this).parents(".name_input")
                    .hide()
                    .siblings("p").show();
                $(this).parents("tr")
                    .removeClass("bg_d0e9ff");
            });
        },
        proHtml: function(tit, text, dateNum){
            var promptBox = '';
            promptBox += '<div class="bj_c" typeDate="' + dateNum + '">';
            promptBox += '<div class="prompt_box wid210">';
            promptBox += '<div class="prompt_tit">' + tit + '</div>';
            promptBox += '<div class="pro_con">';
            promptBox += '<div class="pro_text">' + text + '</div>';
            promptBox += '<div class="post_but"><a class="bg_bj_b pro_determine">确定</a><a class="bg_999 pro_cancel">取消</a></div>';
            promptBox += '</div></div></div>';
            return promptBox;
        },
        deleteMod: function(){
            // 删除模块
            $(document).on('click', '.delMod', function () {
                $(this).parents('.field_wra').remove();
            })
        },
        // 属性编辑预览
        setWidth: function(obj1, obj2) {
            // 宽屏窄屏
            $(document).on("click", ".setWidth ol li", function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    if ($(this).parent().siblings("input").val() == "宽屏") {
                        $(obj2).css("width", "100%");
                    } else {
                        $(obj2).css("width", "980px");
                    }
                }
            });
        },
        height: function(element, obj1, obj2) {
            // 设置高度
            $('body').on('keyup',element,function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    var height = $(this).val();
                    $(obj2).height(height);
                    if (obj1 == 'right_number_5') {
                        var lineHeight = (height - $(obj2).find('.top_line').height()) / 2;
                        $(obj2).find('.top_line').css('padding', lineHeight + 'px 0');
                    }
                }
            });
        },
        marBottom: function(element, obj1, obj2) {
            // 设置下边距
            $(element).keyup(function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    var bottom = $(this).val();
                    $(obj2).css("margin-bottom", bottom + "px");
                }
            });
        },
        marTop: function(eventDom, obj1, obj2) {
            // 设置上边据
            $(eventDom).keyup(function () {
                var has_num = $(this).parents(".operation_panel");
    
                if (has_num.hasClass(obj1)) {
                    var top = $(this).val();
                    $(obj2).css("margin-top", top + "px");
                }
            });
        },
        editText: function(element, obj1, obj2) {
            // 编辑输入框
            $(element).keyup(function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    var text = $(this).val();
                    $(obj2).html(text);
                }
            });
        },
       fontStyle: function(element, obj1, obj2) {
        //    编辑文字风格
            $(document).on("click", element, function () {
                var has_num = $(this).parents(".operation_panel");
                var parent_title = $(this).parent().parent().siblings('p').html();
                // console.log(parent_title)
                if (has_num.hasClass(obj1)) {
                    if (parent_title == '大小：') {
                        $(obj2).css('fontSize', $(this).parent().siblings("input").val() + 'px')
    
                    } else if (parent_title == '字体：') {
                        $(obj2).css('fontFamily', $(this).parent().siblings("input").val())
    
                    } else if (parent_title == '显示：') {
                        if ($(this).parent().siblings("input").val() == '是') {
                            $(obj2).parent().show()
                        } else if ($(this).parent().siblings("input").val() == '否') {
                            $(obj2).parent().show()
                        }
                    }
                }
            });
        },
        // 上传logo
        updateLogo: function(element, obj1, obj2) {
            $(document).on("change", element, function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    var file = $(this)[0].files[0];
                    if (URL.createObjectURL(file)) {
                        // 创建预览dom
                        $('.upImg_show').append('<img class="img" src="" />');
                        $('.upImg_show i').css('display', 'none');
                        // 预览图片
                        $('.upImg_show .img').attr("src", URL.createObjectURL(file))
                        // 实际dom上预览图片
                        $(obj2).attr("src", URL.createObjectURL($(this)[0].files[0]));
                        // formdata
                        var formData = new FormData();
                        formData.append('file', file)
                        var _this = this;
                        $.ajax({
                            type: 'POST',
                            url: 'http://test03.53wy.com/br-isoc/fi/simpleByUser',
                            data: formData,
                            processData: false, // 不会将 data 参数序列化字符串
                            contentType: false, // 根据表单 input 提交的数据使用其默认的 contentType
                            xhr: function () {
                                var xhr = new window.XMLHttpRequest();
                                xhr.upload.addEventListener("progress", function (evt) {
                                    if (evt.lengthComputable) {
                                        var percentComplete = evt.loaded / evt.total;
                                        // console.log('进度', percentComplete);
                                    }
                                }, false);
    
                                return xhr;
                            }
                        }).success(function (res) {
                            // console.log(res)
                            // 拿到提交的结果
                        }).error(function (err) {
                            console.error(err);
                        });
                    }
                }
            })
        },
        // 预览图片
        dataURItoBlob: function (dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], {
                type: mimeString
            });
        },
        // 上传图片
         updateImgFile:function(element, obj1, obj2) {
            $(document).on("change", element, function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    //获取文件  
                    var file = $(this)[0].files[0];
                    if (file.length == 0) {
                        return;
                    }
                    objectURL = window.URL.createObjectURL(file);
    
                    //  创建预览dom
                    if ($(this).parents('.up_but').siblings('.show_img').find('.img').length == 0) {
                        $(this).parents('.up_but').siblings('.show_img').append('<img class="img" src="" />');
                    }
                    $(this).parents('.up_but').siblings('.show_img').children('i').css('display', 'none');
    
                    // 预览图片
                    $(this).parents('.up_but').siblings('.show_img').children('.img').attr("src", objectURL);
                    // 实际dom上预览图片
                    $(obj2).css({
                        "backgroundImage": 'url(' + objectURL + ')',
                        "backgroundRepeat": "no-repeat"
                    });
                    // formdata
                    var formData = new FormData();
                    formData.append('file', file)
                    var _this = this;
                    $.ajax({
                        type: 'POST',
                        url: 'http://test03.53wy.com/br-isoc/fi/simpleByUser',
                        data: formData,
                        processData: false, // 不会将 data 参数序列化字符串
                        contentType: false, // 根据表单 input 提交的数据使用其默认的 contentType
                    }).done(function (res) {
                        console.log(res)
                        $(_this).parents('.up_but').siblings('.show_img').children('.img').attr("data-src", res.params.access_url)
                    }).error(function (err) {
                        console.error(err);
                    });
                }
            })
        },
        // 清除上传的图片
        clearImgFile: function(element, obj1, obj2) {
            $('body').on('click', element, function () {
                
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    if (has_num.find('.show_img .img').length != 0) {
                        has_num.find('.show_img .img').remove();
                        has_num.find(' .show_img i').show();
                        has_num.find(".upload input").val('')
    
                        if ($(obj2).parents('.logo').size() > 0 ) {
                            $(obj2).attr("src", 'images/1.jpg');
                        } else {
                            $(obj2).css('backgroundImage', '');
                        }
                    }
                }
            })
        },
        width: function(element, obj1, obj2) {
            $(element).keyup(function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    var width = $(this).val();
                    $(obj2).width(width);
                }
            });
        },
        // 隐藏元素
         displayBase: function(element, obj1, obj2) {
            $(document).on("click", element, function () {
                var has_num = $(this).parents(".operation_panel");
                if (has_num.hasClass(obj1)) {
                    if ($(this).parent().siblings("input").val() == '是') {
                        $(obj2).show();
                    } else if ($(this).parent().siblings("input").val() == '否') {
                        $(obj2).hide();
                    }
                }
            })
        },
        // 隐藏颜色
         displayColor: function(className, obj1, colorObj2, val) {
            if (val == '是') {
                $(obj1).css('backgroundColor', $(colorObj2).val());
            } else if (val == '否') {
                // 保存上一次的颜色
                $(colorObj2).attr('data-beforeColor', $(colorObj2).val())
                $(obj1).css('backgroundColor', '');
            }
        },
        // 隐藏图片
	     displayImg: function(className, obj1, imgObj3, val) {
                if (val == '是') {
                    $(obj1).css('backgroundImage', 'url(' + $(imgObj3).attr('src') + ')');
                } else if (val == '否') {
                    // 保存上一次的颜色
                    $(imgObj3).parent().siblings('.up_but').find('input').attr('data-beforeImg', $(imgObj3).attr('data-src'))
                    $(obj1).css('backgroundImage', '');
                    $(obj1).css('backgroundRepeat', '');
                }
         },
        //  弹窗背景层
        pubmask: function(){
            $('body').on('click',".pub_mask",function(){
                if($(".bg-1").length < 1)
                {
                    $(".content").append("<div class='bg-1'></div>");
                }
                $(this).parents(".moveMod").eq(0).addClass("zIndex14");
            });
        },
        // 点击设置弹出选择按钮
        clickSettings: function(){
            var me = this;
            // 模块设置
            $(document).on("click",".modular_set",function(e){
                $(".right_number_4").fadeIn();
                $(".right_alert").animate({
                    "right":"0px"
                });
                $(this).parents(".edi").addClass("editing");
                me.stopBubble(e);
            });
        },
         dragInit: function(){
                // 调用插件
                $('.loadHtml').dragMove({  
                    limit: false,// 限制在窗口内  
                    callback: function($move, $replace) {
                        if($move.height() != $replace.height())
                        {
                            if($move.hasClass("line_1"))
                            {
                                // $move.removeClass("line_1").addClass("line_2");
                                // $move.attr('data-line', 'line_2');
                                // $replace.removeClass("line_2").addClass("line_1");
                                // $replace.attr('data-line', 'line_1');
                                if (  $replace.hasClass('line_0') ) {
                                    $move.removeClass("line_1").addClass("line_0");
                                    $move.attr('data-line', 'line_0');
                                    $replace.removeClass("line_0").addClass("line_1");
                                    $replace.attr('data-line', 'line_1');
                                }else if ( $replace.hasClass('line_2') ) {
                                    $move.removeClass("line_1").addClass("line_2");
                                    $move.attr('data-line', 'line_2');
                                    $replace.removeClass("line_2").addClass("line_1");
                                    $replace.attr('data-line', 'line_1');
                                }
                            }
                            else if($move.hasClass("line_2"))
                            {
                                // $move.removeClass("line_2").addClass("line_1");
                                // $move.attr('data-line', 'line_1');
                                // $replace.removeClass("line_1").addClass("line_2");
                                // $replace.attr('data-line', 'line_2');
                                if (  $replace.hasClass('line_0') ) {
                                    $move.removeClass("line_2").addClass("line_0");
                                    $move.attr('data-line', 'line_0');
                                    $replace.removeClass("line_0").addClass("line_2");
                                    $replace.attr('data-line', 'line_2');
                                }else if ( $replace.hasClass('line_1') ) {
                                    $move.removeClass("line_2").addClass("line_1");
                                    $move.attr('data-line', 'line_1');
                                    $replace.removeClass("line_1").addClass("line_2");
                                    $replace.attr('data-line', 'line_2');
                                }
                            }
                            else if($move.hasClass("line_0"))
                            {
                                if (  $replace.hasClass('line_1') ) {
                                    $move.removeClass("line_0").addClass("line_1");
                                    $move.attr('data-line', 'line_1');
                                    $replace.removeClass("line_1").addClass("line_0");
                                    $replace.attr('data-line', 'line_0');
                                }else if ( $replace.hasClass('line_2') ) {
                                    $move.removeClass("line_0").addClass("line_2");
                                    $move.attr('data-line', 'line_2');
                                    $replace.removeClass("line_2").addClass("line_0");
                                    $replace.attr('data-line', 'line_0');
                                }
                            }
                        }
                    }  
                });  
         },
    }
    // 封装观察者模式
    var observer = (function(){
        // 定义一个对象  用于存放所有的函数
        var ob ={
        }
        // 返回接口 接口是一个对象 对象中包含两个方法 一个是on 一个是emit
        return {
            on:function(name,fn){
                // 将fn保存到ob中  以具体传递进来的事件名为属性名
                if(ob[name] instanceof Array){
                    // 我们将ob[name]定义成一个数组 就允许存在多个同名函数了
                    // 检测是否已经是数组了
                    ob[name].push(fn);
                }else{
                    // 如果不是数组说明是第一次监听该事件
                    ob[name] = [fn];
                } 
            },
            emit:function(name,data){
                if(ob[name]){
                    // 如果已经存在 则必定是一个数组
                    for(var i =0;i<ob[name].length;i++){
                        ob[name][i](data);
                    }
                }
            }
        }
    })();

