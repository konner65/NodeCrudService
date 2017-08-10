var expect = require('chai').expect;
var request = require('supertest');

describe('Creating a Food', function() {

	it('/POST /foods creates a new Food', function(done) {
    var app = require('../server');
    request(app)
      .post('/foods')
      .send({
        name: 'Test Food',
        restaurant: 'Test Restaurant',
        calories: 9001
      })
      .end(function(err, res) {
        if(err) return done(err);
        expect(err).to.equal(null);
        expect(res.body.name).to.equal('Test Food');
        expect(res.body.restaurant).to.equal('Test Restaurant');
        expect(res.body.calories).to.equal(9001);
        expect(res.body._id).to.be.an('String');
        done();
      });
  });

	it('/POST /foods creates a new Food', function(done) {
		var app = require('../server');
		request(app)
			.post('/foods')
			.send({
				_id: 'badid',
				name: 'Test Food',
				restaurant: 'Test Restaurant',
				calories: 9001
			})
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				expect(res.body.message).to.be.an('String');
				expect(res.body.name).to.equal('ValidationError');
				done();
			});
	});

});
