module.exports = function(app) {

  var foodController = require('../controllers/FoodController');

  app.route('/foods').get(foodController.getFoods);
  console.log("mapped getFoods() to GET /foods");

  app.route('/foods').post(foodController.addFood);
  console.log("mapped postFood() to POST /foods");

  app.route('/foods/:id').get(foodController.getFoodWithId);
  console.log("mapped getFoodWithId() to GET /foods/{id}");

  app.route('/foods/:id').put(foodController.updateFood);
  console.log("mapped updateFood() to PUT /foods/{id}");

  app.route('/foods/:id').delete(foodController.deleteFood);
  console.log("mapped deleteFood() to DELETE /foods/{id}");

};
