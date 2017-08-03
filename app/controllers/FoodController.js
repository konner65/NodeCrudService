var foodService = require('../services/FoodService.js');

module.exports = function(app) {

  // GET /foods
  app.route('/foods').get((req, res) => {
    if (req.query.name) {
      foodService.getFoodsWithName(req, res);
    }
    else{
      foodService.getAllFoods(req, res);
    }
  });

  // POST /foods
  app.route('/foods').post((req, res) => {
    foodService.saveFood(req, res);
  });

  // GET /foods/:id
  app.route('/foods/:id').get((req, res) => {
    foodService.getFoodWithId(req, res);
  });

  // PUT /foods/:id
  app.route('/foods/:id').put((req, res) => {
    foodService.updateFood(req, res);
  });

  // DELETE /foods/:id
  app.route('/foods/:id').delete((req, res) => {
    foodService.deleteFood(req, res);
  });

};
