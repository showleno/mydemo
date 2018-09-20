var choose_mod = {
    el: '#right_content',
    // 初始化js
    init: function() {
        // 滚动条
        $('#a5').scrollbar({});
        $('#a8').scrollbar({});
        this.bindEvent();
    },
    bindEvent: function(){
        var me = this;
        $(this.el).on('click', '.right_number_4 .mod_all input', function(e){
            me.addMod(e);
        })
        .on('click', '.right_number_4  .mod_line .add_wrap .isAdd', function(e){
            me.addSupMod(e);
        })
        // 先禁止辅助功能
        // $('.right_number_4  .line_num a').off('click').on('click', function(){
        //     // return false;
        // })
    },
    addSupMod: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var modName = $(target).siblings('.add').attr('data-mod-link');
        var tpl = '';
        console.log(modName)
        if ($(target).is(':checked')) {
            $('.editing').load('/newpc/'+modName, function(){
                $('.editing').removeClass('addMod').addClass('moveMod');
            });
        }else {
            tpl += '<div class="addModT_sty">'
            tpl += '<i></i>'
            tpl += '<p>添加栏目</p>'
            tpl += '</div>'
            // 再次点击就清除标题和内容，还原添加按钮
            $('.editing').addClass('addMod').html(tpl);
        }
    },
    // 点击某个模块就给正在编辑中的布局添加模块
    addMod: function(e){
        var target = e.srcElement ? e.srcElement : e.target;
        var modName = $(target).attr('data-mod');
        var type = $(target).attr('data-type') ? $(target).attr('data-type') : '' ;
        var name = $(target).attr('data-name') ? $(target).attr('data-name') : '' ;
        var columnid = $(target).attr('data-columnid') ? $(target).attr('data-columnid') : '' ;
        var count = $(target).attr('data-count') ? $(target).attr('data-count') : '' ;
        var activitytype = $(target).attr('data-activitytype') ? $(target).attr('data-activitytype') : '' ;
        var wktype = $(target).attr('data-wktype') ? $(target).attr('data-wktype') : '' ;
        var tpl = '';
        // $('.right_number_4 .mod_all input').not(target).removeAttr('checked','checked');
        if ($(target).is(':checked')) {
            $('.editing').load('/newpc/'+modName, function(){
                $('.editing').attr({
                        'data-type':type,
                        'data-name':name,
                        'data-columnid': columnid,
                        'data-count': count,
                        'data-activitytype': activitytype,
                        'data-wktype': wktype
                });
                $('.editing').removeClass('addMod').addClass('moveMod');
            });
        }else {
            tpl += '<div class="addModT_sty">'
            tpl += '<i></i>'
            tpl += '<p>添加栏目</p>'
            tpl += '</div>'
            // 再次点击就清除标题和内容，还原添加按钮
            $('.editing').addClass('addMod').html(tpl);
        }
    },
}