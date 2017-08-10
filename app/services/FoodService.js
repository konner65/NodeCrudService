var mongoose = require('mongoose');
var Food = mongoose.model('Food');

// Gets all Food objects stored in MongoDB
exports.getAllFoods = (req, res) => {
  Food.find({}, function(err, food) {
    if (err){
      res.send(err);
    }
    res.json(food);
  });
};

// Gets Food objects with given name stored in MongoDB
exports.getFoodsWithName = (req, res) => {
  var foodName = req.query.name;

  Food.find({ 'name': foodName }, function(err, food) {
    if (err){
      res.send(err);
    }
    res.json(food);
  });
};

// Saves new Food object in MongoDB
exports.saveFood = (req, res) => {
  var food = new Food(req.body);

  food.save().then(item => {
    res.send(food);
  }).catch(err => {
    res.status(400).send(err);
  });
};

// Gets Food object with specified ID stored in MongoDB
exports.getFoodWithId = (req, res) => {
  var id = req.params.id;

  Food.find({ '_id': id }, function(err, food) {
    if(err){
      res.send(err);
    }
    res.json(food);
  });
};

// Updates Food object with given ID in MongoDB
exports.updateFood = (req, res) => {
  var id = req.params.id;

  // before running the update, we need to delete the id to avoid errors
  delete req.body._id;

  Food.update({_id: id}, req.body, {upsert: true}, (err) => {
    if (err) res.send(err);
    req.body._id=id;
    res.send(req.body);
  });
};

// Deletes Food object with given ID from MongoDB
exports.deleteFood = (req, res) => {
  var id = req.params.id;

  Food.remove({ _id: id }, (err) => {
    if (err) res.send(err);
    else res.send({
      "message": "successfully deleted record " + id
    });
  });
};
