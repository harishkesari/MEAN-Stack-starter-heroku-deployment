var express = require('express');
var path = require('path');
var http = require('http');


var app = express();


app.use(express.static(__dirname + '/dist'));


app.get('/*', function (req, res) {

    res.redirect(__dirname + '/dist/index.html');
});

var port = process.env.PORT || 80;
app.set('port', port);






var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server Running ...' + server.address().port)
})




