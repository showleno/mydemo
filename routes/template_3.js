var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
	// 渲染首页ejs
    res.render('template/new_template/template_3', {
    });

})
module.exports = router;