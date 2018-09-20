var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    request("http://www.daweiyuan.cn/br-isoc/drag/getjson?isocId=1",function(error, response, body){
            if (!error && response.statusCode == 200) {
              
              var resjson=JSON.parse(body);

              res.render('template/news_0', {
                "contentjson":resjson.data.contentjson
              })

          }

    });
 });


module.exports = router;
