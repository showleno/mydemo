
    var beautify = {
        init: function(){
            this.colorPicker();
            this.scrollbar();
            // 背景位置
            this.inputCheckPosition();
            // 上传图片
            this.allUpdateImgFile();
            //  背景重复
            this.allBackgroundRepeat();
            this.bindEvent();
        },
        scrollbar: function() {
            // 滚动条
           $('#a1').scrollbar({});
        },
        colorPicker: function(){
            var f = $.farbtastic('#picker');
            $('.colorwell')
                .each(function () {
                    f.linkTo(this);
                })
                .focus(function () {
                    f.linkTo(this);
                });
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
                        $(".save_information").fadeIn(function () {
                            $(".save_information").show()
                            setTimeout(function () {
                                $(".save_information").fadeOut();
                                $(".save_information").hide()
                            }, 3000);
                        });
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
        inputCheckPosition: function() {
            $('input[name=bj_img_posi]').each(function(idx, ele){
                if (  $(ele).is(':checked') ) {
                    $(ele).parent().addClass("on").siblings().removeClass("on");
                }
            })
        },
        enterRepeat: function(e){
            e.stopPropagation();
            var target = e.srcElement ? e.srcElement : e.target;
            if ( target.tagName.toLowerCase() == 'em') {
                $(target).parent().siblings("ul").slideToggle(function () {
                });
            }else {
                $(target).siblings("ul").slideToggle(function () {
                });
            }
        },
        // 提交数据
        submit: function() {
            var data = {
                "isocId": 1,
                "commonjson": { 'pageColor': JSON.stringify(this.collectionBeauityData()) }
            }
            console.log(data);
            this.sendAjax('http://www.daweiyuan.cn/br-isoc/drag/savejson', data);
        },
        allBackgroundRepeat: function(){
            common.backgroundRepeatNew('#beautify .column_upload .repeat  li a','.nav_line');
            common.backgroundRepeatNew('#beautify .bg_upload .repeat  li a','.frame');
        },
        allUpdateImgFile: function(){
            common.updateImgFile('.bg_upload .up_but input', 'beautify', '.frame');
            common.updateImgFile('.column_upload .up_but input', 'beautify', '.nav_line');
        },
        checkPosition: function(e) {
            var target = e.srcElement ? e.srcElement : e.target;
            if (  $(target).is(':checked') ) {
                $(target).parent().addClass("on").siblings().removeClass("on");
            }
        },
        // 收集数据
        collectionBeauityData: function() {
            var mainColor = $('#beautify').find(".color_radio_0").val();
            var deputyColor = $('#beautify').find(".color_radio_1").val();
            var columnColor = $('#beautify').find(".color_radio_2").val();
            var columnBg = $('#beautify .column_upload').find(".img").attr('data-src');
            var textColor = $('#beautify').find(".color_radio_3").val();
            var backgroundColor = $('#beautify').find(".color_radio_4").val();
            var backgroundImages = $('#beautify .bg_upload').find(".img").attr('data-src');

            // 栏目图片定位
            var columnBackgroundPosition;
            var columnCheckedBox = $("#beautify .column_upload .location_sele a input:checked").parent().index();
            if (columnCheckedBox == 0) {
                columnBackgroundPosition = "top center"
            } else if (columnCheckedBox == 1) {
                columnBackgroundPosition = "center center"
            } else if (columnCheckedBox == 2) {
                columnBackgroundPosition = "bottom center"
            }

            // 图片定位
            var backgroundPosition;
            var checkedBox = $("#beautify .location_sele a input:checked").parent().index();
            if (checkedBox == 0) {
                backgroundPosition = "top center"
            } else if (checkedBox == 1) {
                backgroundPosition = "center center"
            } else if (checkedBox == 2) {
                backgroundPosition = "bottom center"
            }

            // 栏目背景重复
            var columnBackgroundRepeat;
            var columnRepeatVal = $('#beautify .column_upload').find(".repeat input").val();
            if (columnRepeatVal == '不重复') {
                columnBackgroundRepeat = ['不重复', 'no-repeat'];
            } else if (columnRepeatVal == '水平方向重复') {
                columnBackgroundRepeat = ['不重复', 'repeat-x'];
            } else if (columnRepeatVal == '垂直方向重复') {
                columnBackgroundRepeat = ['不重复', 'repeat-y'];
            } else if (columnRepeatVal == '填充') {
                columnBackgroundRepeat = ['不重复', 'repeat'];
            }

            // 背景重复
            var backgroundRepeat;
            var repeatVal = $('#beautify').find(".repeat input").val();
            if (repeatVal == '不重复') {
                backgroundRepeat = ['不重复', 'no-repeat'];
            } else if (repeatVal == '水平方向重复') {
                backgroundRepeat = ['不重复', 'repeat-x'];
            } else if (repeatVal == '垂直方向重复') {
                backgroundRepeat = ['不重复', 'repeat-y'];
            } else if (repeatVal == '填充') {
                backgroundRepeat = ['不重复', 'repeat'];
            }

            // 返回数据
            return {
                "mainColor": mainColor,
                "deputyColor": deputyColor,
                "columnColor": columnColor,
                "columnBg": columnBg,
                "columnBackgroundPosition": columnBackgroundPosition,
                "columnBackgroundRepeat": columnBackgroundRepeat,
                "textColor": textColor,
                "backgroundColor": backgroundColor,
                "backgroundImages": backgroundImages,
                "backgroundPosition": backgroundPosition,
                "backgroundRepeat": backgroundRepeat,
            }
        },
        bindEvent: function(){
            var me = this;
            $('#beautify').on('click', '.bg_color_img a', function(e){
                var target = e.srcElement ? e.srcElement : e.target;

                $(target).addClass("on").siblings().removeClass("on");
                var parent = $(target).parents('.change_color').find('.bg_style');
                parent.eq( $(target).index() ).show().siblings(".bg_style").hide();
            })

            $('#beautify').on('click', '.preservation_but a', function(e){
                me.submit();
            })

            $('#beautify').on('click', 'input[name=bj_img_posi]', function(e){
                var target = e.srcElement ? e.srcElement : e.target;
                if (  $(target).is(':checked') ) {
                    $(target).parent().addClass("on").siblings().removeClass("on");
                }
            })

            $('#beautify').on('click', '.repeat span', function(e){
                me.enterRepeat(e)
            })
            
            $('#beautify').on('click', '.main_vice ul li label input', function(e){
                var target = e.srcElement ? e.srcElement : e.target;
                var thisChecked = $(target).is(":checked");

                if (thisChecked) {
                    $(target).parent().addClass("on");
                    $(target).parents("li").siblings().children("label").removeClass("on");
                    $(target).parents("li").siblings().find(".color_checked em").remove();
                    if ($(target).siblings(".color_checked").children("em").length == "0") {
                        $(target).siblings(".color_checked").append("<em>使用中</em>");
                    }
                    // 预览推荐颜色
                    var frontview = $(target).parent().attr("frontview");
                    var backgroundcolor = $(target).parent().attr("backgroundcolor");
                    $(".main_color,.nav_bg_color,.footer").css("background-color", frontview);
                    $(".text_color").css("color", frontview);
                    $(".bot_main_color").css("border-bottom-color", frontview);

                    $(".deputy_bg_color").css("background-color", backgroundcolor);

                };
            })
        }
    }