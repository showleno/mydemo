var all_layout = {
    el: '#layout',
    init: function(){
        this.bindEvent();
    },
    bindEvent: function(){
        var me = this;
        // 点击增加布局
        $(this.el).on("click", ".line_con #a5 ul  li", function () {
            console.log($(this).attr('data-layout-type'))
            me.chooseLayout($(this).attr('data-layout-type'));
        })
        $('.al_3').on('click', '.allStyle ul li', function(){
            console.log($(this).attr('data-layout-type'))
            me.chooseLayout($(this).attr('data-layout-type'));
        })
        // 弹出二行布局
        $(this.el).on('click', '.typesetting_alert', function(){
                var this_idname = $(this).attr("data-layout-type"); 
                $("[typesetting='0']").removeClass("active");
                $(this_idname+"[typesetting='0']").addClass("active");
                $(".bg-0,.al_3").show();
        })
    },
    chooseLayout: function(eventDom) {
        // 通栏布局模版 -- 选择布局
            // 新增布局
            if( $('.frame .content').find('.changing').size() == 0 ) {
                $('.addLine').parents('.field_wra').before('<div class="wra_width980 field_wra " type="field"></div>')
                var prevDom = $('.addLine').parents('.field_wra').prev();
                prevDom.load('/newpc/layouts/'+eventDom+'.html', function(){
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
                $('.changing').load('/newpc/layouts/'+eventDom+'.html', function(){
                    console.log('添加成功')
                })
                
            }
    },
}