var mongoose = require('mongoose');
var Food = mongoose.model('Food');

exports.addFood = (req, res) => {
  var myData = new Food(req.body);
  myData.save()
  .then(item => {
  res.send("food saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 };

 exports.getFoods = (req, res) => {
   Food.find({}, function(err, food) {
     if (err)
       res.send(err);
     res.json(food);
   });
 };
