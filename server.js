var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./models/FoodModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FoodDb', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/FoodRoutes');
routes(app);

app.listen(port);


console.log('Food RESTful API server started on: ' + port);
