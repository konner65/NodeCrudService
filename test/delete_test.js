var expect = require('chai').expect;
var request = require('supertest');

describe('Deleting a food', function() {

	it('/DELETE /foods/{id} deletes the Food with the id specified in the url', function(done) {
		var app = require('../server');
    request(app)
      .delete('/foods/111111111111111111111111')
      .end(function(err, res) {
        if(err) return done(err);
        expect(err).to.equal(null);
				var expectedResponse =
					"successfully deleted record 111111111111111111111111";
				expect(res.body.message).to.equal(expectedResponse);
        done();
      });
  });

	it('/DELETE /foods/{id} sends error message on failure', function(done) {
		var app = require('../server');
		request(app)
			.delete('/foods/badid')
			.end(function(err, res) {
				if(err) return done(err);
				expect(err).to.equal(null);
				var expectedResponse =
					"successfully deleted record badid";
				expect(res.body.message).to.not.equal(expectedResponse);
				expect(res.body.message).to.be.an('String');
				expect(res.body.name).to.equal("CastError");
				done();
			});
	});

});
