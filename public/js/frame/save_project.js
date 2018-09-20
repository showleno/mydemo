var save_project = {
        el: '.bg-0',
        init: function(){
            this.bindEvent();
        },
        bindEvent: function(){
            var me = this;
            $(this.el).on('click', '.al_2  .tab_name p a', function(e){
                me.tabNav(e);
            })
            $(this.el).on('click', '.al_2  .cover_scheme', function(e){
                me.clickSave(e);
                me.updateDom(e);
            })
        },
        clickSave: function(e){
            var target = e.srcElement ? e.srcElement : e.target;
            e.preventDefault();
            var title = $('.new_programme').val();
            if ( this.isHasTitle(title) ) {
                this.submit();
            }else {
                console.log('请填写标题');
            }
        },
        isHasTitle: function(title){
            return title == '' ? false : true  
        },
        getDate: function(){
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                        + " " + date.getHours() + seperator2 + date.getMinutes()
                        + seperator2 + date.getSeconds();
                return currentdate;
        },
        updateDom: function(e){
            var target = e.srcElement ? e.srcElement : e.target;
            console.log(target)
            var element = $(target).parents('td').siblings('td');
            var text = element.find('.new_programme').val();
            var dateStr = this.getDate();
            var tpl = '';
            tpl += '<tr><td>';
            tpl += '<div class="name_edi">';
            tpl += '<p><a><i class="fa fa-edit"></i></a>'+text+'</p>';
            tpl += '<div class="name_input" style="display:none;">';
            tpl += '<input type="text">';
            tpl += '<a class="b_1"><i class="fa fa-check"></i></a><a class="b_2"><i class="fa fa-times"></i></a>';
            tpl += '</div></div>';
            tpl += '</td>';
            tpl += '<td class="fontSize12">'+dateStr+'</td>';
            tpl += '<td><div class="edi_scheme"><a class="cover_scheme">覆盖</a><a class="del_scheme bg_283c50">删除</a></div></td>';
            tpl += '</tr>';
            // 添加到最新
            $('.al_2 .scheme_table .bg_ffece6').after(tpl);
        },
        // 保存数据
        collectionJson: function(){
            var contentJson = [];
            var title = $('.al_2').find('.new_programme').val();
            $('.field_wra[type=field]').each( function(idx, ele){
                var arr = [];
                var field = $(this);
                contentJson.push(arr);

                field.find('.column').each(function(idx, ele){
                    var json = {};

                    if ( $(this).find('.edi').size() > 1 ) {
                        json = {
                            wid : $(this).attr('data-wid'),
                            name: $(this).find('.edi:first-child').attr('data-name'),
                            line: $(this).find('.edi:first-child').attr('data-line'),
                            type: $(this).find('.edi:first-child').attr('data-type'),
                            columnId: $(this).find('.edi:first-child').attr('data-columnId'),
                            count: $(this).find('.edi:first-child').attr('data-count'),
                            activityType : $(this).find('.edi:first-child').attr('data-activityType'),
                            wkType: $(this).find('.edi:first-child').attr('data-wkType'),
                            postId: $(this).find('.edi:first-child').attr('data-postId'),
                            lineTwo: {
                                name: $(this).find('.edi:last-child').attr('data-name'),
                                type: $(this).find('.edi:last-child').attr('data-type'),
                                line: $(this).find('.edi:last-child').attr('data-line'),
                                columnId: $(this).find('.edi:last-child').attr('data-columnId'),
                                count: $(this).find('.edi:last-child').attr('data-count'),
                                activityType : $(this).find('.edi:last-child').attr('data-activityType'),
                                wkType: $(this).find('.edi:last-child').attr('data-wkType'),
                                postId: $(this).find('.edi:last-child').attr('data-postId'),
                            } 
                        }
                    }else {
                        json = {
                            wid : $(this).attr('data-wid'),
                            name: $(this).find('.edi:first-child').attr('data-name'),
                            line: $(this).find('.edi:first-child').attr('data-line'),
                            type: $(this).find('.edi:first-child').attr('data-type'),
                            columnId: $(this).find('.edi:first-child').attr('data-columnId'),
                            count: $(this).find('.edi:first-child').attr('data-count'),
                            activityType : $(this).find('.edi:first-child').attr('data-activityType'),
                            wkType: $(this).find('.edi:first-child').attr('data-wkType'),
                            postId: $(this).find('.edi:first-child').attr('data-postId'),
                        }
                    }
                    arr.push(json);

                })
            })
            return {
                planName : title,
                planArr: contentJson
            }
        },
        submit: function(title){
            var data = { isocId: 1, contentjson: JSON.stringify(this.collectionJson(title)) };
            console.log(data, 111);
            // this.sendAjax('http://www.daweiyuan.cn/br-isoc/drag/savejson', data);
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
                        console.log('保存成功')
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
        // tab切换
        tabNav: function(e) {
            var target = e.srcElement ? e.srcElement : e.target;
            $(target).parent().addClass('on').siblings().removeClass('on');
            // 点击tab切换
            var idx = $(target).parent().index();
            $(target).parents('.tab_con').find('.tab_info').eq(idx).addClass('active').siblings().removeClass('active'); 
        }
}