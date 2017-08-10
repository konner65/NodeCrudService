var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  _id: {
     type: Schema.ObjectId,
     auto: true
   },
  name: {
    type: String,
    Required: 'please enter the name of the food'
  },
  restaurant: {
    type: String,
  },
  calories: {
    type: Number,
  }
});

module.exports = mongoose.model('Food', FoodSchema);
