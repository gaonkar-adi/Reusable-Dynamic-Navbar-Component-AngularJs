var express = require('express');
var router = express.Router();
var fs = require('fs');

var basedir = './dummy_data/';

function writeUpdate(file, toSaveData, callback) {
    fs.writeFile(file, JSON.stringify(toSaveData), function(err) {
        if(err) {
            callback({error: true});
        } else {
            callback({error: false});
        }
    })
}

function updateFile(file, data, callback) {

    fs.exists(file, (exists) => {
        var count = 0;
        fs.readFile(file, 'utf8', function (err, content) {
            var d = JSON.parse(content);
            for (var i = 0; i < d.length; i++) {
                if (d[i].name == data.name) {
                    count++;
                    d[i].gender = data.gender;
                    d[i].age = data.age;
                    d[i].company = data.company;
                }
            }
            console.log(count);
            if (count > 0) {
                console.log(count, file);
                writeUpdate(file, d, function(status) {
                    //console.log(34,status);
                    callback(status);
                });
            } else {
                callback({status: 404, error: true});
            }
            
        });
    });
}

router.put('/', (req, res) => {
    var filedir = basedir + req.query.catagory;
    if (!req.body.name || !req.body.gender || !req.body.age || !req.body.company) {
        status = 400;
        resdata = "bad request";
    } else {
        updateFile(filedir, req.body, function(response) {
            console.log(response);
            if (response.error) {
                res.status(500).send("internal server error");
                return;
            } else if (response.status == 404) {
                res.status(404).send("not found");
                return;
            } else {
                res.status(200).send("ok");
            }
        });
    }
    //res.status(status).send(resdata);

});

module.exports = router;