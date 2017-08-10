var expect = require('chai').expect;
var request = require('supertest');

describe('Creating a Food', function() {

	it('PUT /foods/{id} updates the Food with the id specified in url', function(done) {
		var app = require('../server');
		request(app)
			.put('/foods/111111111111111111111111')
			.send({
        name: 'Test Food Updated',
        restaurant: 'Test Restaurant Updated',
        calories: 1200
      })
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				expect(res.body.name).to.equal('Test Food Updated');
				expect(res.body.restaurant).to.equal('Test Restaurant Updated');
				expect(res.body.calories).to.equal(1200);
				expect(res.body._id).to.equal("111111111111111111111111");
				done();
			});
	});

	it('PUT /foods/{id} sends error message on failure', function(done) {
		var app = require('../server');
		request(app)
			.put('/foods/badid')
			.send({
				name: 'Test Food Updated',
				restaurant: 'Test Restaurant Updated',
				calories: 1200
			})
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				expect(res.body.message).to.be.an('String');
				expect(res.body.name).to.equal("CastError");
				done();
			});
	});

});
