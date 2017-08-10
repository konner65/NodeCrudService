var expect = require('chai').expect;
var request = require('supertest');

describe('Reading Foods', function() {

	it('GET /foods gets all Foods in database', function(done) {
		var app = require('../server');
		request(app)
			.get('/foods')
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				expect(res.body.length).to.equal(2);
				expect(res.body[0]._id).to.equal("111111111111111111111111");
				expect(res.body[0].name).to.equal("name 1");
				expect(res.body[0].restaurant).to.equal("restaurant 1");
				expect(res.body[0].calories).to.equal(1);
				expect(res.body[1]._id).to.equal("222222222222222222222222");
				expect(res.body[1].name).to.equal("name 2");
				expect(res.body[1].restaurant).to.equal("restaurant 2");
				expect(res.body[1].calories).to.equal(2);
				done();
			});
	});

	it('GET /foods?name={name} gets all Foods with name specified in query param', function(done) {
		var app = require('../server');
		request(app)
			.get('/foods?name=name 1')
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				expect(res.body.length).to.equal(1);
				expect(res.body[0]._id).to.equal("111111111111111111111111");
				expect(res.body[0].name).to.equal("name 1");
				expect(res.body[0].restaurant).to.equal("restaurant 1");
				expect(res.body[0].calories).to.equal(1);
				done();
			});
	});

	it('GET /foods/{id} gets Food with id specified in url', function(done) {
		var app = require('../server');
		request(app)
			.get('/foods/111111111111111111111111')
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				expect(res.body.length).to.equal(1);
				expect(res.body[0]._id).to.equal("111111111111111111111111");
				expect(res.body[0].name).to.equal("name 1");
				expect(res.body[0].restaurant).to.equal("restaurant 1");
				expect(res.body[0].calories).to.equal(1);
				done();
			});
	});

});
