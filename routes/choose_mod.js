var express = require('express');
var request = require('request');
var router = express.Router();


	// 渲染首页ejs
router.get('/', function(req, res, next) {
	  
   request("http://www.daweiyuan.cn/br-isoc/drag/getcolumns?isocId=1&token=1",function(error, response, body){
            if (!error && response.statusCode == 200) {
              var resjson=JSON.parse(body);
              console.log(resjson)
	            res.render('frame/choose_mod', {
                    columnDTO: resjson.data,
                });

          }

  });

});


module.exports = router;
