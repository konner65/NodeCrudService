module.exports = function(app) {

  var foodController = require('../controllers/FoodController');

  app.route('/foods')
    .get(foodController.getFoods)
    .post(foodController.addFood);
  console.log("mapped getFoods() to GET /foods");
  console.log("mapped postFood() to POST /foods");

  app.route('/foods/:id')
    .get(foodController.getFoodWithId)
    .put(foodController.updateFood)
    .delete(foodController.deleteFood);
  console.log("mapped getFoodWithId() to GET /foods/{id}");
  console.log("mapped updateFood() to PUT /foods/{id}");
  console.log("mapped deleteFood() to DELETE /foods/{id}");

};
