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
var upload = multer();

app.use(express.static(__dirname + '/../build'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(3000);

app.post('/batter', function (req, res) {
  console.log('batter', req.body);
  var firstname = req.body.firstname;
  var lastname  = req.body.lastname;
  var balls     = req.body.balls;
  var strikes   = req.body.strikes;
  var outs      = req.body.outs;

  res.redirect('/?loc=76.332423');
  // var x = req.params.x * 1;
  // var y = req.params.y * 1;
  // res.send({ sum: x * y });
});