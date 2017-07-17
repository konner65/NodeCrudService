var Schema = mongoose.Schema;

var FoodSchema = new Schema({
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
