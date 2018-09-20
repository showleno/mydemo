var nav_edit_style = {
    el: '.bg-0',
    init: function(){
        this.bindEvent();
    },
    bindEvent: function(){
        var me = this;
        $(this.el).on('click', '.nav_style_but a', function(e){
            me.navStyle(e);
        })
        .on('click', '.al_4 .cancel', function(e){
            me.navClose(e);
        })
        .on('click', '.al_4 .sure', function(e){
            me.submit(e);
        })
    },
    navClose: function(){
        $(".bg-0,.al_4").hide();
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
    collectionNavData: function(){
        var navjson = {
            "nav_line": []
        };
        $('.al_4').find('.nav_items').each(function(){
            var _this = $(this);
            
            var navTitle = $(this).find('h3').attr('data-tip');
            var navName = $(this).find('h3').attr('data-name');
            var navShow = $(this).find('h3').attr('data-show');
            var childNav = [];
            
            if ( _this.find('.nav_item li').size() > 0 ) {
                _this.find('.nav_item li').each(function(){
                    var childNavAlias = $(this).attr('data-tip');
                    var childNavName = $(this).attr('data-name');
                    var childNavJson = {
                        alias: childNavAlias,
                        name: childNavName
                    }
                    childNav.push(childNavJson);
                })
            }
            navStyleJson = {
                alias: navTitle,
                name: navName,
                show: navShow,
                childNav: childNav
            }
            // nav.push(navStyleJson);
            navjson.nav_line.push(navStyleJson)
        })
        observer.emit('navSort', navjson);
        // 把规格参数也更新一次
        navjson.speDet = this.collectionSizeData();
        
        return navjson;
    },
    navSure: function(){
        $(".bg-0,.al_4").hide();
        // 发送ajax
        
        // var localNavItemsArr = localStorage.NavItemsArr;
        // //如果有localst记录则，按照这个进行排序元素
        // if(localNavItemsArr){
        //         var resNavItemsArr = localNavItemsArr.split(',');
        //         var NavListUl = $('#sortable');
        //         //li 数组
        //         for(var i = 0;i < resNavItemsArr.length;i++){
        //             var Class = '#sortable .'+resNavItemsArr[i];
        //             if ( resNavItemsArr[i] != '' ) {
        //                 NavListUl.append($(Class));
        //             }
        //         }
        // }
        
    },
    submit: function(){
        // 关闭弹窗
        var json = {
            "isocId": 1,
            "navjson": JSON.stringify(this.collectionNavData())
        };
        this.navSure();
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
    navStyle: function(){
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
                   console.log(NavItemsArr)
               }
           });
           $(".al_4 .tab_con").disableSelection();

           $(".al_4 .nav_item").sortable({
               items: ".handle",
               connectWith: ".al_4 .nav_item",
               stop: function(){
                   //记录sort后的id顺序数组
                   var NavItemArr = $( ".al_4 .nav_item" ).sortable('toArray');
                   //拖拽后利用localStorage记录顺序
                   localStorage.NavItemArr = NavItemArr;
               }
           });
           $(".al_4 .nav_item").disableSelection();
           
           // 读取数据
           var localNavItemsArr = localStorage.NavItemsArr;
           var localNavItemArr = localStorage.NavItemArr;
               //如果有localst记录则，按照这个进行排序元素
               if(localNavItemsArr){
                   var resNavItemsArr = localNavItemsArr.split(',');
                   var NavItemsUl = $('.al_4 .tab_con');
                   //li 数组
                   for(var i = 0;i < resNavItemsArr.length;i++){
                       // console.log(resArr[i])
                       NavItemsUl.append($("#" + resNavItemsArr[i]));
                   }
               }
               if ( localNavItemArr ) {
                   var resNavItemArr = localNavItemArr.split(',');
                   var NavItemUl = $('.al_4 .nav_item');
                   for(var i = 0;i < resNavItemArr.length;i++){
                       // console.log(resArr[i])
                       NavItemUl.append($("#" + resNavItemArr[i]));
                   }
               }
    },
}