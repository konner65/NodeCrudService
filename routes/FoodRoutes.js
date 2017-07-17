module.exports = function(app) {
  var foodController = require('../controllers/FoodController');

  //Routes
  app.route('/foods')
    .get(foodController.getFoods)
    .post(foodController.addFood);
    console.log("foods endpoint ready");

  /*
    .get(foodController.getfood)
    .put(foodController.updatefood)
    .delete(foodController.deletefood);
    */
};
