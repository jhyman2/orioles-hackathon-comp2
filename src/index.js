/* @flow */

'use strict';

var express      = require('express');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var http         = require('http');

var app    = express();
var server = http.Server(app);

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

  var a = Math.floor(Math.random() * 200) - 100;
  var b = Math.floor(Math.random() * 200) - 100;

  res.redirect('/?loc=' + a.toString() + ',' + b.toString());
});