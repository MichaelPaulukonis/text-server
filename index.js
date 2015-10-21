// text-server
// the idea is that I have a library of commonly-used texts
// for various projects
// and get them from one service, and they all get more texts.
// http://expressjs.com/starter/hello-world.html

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

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/text', function (req, res) {
  res.send('Call me Ishmael.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});



