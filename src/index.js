/* @flow */

'use strict';

var express      = require('express');
var bodyParser   = require('body-parser');
var multer       = require('multer');
var morgan       = require('morgan');
var http         = require('http');
var socketio     = require('socket.io');

var app    = express();
var server = http.Server(app);
var io     = socketio(server);
var upload = multer();

app.use(express.static(__dirname + '/../build'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', function (socket) {
  console.log('*** USER HAS ENTERED :) ***');
  socket.on('disconnect', function () {
    console.log('*** USER HAS LEFT :( ***');
  });

  socket.on('chat message', function(msg) {
    console.log('USER SAID: ', msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000);

app.get('/sum/:x/:y', function (req, res) {
  var x = req.params.x * 1;
  var y = req.params.y * 1;
  res.send({ sum: x * y });
});