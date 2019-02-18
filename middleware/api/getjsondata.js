var express = require('express');
var router = express.Router();
var fs = require('fs');

var basedir = './dummy_data/';

function readjson(file, callback) {
    var filedir = basedir + file;
    fs.exists(filedir, (exists) => {
        fs.readFile(filedir, 'utf8', function (err, data) {
            if (err) {
                callback([]);
            } else {
                callback(data);
            }
        });
    });
}

router.get('/', (req, res) => {
    var file = req.query.catagory;
    readjson(file, function (data) {
        if (data) {
            res.send(data);
        }
    });
});

module.exports = router;

