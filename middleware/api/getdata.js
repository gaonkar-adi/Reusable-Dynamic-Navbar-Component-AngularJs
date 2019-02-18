var express = require('express');
var router = express.Router();
var request = require('request');

var baseurl = 'http://ui-grid.info/data/';

router.get('/', (req, res) => {
    var url = baseurl + req.query.catagory;
    request.get(url, function (error, response, body) {
        if (response.statusCode == '404' || response.statusMessage == 'Not Found') {
            res.status(404).send([]);
        } else {
            res.send(response.body);
        }
    });
});

module.exports = router;

