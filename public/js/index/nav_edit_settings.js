var nav_edit_settings = {
    el: '.bg-0',
    init: function(){
        $('#a4').scrollbar({
            autoBottom: false
        });
        this.bindEvent();
        this.listenToChang();
    },
    listenToChang: function(){
        observer.on('navSort', function(navjson){
            console.log(navjson);
            if ( navjson.nav_line.length == 0 ) {
                return;
            }
            $('.al_1').find('.navList').remove();
            for( var i = 0; i<navjson.nav_line.length; i++ ) {
                var tpl = '';
                tpl +=  '<div class="nav_mod  navList"><div class="first_level"> <div class="blank"></div>';
                tpl +=  ' <div class="choice"> <div class="select wid110">';
                tpl +=  '<p>'+navjson.nav_line[i].name+'<i class="fa fa-caret-down"></i></p>';
                tpl +=  '<ol><li><dl><dt>-- 请选择 --</dt></dl></li><li><dl><dt>简介</dt><dd>简介2</dd></dl></li><li><dl><dt>新闻</dt><dd>新闻2</dd></dl></li><li><dl><dt>会员服务</dt></dl></li><li><dl><dt>捐赠</dt></dl></li><li><dl><dt>会员风采</dt></dl></li><li><dl><dt>圈子</dt></dl></li><li><dl><dt>期刊</dt></dl></li></ol>';
                tpl += '</div>';
                tpl += '<input type="text" placeholder="别名" class="alias_name" value="'+navjson.nav_line[i].alias+'">';
                if ( navjson.nav_line[i].show ) {
                    tpl += '<a class="bg_283c50 showHide"><input type="checkbox" class="checked_0 checked"><span><em>隐藏</em></span> </a>';
                }else {
                    tpl += '<a class="bg_999 showHide"><input type="checkbox" class="checked_0"><span><em>显示</em></span></a>';
                }
                tpl += '<a class="bg_283c50 del_first">删除</a></div>';
                tpl += '<div class="show_hide"><em>('+navjson.nav_line[i].childNav.length+')</em><a><i class="fa fa-plus-square"></i></a></div>';
                tpl += '</div>';
                tpl += ' <div class="sec_all">';
                if (   navjson.nav_line[i].childNav.length > 0 ) {
                    for( var j = 0; j<navjson.nav_line[i].childNav.length; j++ ) {
                        tpl += '<div class="sec_level twomenu"><div class="choice"><div class="select wid110">';
                        tpl += '<p>'+navjson.nav_line[i].childNav[j].name+'<i class="fa fa-caret-down"></i></p>';
                        tpl += '<ol><li><dl><dt>中国·上海·浦东新区总部·人力资源</dt><dd>小花</dd><dd>小梅</dd></dl></li><li><dl><dt>研发部</dt><dd>小明</dd><dd>发仔</dd></dl></li></ol>';
                        tpl += '</div>';
                        tpl += '<input type="text" placeholder="别名" class="alias_name" value="'+navjson.nav_line[i].childNav[j].alias+'">';
                        tpl += '<a class="bg_283c50 del_line">删除</a>';
                        tpl += '</div></div>';
                    }
                }
                tpl += '<div class="sec_level state-disabled"><div class="choice"><div class="select wid110"><p>-- 请选择 --<i class="fa fa-caret-down"></i></p><ol><li><dl><dt>中国·上海·浦东新区总部·人力资源</dt><dd>小花</dd><dd>小梅</dd></dl></li><li><dl><dt>研发部</dt><dd>小明</dd><dd>发仔</dd></dl></li></ol></div><input type="text" placeholder="别名" class="alias_name_2"><a class="bg_bj_b addTo">添加</a></div></div>';
                // 重新排序
                $('.al_1 .nav_con').append(tpl);
            }
        });
    },
    bindEvent: function(e){
        var me = this;
        var line_obj = null;

        $(this.el).on('click', '.al_1', function(e){
            var target = e.srcElement ? e.srcElement : e.target;
            if ( target.tagName.toLowerCase() == 'p' && $(target).parent('.select').size() > 0 ) {
                return;
            }
            $('.choice .select').find('ol').stop(false, true).slideUp(function(){
                $('#a4 .nav_con').css({
                    paddingBottom: 0
                })
            });
        })
        $(this.el).on('click', '.post_but .column_but', function(e){
            me.submit();
        })
        .on('click', ' .post_cancel', function(e){
            me.cancel(e);
        })
        .on('click', '.show_hide a', function(e){
            me.dropDown(e);
        })
        .on('click', '.addTo', function(e){
            me.addTo(e);
        })
        .on('click', '.select p', function(e){
            me.selector(e);
        })
        .on('click', ' .top_set_r input[name=width]', function(e){
            me.setWidth(e);
        })
        .on('click', '.select dl dt, .select dl dd', function(e){
            me.selectName(e);
        })
        .on('click', '.choice .showHide input', function(e){
            me.showHide(e);
        })
        .on('click', '.add_column a', function(e){
            me.addNav(e);
        })
        .on('click', '.del_first', function(e){
            me.deleteNav(e);
        })
        .on('click', '.del_line', function(e){
            me.deleteSubNav(e);
        })
        .on('click', '.al_1  .tab_name p a', function(e){
            me.tabSetting(e);
        })
        .on('keyup', '.nav_mod .alias_name', function(e){
            me.changeValue(e);
        })
        .on('click', '.pro_cancel', function(e){
            me.cancelTc(e);
        })
        .on('click', '.pro_determine', function(e){
            me.deterTc(e);
        })
        .on('keyup', '.al_1', function(e){
            me.closeDropdown(e);
        })
        // 设置边距
        this.settings();
    },
    tabSetting: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(target).parent().addClass('on').siblings().removeClass('on');
        // 点击tab切换
        var idx = $(target).parent().index();
        $(target).parents('.tab_con').find('.tab_info').eq(idx).addClass('active').siblings().removeClass('active'); 
    },
    closeDropdown: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        // 判断是否有是下拉框,
        if( target.tagName.toLowerCase() == 'p' && $(target).parent('.select').size() > 0 ) {
            return;
        }else {
            $('.select ol').hide();
        }
    },
    cancelTc: function(){
        $(".bj_c").remove();
        $('.nav_con .nav_mod.changing').removeClass('changing');
    },
    // 确定删除
    deterTc: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $('#sortable').find('.'+$('.nav_mod.changing').attr('id')).remove();
        line_obj.remove();
        var bj_cType = $(target).parents(".bj_c").attr("typedate");
        if (bj_cType == 0) {
            line_obj.remove();
            // 更新数量
            console.log(line_obj,1111)
            line_obj.parents('.sec_all').siblings('.first_level').find('.show_hide em').html('('+line_obj.size()-1+')');
            
            if (line_obj.hasClass('nav_mod')) {
                // 清除导航设置、页面导航、导航外观里的这一项
                $('#a4 .' + line_obj.attr('id')).remove();
                $('#sortable .' + line_obj.attr('id')).remove();
                $('.al_4 .' + line_obj.attr('id')).remove();
            }
            if (line_obj.hasClass('twomenu')) {
                // 清除导航设置、页面导航、导航外观里的这一项
                $('#a4 .' + line_obj.attr('id')).remove();
                $('#sortable .' + line_obj.attr('id')).remove();
                $('.al_4 .' + line_obj.attr('id')).remove();
            }
            $(".bj_c").remove();
        } else {
            $(".bj_c").remove();
        }
    },
    deleteSubNav: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        line_obj = $(target).parents(".sec_level");
		$(".bg-0").append(common.proHtml("警告", "确定要删除吗？", 0));
		$(".prompt_box").draggable({
			handle: ".prompt_tit",
			containment: ".bj_c",
			scroll: false
		});
    },
    deleteNav: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        $(target).parents('.nav_mod').addClass('changing');
        line_obj = $(target).parents(".nav_mod");
        $(".bg-0").append(common.proHtml("警告", "确定要删除整个一级目录吗？", 0));
        $(".prompt_box").draggable({
            handle: ".prompt_tit",
            containment: ".bj_c",
            scroll: false
        });
    },
    changeValue: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var index = $(target).parents('.nav_mod').index();
        $('#sortable .navList').eq(index).children('.nav_text_color').html($(target).val())
    },
    // 显示隐藏导航菜单
    showHide: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var checked = $(target).val();
        console.log(target)
        if ( $(target).parent().find("em").html() == '隐藏') {
            $(target).parent().removeClass("bg_283c50").addClass("bg_999");
            $(target).parent().find("em").html("显示");
            $('#sortable .' + $(target).parent().parents('.nav_mod').attr('id')).css('display', 'none');
        }else if ( $(target).parent().find("em").html() == '显示' ) {
            $(target).parent().removeClass("bg_999").addClass("bg_283c50");
            $(target).parent().find("em").html("隐藏");
            $('#sortable .' + $(target).parent().parents('.nav_mod').attr('id')).css('display', 'block');
        }
    },
    // 关闭导航
    cancel: function(e){
        // var target = e.srcElement ? e.srcElement : e.target;
        $(".alert_set, .bg-0").hide();
    },
    addNav: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var parentsLength = $('#a4').find('.nav_mod').size() - 1;
        var columnHtml = "";
        columnHtml += '<div id="navList_' + parentsLength + '" class="nav_mod navList">';
        columnHtml += '<div class="first_level bg_e3fbe3">';
        columnHtml += '<div class="blank"></div>';
        // columnHtml += '<div class="ico_nav"><a class="up_line"><i class="fa fa-arrow-up"></i></a><a class="down_line"><i class="fa fa-arrow-down"></i></a></div>';
        columnHtml += '<div class="choice">';
        columnHtml += '<div class="select wid110">';
        columnHtml += '<p>一级栏目<i class="fa fa-caret-down"></i></p>';
        columnHtml += '<ol><li><dl><dt>-- 请选择 --</dt></dl></li><li><dl><dt>简介</dt><dd>简介2</dd></dl></li><li><dl><dt>新闻</dt><dd>新闻2</dd></dl></li><li><dl><dt>会员服务</dt></dl></li><li><dl><dt>捐赠</dt></dl></li><li><dl><dt>会员风采</dt></dl></li><li><dl><dt>圈子</dt></dl></li><li><dl><dt>期刊</dt></dl></li></ol>';
        columnHtml += '</div>';
        columnHtml += '<input type="text" placeholder="别名" class="alias_name">';
        columnHtml +=  '<a class="bg_283c50 showHide"><input type="checkbox" class="checked_0 checked"><span><em>隐藏</em></span></a>';
        columnHtml += '<a class="bg_283c50 del_first">删除</a>';
        columnHtml += '</div>';
        columnHtml += '<div class="show_hide">';
        columnHtml += '<em>(0)</em>';
        columnHtml += '<a><i class="fa fa-plus-square"></i></a>';
        columnHtml += '</div></div>';
        columnHtml += '<div class="sec_all">';
        columnHtml += '<div class="sec_level">';
        columnHtml += '<div class="choice">';
        columnHtml += '<div class="select wid110">';
        columnHtml += '<p>一级栏目<i class="fa fa-caret-down"></i></p>';
        columnHtml += '<ol><li><dl><dt>中国·上海·浦东新区总部·人力资源</dt><dd>小花</dd><dd>小梅</dd></dl></li><li><dl><dt>研发部</dt><dd>小明</dd><dd>发仔</dd></dl></li></ol>';
        columnHtml += '</div>';
        columnHtml += '<input type="text" placeholder="别名" class="alias_name_2">';
        columnHtml += '<a class="bg_bj_b addTo">添加</a>';
        columnHtml += '</div></div></div></div>';

        var navTpl = '';
        navTpl += '<li id="navList_'+parentsLength+'" class="navList navList_'+parentsLength+'"><a href="" class="nav_text_color" style="color:#fff;"></a><ul class="childNav nav_bg_color" style="display: none; top: 40px;"></ul></li>';
        var length = $('#a4 .nav_con').find('.navList').size();
        if ( length >= 10 ) {
            console.log('已经有10个一级导航了,不能再加了')
            return;
        }
        $('#sortable').append(navTpl);
        $('#a4').find('.nav_con').append(columnHtml);
        // var height = $('#a4 .nav_con').height();
        // if ( height > 200 ) {
        //     $('#a4').height(height);
        // }
    },
    // 展开收起
    dropDown: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        
        if( $(target).hasClass("fa-plus-square")) {
            $(target).removeClass("fa-plus-square").addClass("fa-minus-square");
        } else {
            $(target).removeClass("fa-minus-square").addClass("fa-plus-square");
        }
        $(target).parents(".first_level").siblings(".sec_all").slideToggle(function(){
            // HScroll("#a4","#b4","#c4","#d4");
        });
    },
    // 通用下拉菜单
    selector: function(e) {
        var target = e.srcElement ? e.srcElement : e.target;
        var ol = $(target).parents('.select').find("ol")[0];
        // $(target).siblings('ol').html('');
        // $.ajax({
        //     url:"http://www.daweiyuan.cn/br-isoc/drag/getcolumns?isocId=1&token=1",
        //     type: 'get',
        //     dataType: 'json', 
        //     async: false,
        //     success: function(res) {
        //         console.log(res);
        //         _.map(res.data, function(element, index, list){
        //             var title = element.columnDTO.columnName;
        //             var url = element.columnDTO.linkUrl;
        //             var tpl = '<li><dl><dt data-url="'+url+'">'+ title +'</dt></dl> </li>';
        //             $(target).siblings('ol').append(tpl);
        //         })
        //     },
        //     error: function(error){
                
        //     }
        // })
        $('#a4 .nav_con').find('.select ol').stop(false, true).slideUp();
        $(target).siblings("ol").stop(false, true).slideToggle(function(){
            // 让下拉框定位到中心
            if ( $(target).parents('.navList').index()  >6 ) {
                if ( $(ol).is(':visible') ) {
                    $('#a4 .nav_con').css({
                        paddingBottom: $(ol).height() + 'px'
                    })
                }
                
            }
            // $('#a4').scrollTop( ol.scrollHeight + ol.style.height );
        });
        // 阻止下拉框在滑动时冒泡
        $('.select ol').on('mousewheel', function(e){
            e.stopPropagation();
        })
    },
    addTo: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var navName = $(target).siblings(".select").children("p").text();
        var alias = $(target).siblings("input").val();

        var addTo_sec = '';
        addTo_sec += '<div class="sec_level twomenu">';
        addTo_sec += '<div class="choice">';
        addTo_sec += '<div class="select wid110">';
        addTo_sec += '<p>' + navName + '<i class="fa fa-caret-down"></i></p>';
        addTo_sec += '<ol><li><dl><dt>中国·上海·浦东新区总部·人力资源</dt><dd>小花</dd><dd>小梅</dd></dl></li><li><dl><dt>研发部</dt><dd>小明</dd><dd>发仔</dd></dl></li></ol>';
        addTo_sec += '</div>';
        addTo_sec += '<input placeholder="别名" class="alias_name_2" type="text" value=' + alias + '>';
        addTo_sec += '<a class="bg_283c50 del_line">删除</a>';
        addTo_sec += '</div></div>';
        $(target).parents(".sec_level").before(addTo_sec);
        var name = navName == '' ? alias : navName;
        var childNavTpl  = '<li><a href="" class="nav_text_color" style="">'+name+'</a></li>'
        var parents = $(target).parents('.nav_mod').attr('id');
        $('#'+ parents).find('.childNav').append(childNavTpl);
        // 初始化
        $(target).siblings(".select").children("p").html("-- 请选择 --<i class='fa fa-caret-down'></i>");
        // 更新数量
        var childNav = $(target).parents('.sec_all').find('.twomenu');
        childNav.parents('.sec_all').siblings('.first_level').find('.show_hide em').html( '('+childNav.size()+')' );
        

        $(target).siblings("input").val("");
    },
    selectName: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var thisTe = $(target).text();
        var url = $(target).attr('data-url');
        $(target).parents(".select").children("p").html(thisTe + "<i class='fa fa-caret-down'></i>");
        if (url) {
            $(target).parents(".select").children("p").attr('data-url',url);
        }else {
            $(target).parents(".select").children("p").attr('data-url','#');
        }
        // 如果别名为空，就让name替代
        if ($(target).parents('.choice').find('.alias_name').val() == '') {
            var parentId = '#' + $(target).parents('.nav_mod').attr('id');
            $(parentId).children('a').text(thisTe);
        }
        $(target).parents("ol").hide();
    },
    collectionSort: function() {
        //记录sort后的id顺序数组
        var arr = [];
        $('#b4 .sort_navList').each(function () {
            arr.push($(this).attr('id'))
        })
        //拖拽后利用localStorage记录顺序
        localStorage.arr = arr;
    },
    collectionSizeData: function() {
        // nav导航规格数据
        var width = "";
        var height = $(".navHeight").val();
        var marTop = $(".navMarTop").val();
        var marBottom = $(".navMarBot").val();
        if ($(".top_set_r label input:checked").parent().index() == 0) {
            width = ["980px", "普通"];
        } else {
            width = ["100%", "全屏"];
        };

        return {
            "width": width,
            "marTop": marTop,
            "marBot": marBottom,
            "height": height
        }
    },
    setWidth: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        if ( $(target).is(':checked') ) {
            if ( $(target).siblings('p').html() == '全屏' ) {
                $('.nav_top').width('100%')
            }else if ( $(target).siblings('p').html() == '普通' ) {
                $('.nav_top').width('980px');
            }
        }
    },
     // 设置高度，上边距，下边距
     settings: function(){
        // nav设置高度
        $(this.el).on('keyup', '.navHeight', function () {
            var has_num = $(this).parents("#top_nav_tab_1");
            if (has_num.hasClass('tab_info')) {
                var height = $(this).val();
                $('.nav_line, .nav_top').height(height);
                $('.nav_line ul li a').css('lineHeight', $('.nav_line, .nav_top').height() + 'px');
            }
        });
        // nav 设置下边距
        $(this.el).on('keyup', '.navMarBot', function () {
            var has_num = $(this).parents("#top_nav_tab_1");

            if (has_num.hasClass('tab_info')) {
                var bottom = $(this).val();
                $('.nav_line').css("margin-bottom", bottom + "px");
            }
        });
        // nav 设置上边距
        $(this.el).on('keyup', '.navMarTop', function () {
            var has_num = $(this).parents("#top_nav_tab_1");

            if (has_num.hasClass('tab_info')) {
                var top = $(this).val();
                $('.nav_line').css("margin-top", top + "px");
            }
        });
    },
    collectionNavData: function() {
        // 导航栏目数据
        var navline = $(".al_1").find(".nav_mod");
        var navjson = {
            "nav_line": []
        };
        // 循环一级菜单
        navline.each(function () {
            var name = $(this).children(".first_level").find(".select p").text();
            var linkUrl = $(this).children(".first_level").find(".select p").attr('data-url');
            var alias = $(this).find(".alias_name").val();
            // 没选中是代表隐藏，选中即是显示
            // var show = $(this).find(".checked_0").is(":checked");
            var show = $(this).find(".checked_0").siblings('span').find('em').text();

            if ( !linkUrl ) {
                linkUrl = '#'
            }

            if ( show == '显示' ) {
                show = false;
            }else {
                show = true
            }
            var childNavLine = $(this).find(".sec_level.twomenu");
            var childNav = [];
            var nameStr = '-- 请选择 --';
            if ( childNavLine.size() > 0 ) {
                // 循环二级导航
                childNavLine.each(function (index) {
                    var childNav_alias = $(this).find('.alias_name_2').val();
                    var childNav_name = $(this).find(".select p").text();
                    var childNav_url = $(this).find(".select p").attr('data-url');
                    if ( !childNav_url ) {
                        childNav_url = '#'
                    }
                    childNavjson = {
                        "name": childNav_name,
                        "alias": childNav_alias,
                        "linkUrl": childNav_url
                    };
                    if (childNav_name == '-- 请选择 --') {
                        return;
                    } else {
                        childNav.push(childNavjson)
                    }
                })
            }
            if (name == '') {
                name = "首页";
                alias = "首页";
            }
            if (alias == "") {
                alias = name;
            }
            // 如果用户没选择name，就不让它显示
            if (name == nameStr) {
                show = false;
            }
            // 把每个菜单数据集合到一起
            navjson.nav_line.push({name, alias, linkUrl, show, childNav});

        });
        // 把规格加入进去
        navjson.speDet = this.collectionSizeData();
        return navjson;
    },
    submit: function(){
        // 关闭弹窗
        var json = {
            "isocId": 1,
            "navjson": JSON.stringify(this.collectionNavData())
        };
        this.cancel();
        console.log(json);
        // 发送ajax
        this.sendAjax('http://www.daweiyuan.cn/br-isoc/drag/savejson', json);
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
}