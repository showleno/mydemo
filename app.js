var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var frame = require('./routes/frame');
var index = require('./routes/index');
var content = require('./routes/content');
var nav_edit_settings = require('./routes/nav_edit_settings');
var nav_edit_style = require('./routes/nav_edit_style');
var dzqk_0 = require('./routes/dzqk_0');
var help_0 = require('./routes/help_0');
var jz_0 = require('./routes/jz_0');
var list_0 = require('./routes/list_0');
var news_0 = require('./routes/news_0');
var quanzi_0 = require('./routes/quanzi_0');
var slide_0 = require('./routes/slide_0');
var wenjuan_0 = require('./routes/wenjuan_0');
var wenku_0 = require('./routes/wenku_0');
var zydj_0 = require('./routes/zydj_0');
var img_0 = require('./routes/img_0');
var img_1 = require('./routes/img_1');
var img_2 = require('./routes/img_2');
var img_3 = require('./routes/img_3');
var img_4 = require('./routes/img_4');
var img_5 = require('./routes/img_5');
var apply_0 = require('./routes/apply_0');
var template_0 = require('./routes/template_0');
var template_1 = require('./routes/template_1');
var template_2 = require('./routes/template_2');
var template_3 = require('./routes/template_3');
var template_4 = require('./routes/template_4');

// 获取html
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);  
app.set('view engine', 'ejs');

// 读取资源
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/newpc/',express.static(path.join(__dirname, 'public')));

// 配置路由
app.use('/newpc/', frame);
app.use('/newpc/index', index);
app.use('/newpc/content', content);
app.use('/newpc/nav_edit_style', nav_edit_style);
app.use('/newpc/nav_edit_settings', nav_edit_settings);
app.use('/newpc/dzqk_0', dzqk_0);
app.use('/newpc/help_0', help_0);
app.use('/newpc/jz_0', jz_0);
app.use('/newpc/list_0', list_0);
app.use('/newpc/news_0', news_0);
app.use('/newpc/quanzi_0', quanzi_0);
app.use('/newpc/slide_0', slide_0);
app.use('/newpc/wenjuan_0', wenjuan_0);
app.use('/newpc/wenku_0', wenku_0);
app.use('/newpc/zydj_0', zydj_0);
app.use('/newpc/img_0', img_0);
app.use('/newpc/img_1', img_1);
app.use('/newpc/img_2', img_2);
app.use('/newpc/img_3', img_3);
app.use('/newpc/img_4', img_4);
app.use('/newpc/img_5', img_5);
app.use('/newpc/apply_0', apply_0);
app.use('/newpc/template_0', template_0);
app.use('/newpc/template_1', template_1);
app.use('/newpc/template_2', template_2);
app.use('/newpc/template_3', template_3);
app.use('/newpc/template_4', template_4);

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
  });
//   监听端口号
app.listen(3000, function(){
	console.log('正在监听3001端口')
})
  module.exports = app;