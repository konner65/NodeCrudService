var mongoose = require('mongoose');
var Food = mongoose.model('Food');
var foodService = require('../services/FoodService')

/**
 * Used to retrieve all Foods in mongoDB
 * @param  req
 * @param  res
 * @return List of Food objects currently in mongoDB
 */
 exports.getFoods = (req, res) => {
   if (req.query.name) {
     foodService.getFoodsWithName(req, res);
   }
   else{
     Food.find({}, function(err, food) {
       if (err){
         res.send(err);
       }
       res.json(food);
     });
   }
 };
 
/**
 * used to post Food object in mongoDB
 * @param req Takes request body of Food JSON object
 * @param res Either sends out positive message or http error code
 */
exports.addFood = (req, res) => {

  var food = new Food(req.body);

  food.save().then(item => {
    res.send(food);
  }).catch(err => {
    res.status(400).send("unable to save to database");
  });

 };

/**
 * gets food in database with a given id
 * @param  req
 * @param  res
 * @return List containing one item, which corresponds to the
 *         Food in mongoDB with the given id
 */
 exports.getFoodWithId = (req, res) => {

   var id = req.params.id;

   Food.find({ '_id': id }, function(err, food) {
     if(err){
       res.send(err);
     }
     res.json(food);
   });
 };

/**
 * used to update Food with given id in mongoDB
 * @param  req
 * @param  res
 * @return Json object with details of object that has been updated
 */
 exports.updateFood = (req, res) => {
   var id = req.params.id;

   // before running the update, we need to delete the id to avoid errors
   delete req.body._id;

   Food.update({_id: id}, req.body, {upsert: true}, (err) => {
     if (err) res.send(err);
     res.send(req.body);
   });
 };

/**
 * used to delete Food with given id from mongoDB
 * @param  req
 * @param  res
 * @return message corresponding to an error or a successful delete
 */
 exports.deleteFood = (req, res) => {
   var id = req.params.id;

   Food.remove({ _id: id }, (err) => {
     if (err) res.send(err);
     else res.send("successfully deleted record " + id);
   });
 };
