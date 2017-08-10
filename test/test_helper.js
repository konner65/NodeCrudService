var mongoose = require('mongoose');
var Food = require('../app/models/FoodModel');

var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

before(function(done) {
	// mockgoose is used to set up a mock MongoDB
	mockgoose.prepareStorage().then(function() {
		mongoose.createConnection('mongodb://localhost/FoodDb', function(err) {
			done(err);
		});
	});
});

beforeEach(function(done) {
	Food.remove({}, function(err) {}); //clear out contents of mock DB

	var foods = [
		{
			_id: "111111111111111111111111",
			name: "name 1",
			restaurant: "restaurant 1",
			calories: 1
		},
		{
			_id: "222222222222222222222222",
			name: "name 2",
			restaurant: "restaurant 2",
			calories: 2
		}
	];

	Food.create(foods, function (err, results) {
			if (err) return handleError(err);
	});

	done();
});
