var express = require('express');
var request = require('request');
var router = express.Router();


	// 渲染首页ejs
router.get('/', function(req, res, next) {
	  
   request("https://www.easy-mock.com/mock/5b0618bb8457376b3b8e8c80/dragdata/getjson",function(error, response, body){
            if (!error && response.statusCode == 200) {
              var resjson=JSON.parse(body);

	            res.render('index/index', {
                "topjson":resjson.data.topjson,
                  "bannerjson":resjson.data.bannerjson,
                  "footjson":resjson.data.footjson,
                  "navjson":resjson.data.navjson,
                  "logojson":resjson.data.logojson,
                  "contentjson":resjson.data.contentjson,
                  "titlejson":resjson.data.titlejson,
                  "commonjson":resjson.data.commonjson,
                  "slidejson":resjson.data.slidejson,
                  "contentjson":resjson.data.contentjson,
                });

          }

  });

});


module.exports = router;
