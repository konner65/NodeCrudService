//use express
var express = require('express');
var app = express();

//MongoDB config
var mongoose = require('mongoose');
var Food = require('./app/models/FoodModel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FoodDb', { useMongoClient: true });

//Parses incoming request bodies. Available under the req.body property.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes all /Foods endpoints
var routeFoods = require('./app/controllers/FoodController');
routeFoods(app);

//Deploys application onto process.env.PORT or port 3000
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('App listening at port %s', port);
});

module.exports = app;
