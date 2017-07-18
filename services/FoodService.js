var mongoose = require('mongoose');
var Food = mongoose.model('Food');

/**
 * used to set up a query parameter that gets all Foods with given name
 * @param  req
 * @param  res
 * @return List of all Foods in mongoDB with given name
 */
exports.getFoodsWithName = (req, res) => {

  var foodName = req.query.name;

  Food.find({ 'name': foodName }, function(err, food) {
    if (err){
      res.send(err);
    }
    res.json(food);
  });
};
