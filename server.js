// text-server
// the idea is that I have a library of commonly-used texts
// for various projects
// and get them from one service, and they all get more texts.
// http://expressjs.com/starter/hello-world.html

//  load http://localhost:3000/ in a browser to see the output.

/* TODO: serve up meta-data
 the meta-data will be useful for searching, down the road.
 ... yeah... maybe
 title
 author
 tags (genre, etc)
 copyright [THERE SHOULDN'T BE MUCH OF ONE]
 source
 length
 */

var express = require('express');
var app = express();
var router = express.Router();
var lib = require('./library.js');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/text', function (req, res) {
    // this is a horrible example
    var text = '[no text retrieved from library]';
    // var lib = getLibrary();
    if (lib && lib.length > 0) {
        text = lib[0].text.replace(/\n/ig, '<br/>');
    }
    res.send(text);
});

router.route('/titles')
    .get(function(req, res) {
        // TODO: get all titles from the lib
        var text = [];
        // var lib = getLibrary();
        if (lib && lib.length > 0) {
            for (var item in lib) {
                text.push(lib[item].title);
            }
        }
        res.json({ titles: text });
    });

router.route('/title/:item_title')
    .get(function(req, res) {
        // var lib = getLibrary();
        var item = { message: 'title not found' };
        console.log(req.params);
        console.log(req.params.item_title);
        // console.log(req.body);
        // console.log('title: ', req.body.title);
        // console.log('request: ', req);
        for (var i in lib) {
            console.log(lib[i].title, req.params.item_title);
            if (lib[i].title.toLowerCase() === req.params.item_title.toLowerCase()) {
                item = lib[i];
                break;
            }
        }
        res.json(item);
    });


app.use('/api', router);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
