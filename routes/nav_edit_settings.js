var express = require('express');
var request = require('request');
var router = express.Router();


	// 渲染首页ejs
router.get('/', function(req, res, next) {
	  
   request("http://www.daweiyuan.cn/br-isoc/drag/getjson?isocId=1",function(error, response, body){
            if (!error && response.statusCode == 200) {
              var resjson=JSON.parse(body);

	            res.render('index/nav_edit_settings', {
                  "navjson":resjson.data.navjson,
                });

          }

  });

});


module.exports = router;
