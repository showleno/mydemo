var right_alert = {
    el: '#right_content',
    init: function(){
        this.initJs();
        this.bindEvent();
    },
    bindEvent: function(){
        var me = this;
        $(this.el).on('click', '.sel_module table td', function(e){
            me.modSelect_title(e);
        })
        .on('click', '.sel_module table td', function(e){
            me.modSelect_title(e);
        })
        .on('click', ' .module_con .mod_tit', function(e){
            me.modSelect_dropDown(e);
        })
        .on('click', 'input[name=bj_img_posi]', function(e){
            me.checkPosition(e);
        })
        .on('click', '.colorImgDisplay .select_down ol li', function(e){
            me.onlyShowOne(e);
        })
        .on('click', '.preservation_but a', function(e){
            me.submit(e);
        })
        .on('click', '.select_down ol li', function(e){
            me.changeValue(e);
        })
        .on('click', ' .select_down > p', function(e){
            me.dropDown(e);
        })
        .on('click', '.right_number_6 .changeDisplay ol li', function(e){
            me.bannerDisplay(e);
        })
        .on('click', '.right_number_1 .select_down ol li', function(e){
            me.webNameDisplay(e);
        })
        .on('click', '.add_wrap .add', function(e){
            me.addMod(e);
        })
        .on('click', '.chooseMod_btn', function(e){
            me.submitChoose(e);
        })
    },
    renderChild: function(){
        // 分支--选择模块
        chooseMod.init();
    },
    initJs: function() {
        this.colorPick();
        //   导航栏目宽度计算
        var top_nav_length = $(".page_nav").children("a").length;
        var top_nav_width = $(".page_nav a").outerWidth();
        var page_nav_width = $(".page_nav").width();
        if (top_nav_length * top_nav_width > page_nav_width) {
            $(".page_nav").children("a").width(100 / top_nav_length + "%");
        } else {
            $(".page_nav").children("a").removeAttr("style");
        }
        this.editorInput();
        // 自定义滚动条
        $('.right_number_1 .scroll').scrollbar({});
        $('.right_number_2 .scroll').scrollbar({});
        $('.right_number_3 .scroll').scrollbar({});
        $('.right_number_5 .scroll').scrollbar({});
        $('.right_number_6 .scroll').scrollbar({});
        $('.right_number_7 .scroll').scrollbar({});
        $('.right_number_8 .scroll').scrollbar({});
        $('.isAdd').each(function(idx, ele){
            if ( $(ele).is(':checked') ) {
                $(ele).siblings('.add').addClass('disable');
            }
        })
     },
     colorPick: function(){
        // 颜色选择器
        var colorwell2_str = $('.colorwell2').val();
        var colorwell3_str = $('.colorwell3').val();
        var colorwell4_str = $('.colorwell4').val();
        var colorwell7_str = $('.colorwell7').val();
        $('.colorwell2').val(colorwell2_str.replace(/(^\s*)|(\s*$)/g, ""));
        $('.colorwell3').val(colorwell3_str.replace(/(^\s*)|(\s*$)/g, ""));
        $('.colorwell4').val(colorwell4_str.replace(/(^\s*)|(\s*$)/g, ""));
        $('.colorwell7').val(colorwell7_str.replace(/(^\s*)|(\s*$)/g, ""));

        $('#picker2').farbtastic(".colorwell2");
        $('#picker3').farbtastic(".colorwell3");
        $('#picker4').farbtastic(".colorwell4");
        $('#picker7').farbtastic(".colorwell7");


        $('.colorwell5').each(function(idx, ele){
            var str = $(this).val();
            var newStr = str.replace(/(^\s*)|(\s*$)/g, "");
            $(this).val(newStr);
        })
        // 顶部颜色面板
        var f = $.farbtastic('#picker5');
        $('.colorwell5')
            .each(function () {
                f.linkTo(this);
            })
            .focus(function () {
                f.linkTo(this);
            });
     },
     addMod: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 点击添加，就获取模块，并添加，添加成功就不能点了
        if ( $(target).hasClass('disable') ) {
            $(target).removeClass('disable');
        }else {
            $(target).addClass('disable');
        }
     },
     changeValue: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var this_text = $(target).text();
        $(target).parent().siblings("p").html(this_text + '<i class="fa fa-caret-down"></i>');
        $(target).parent().siblings("input").val(this_text);
        $(target).parent().slideUp();
     },
     dropDown: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(target).siblings("ol").slideToggle();
     },

    // banner 模块显示隐藏
    bannerDisplay: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        var val = $(target).parent().siblings('.doesShow').val();
        var addSlide = '<div class="wra_width980 field_wra"><div class="field"><div class="wid980 addSlide edi pub_mask"><span><i></i>添加轮播图</span></div></div></div>';
        var showSet = '<div class="wra_width980 edi lbtbj showBut"><div class="but"><a class="slide_set pub_mask">设置效果</a></div></div>';

        if ( $(target).parent().siblings('.doesShow').val() == '是' ) {
            $('.L_1').show();
            $('.slideShow').find('.wra_width980').remove();
            $('.slideShow').append(showSet);
        }else if ( $(target).parent().siblings('.doesShow').val() == '否' ) {
            $('.L_1').hide();
            $('.slideShow').find('.wra_width980').remove();
            $('.slideShow').append(addSlide);
        }
    },

    // 网站名称显示隐藏
    webNameDisplay: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var val = $('.right_number_1').find('.doesShow').val();
        console.log(val)
        if ( val == '是' ) {
            $('.association_name').show();
            $('.association_name p').show();
            $('.association_name').css({
                'height':'',
                'width':'',
            });
        }else if ( val == '否' ) {
            $('.association_name').show();
            $('.association_name p').hide();
            $('.association_name').css({
                'height':'30',
                'width':'60',
            });
        }
    },
     // 模块选择 - 标题选项
     modSelect_title: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        $('.sel_module table td').removeClass('cur');
        $(target).addClass('cur');
     },

    // 模块选择 -下拉框
     modeSelect_dropDown: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        if ($(target).find('.fa-angle-up').hasClass('fa-angle-up')) {
            $(target).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down')
        } else {
            $(target).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up')
        }
        $(target).siblings('.mod_set').toggle();
     },

    // 选择是否显示颜色或图像，二者只能显示一个
    onlyShowOne: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var this_text = $(target).text();
        if ( this_text == '是' ) {
            $(target).parents('.out').siblings('.out').find('.changeDisplay .wid48').html('否<i class="fa fa-caret-down"></i>');
            $(target).parents('.out').siblings('.out').find('.changeDisplay input[type=hidden]').val('否');
        }
    },

    // editor input
    editorInput: function(){
        var E = window.wangEditor;
        var editor = new E('#foot_editTitle','#foot_editText');
        // // 自定义菜单配置
        editor.customConfig.menus = [
            'link',
            'image',
            'code'
        ];
        editor.customConfig.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $('.footer_0 .footInfo').html(html)
        }
        editor.create();
        $('.footer_0 .footInfo').html(editor.txt.html())
        // 页尾信息编辑
        $('.right_number_7').on('keyup','.editor_text', function(){
            $('.footer_0 .footInfo').html(editor.txt.text())
        });
    },
    checkPosition: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        if (  $(target).is(':checked') ) {
            $(target).parent().addClass("on").siblings().removeClass("on");
        }
    },
    
    // 发送AJAX保存数据
    sendAjax: function(url, json) {
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
    },

    // 颜色 and 图像 数据
    collectionColorImgData: function(element) {
        // 记录上一次的颜色和图片
        var beforeColor = '';
        var beforeImg = '';
        
        // 颜色值
        var bgColor = element.find('.change_color input[type=text]').val();
        // 图像值
        var bgImages = element.find('.up_img .img').attr('data-src');
        // 宽度
        var width = element.find('.logo_modify_input .width').val();
        // 高度
        var height = element.find('.logo_modify_input .modify_height').val();
        // 下边距
        var marBot = element.find('.logo_modify_input .modify_marBot').val();
        // 是否显示颜色
        var colorDoesShow = element.find('.logo_modify_input .colorDoesShow').val();
        // 是否显示颜色
        var imgDoesShow = element.find('.logo_modify_input .imgDoesShow').val();

        // 默认宽度
        var widthSize = "窄屏";
        if (width == "窄屏") {
            width = "980px";
            widthSize = "窄屏";
        } else {
            width = "100%";
            widthSize = "宽屏";
        };

        // color是否显示
        if (colorDoesShow == "是") {
            colorDoesShow = [true, "是"];
        } else {
            colorDoesShow = [false, "否"];
            color = '';
            // 上一次颜色
            beforeColor = element.find('.change_color input[type=text]').attr('data-beforeColor');
        };

        // img是否显示
        if (imgDoesShow == "是") {
            imgDoesShow = [true, "是"];
        } else {
            imgDoesShow = [false, "否"];
            bgImages = '';
            beforeImg = element.find('.up_but input').attr('data-beforeImg');
        };

        // 图片定位
        var backgroundPosition;
        var checkedBox = element.find(".location_sele a input:checked").parent().index();
        if (checkedBox == 0) {
            backgroundPosition = "top center"
        } else if (checkedBox == 1) {
            backgroundPosition = "center center"
        } else if (checkedBox == 2) {
            backgroundPosition = "bottom center"
        }
        
        // 背景重复
        var backgroundRepeat;
        var repeatVal = element.find(".repeat input").val();
        if (repeatVal == '不重复') {
            backgroundRepeat = ['不重复', 'no-repeat'];
        } else if (repeatVal == '水平方向重复') {
            backgroundRepeat = ['不重复', 'repeat-x'];
        } else if (repeatVal == '垂直方向重复') {
            backgroundRepeat = ['不重复', 'repeat-y'];
        } else if (repeatVal == '填充') {
            backgroundRepeat = ['不重复', 'repeat'];
        }

        return {
            "color": bgColor,
            "backgroundImages": bgImages,
            "backgroundPosition": backgroundPosition,
            "backgroundRepeat": backgroundRepeat,
            "height": height,
            "width": width,
            "widthSize": widthSize,
            "marBottom": marBot,
            "colorDoesShow": colorDoesShow,
            "imgDoesShow": imgDoesShow
        }
    },
    // top顶部数据
    collectionTop: function(element) {
        // 记录上一次的颜色和图片
        var beforeColor = '';
        var beforeImg = '';

        // 颜色值
        var bgColor = element.find('.change_color .top_colorwell_0').val();
        // 文字颜色值
        var fontColor = element.find('.change_color .top_colorwell_1').val();
        // 按钮颜色值
        var btnColor = element.find('.change_color .top_colorwell_2').val();
        // 图像值
        var bgImages = element.find('.up_img .img').attr('data-src');
        // 宽度
        var width = element.find('.logo_modify_input .width').val();
        // 高度
        var height = element.find('.logo_modify_input .modify_height').val();
        // 下边距
        var marBot = element.find('.logo_modify_input .modify_marBot').val();
        // 是否显示颜色
        var colorDoesShow = element.find('.logo_modify_input .colorDoesShow').val();
        // 是否显示颜色
        var imgDoesShow = element.find('.logo_modify_input .imgDoesShow').val();

        // 默认宽度
        var widthSize = "窄屏";
        if (width == "窄屏") {
            width = "980px";
            widthSize = "窄屏";
        } else {
            width = "100%";
            widthSize = "宽屏";
        };

        // color是否显示
        if (colorDoesShow == "是") {
            colorDoesShow = [true, "是"];
        } else {
            colorDoesShow = [false, "否"];
            color = '';
            // 上一次颜色
            beforeColor = element.find('.change_color input[type=text]').attr('data-beforeColor');
        };

        // img是否显示
        if (imgDoesShow == "是") {
            imgDoesShow = [true, "是"];
        } else {
            imgDoesShow = [false, "否"];
            bgImages = '';
            beforeImg = element.find('.up_but input').attr('data-beforeImg');
        };

        // 图片定位
        var backgroundPosition;
        var checkedBox = element.find(".location_sele a input:checked").parent().index();
        if (checkedBox == 0) {
            backgroundPosition = "top center"
        } else if (checkedBox == 1) {
            backgroundPosition = "center center"
        } else if (checkedBox == 2) {
            backgroundPosition = "bottom center"
        }
        
        // 背景重复
        var backgroundRepeat;
        var repeatVal = element.find(".repeat input").val();
        if (repeatVal == '不重复') {
            backgroundRepeat = ['不重复', 'no-repeat'];
        } else if (repeatVal == '水平方向重复') {
            backgroundRepeat = ['不重复', 'repeat-x'];
        } else if (repeatVal == '垂直方向重复') {
            backgroundRepeat = ['不重复', 'repeat-y'];
        } else if (repeatVal == '填充') {
            backgroundRepeat = ['不重复', 'repeat'];
        }

        return {
            "bgcolor": bgColor,
            "fontColor": fontColor,
            "btnColor": btnColor,
            "backgroundImages": bgImages,
            "backgroundPosition": backgroundPosition,
            "backgroundRepeat": backgroundRepeat,
            "height": height,
            "width": width,
            "widthSize": widthSize,
            "marBottom": marBot,
            "colorDoesShow": colorDoesShow,
            "imgDoesShow": imgDoesShow
        }
    },
    // titlejson 数据
    collectionTitle: function(element) {
        // 颜色值
        var bgColor = element.find('.change_color input[type=text]').val();
        // 网站名称
        var textarea = element.find('.textarea_name .editText').val();
        // 字体大小
        var fontSize = element.find('.logo_modify_input .font_size').val();
        // 字体
        var fontFamily = element.find('.logo_modify_input .font_family').val();
        // 是否显示
        var doesShow = element.find('.logo_modify_input .doesShow').val();

        // 是否显示
        if (doesShow == "是") {
            doesShow = [true, "是"];
        } else {
            doesShow = [false, "否"];
        };
        
        return {
            "doesShow": doesShow,
            "color": bgColor,
            "textarea": textarea,
            "fontFamily": fontFamily,
            "fontSize": fontSize
        }
    },

    // logo数据
    collectionLogo: function(element) {
        // logo 图片
        var logo = element.find('.upImg_show .img').attr('data-src');
        // 长度
        var width = element.find('.logo_modify_input .width').val();
        // 高度
        var height = element.find('.logo_modify_input .height').val();
        // 是否显示
        var doesShow = element.find('.logo_modify_input .doesShow').val();

         // 是否显示
         if (doesShow == "是") {
            doesShow = [true, "是"];
        } else {
            doesShow = [false, "否"];
        };

        return {
            "doesShow": doesShow,
            "imgSrc": logo,
            "width": width,
            "height": height
        }
    },

    // collectionSlide数据
    collectionSlide: function(element) {
        // 规格
        var width = element.find('.logo_modify_input .width').val();
        // 修改高度
        var height = element.find('.logo_modify_input .modify_height').val();
        // 上间距
        var marTop = element.find('.logo_modify_input .modify_marTop').val();
        // 下间距
        var marBot = element.find('.logo_modify_input .modify_marBot').val();
        // 模块显示
        var doesShow = element.find('.logo_modify_input .doesShow').val();

         // 是否显示
         if (doesShow == "是") {
            doesShow = [true, "是"];
        } else {
            doesShow = [false, "否"];
        };

        // 默认宽度
        var widthSize = "窄屏";
        if (width == "窄屏") {
            width = "980px";
            widthSize = "窄屏";
        } else {
            width = "100%";
            widthSize = "宽屏";
        };

        return {
            "doesShow": doesShow,
            "height": height,
            "marTop": marTop,
            "marBottom": marBot,
            "width": width,
            "widthSize": widthSize
        }

    },

    // collectionFootInfo数据
    collectionFootInfo: function(element) {
        console.log(element)
        // 颜色值
        var color = element.find('.change_color input[type=text]').val();
        // 底部信息文字
        // var textarea = element.find('.footer_set .editText').val();
        var textarea = element.find('.footer_set .w-e-text').html();
        
        var footInfo = {
            "fontColor":  color,
            "textarea": textarea
        }
        return footInfo
    },
    // 选择模块 -- 确认添加
    submitChoose: function(){
        var modNumber = [];
        var data = {};
        
        $('#b2').find('.isAdd').each( function(idx, ele){
            if ( $(ele).is(':checked') ) {
                modNumber.push( $(ele).parents('.mod_line').attr('data-type-id') );
            }
        })
        data = {  "columnId": JSON.stringify( modNumber ) }
        console.log(data)
        // 发送ajax保存添加的模块
    },
    // 提交完成关闭弹窗
    closeAll: function(){
        // 关闭所有弹窗
        $(".right_alert").stop(false, true).animate({
            "right": "-220"
        }, 500, function () {
            $(".operation_panel").css("display", "none");
        });

        $(".bg-1").remove();
        $(".zIndex14").removeClass("zIndex14");
    },
    // 提交
    submit: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        console.log(target)
        var data = {};
        // logo
        if ( $(target).parents('.right_number_0').size() > 0  ) {

            var data = { isocId: 1, "logojson": JSON.stringify( this.collectionLogo($('.right_number_0'))) }
            
        // webName
        }else if ( $(target).parents('.right_number_1').size() > 0 ) {

            data = {  isocId: 1, "titlejson": JSON.stringify( this.collectionTitle($('.right_number_1'))) }

        // title
        } else if ( $(target).parents('.right_number_2').size() > 0 ) {

            data = {  isocId: 1, "bannerjson": JSON.stringify( this.collectionColorImgData($('.right_number_2'))) }

            // footer
        } else if ( $(target).parents('.right_number_3').size() > 0 ) {
            var footAll = {
                "footMain": this.collectionColorImgData($('.right_number_3')),
                "footInfo":this.collectionFootInfo($('.right_number_7'))
            }
            data = {  isocId: 1, "footjson":  JSON.stringify(footAll) }
            // top
        } else if ( $(target).parents('.right_number_5').size() > 0 ) {

            data = {  isocId: 1, "topjson": JSON.stringify( this.collectionTop($('.right_number_5'))) }
            
        // slider
        } else if ( $(target).parents('.right_number_6').size() > 0 ) {

            data = {  isocId: 1, "slidejson": JSON.stringify( this.collectionSlide($('.right_number_6'))) }

        // footInfo
        } else if ( $(target).parents('.right_number_7').size() > 0 ) {

            var footAll = {
                "footMain": this.collectionColorImgData($('.right_number_3')),
                "footInfo":this.collectionFootInfo($('.right_number_7'))
            }
            data = {  isocId: 1, "footjson":  JSON.stringify(footAll) }
            
        }
        console.log(data)
        // 发送ajax，保存数据
        this.sendAjax('http://www.daweiyuan.cn/br-isoc/drag/savejson', data);
        this.closeAll();

    }
}