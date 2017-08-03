var expect = require('chai').expect;
var request = require('supertest');

var mongoose = require('mongoose');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

var app;

before(function(done) {
	mockgoose.prepareStorage().then(function() {
		mongoose.createConnection('mongodb://localhost/FoodDb', function(err) {
			done(err);
		});
    app = require('../server');
	});
});

describe('Food Routes', function() {
  it('Should save a Food', function(done) {
    request(app)
      .post('/foods')
      .send({
        name: 'name',
        restaurant: 'restaurant',
        calories: 9000
      })
      .end(function(err, res) {
        if(err) return done(err);
        expect(err).to.equal(null);
        expect(res.body.name).to.equal('name');
        expect(res.body.restaurant).to.equal('restaurant');
        expect(res.body.calories).to.equal(9000);
        expect(res.body._id).to.be.an('String');
        done();
      });
  });
});
