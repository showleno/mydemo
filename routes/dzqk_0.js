var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    request("http://www.daweiyuan.cn/br-isoc/drag/getdata?isocId=1&type=magzine&columnId=1&count=10",function(error, response, body){
            if (!error && response.statusCode == 200) {

              var resjson=JSON.parse(body);
                res.render('template/dzqk_0', { magazineList: resjson.magazineList });

          }

    });
 });


module.exports = router;
