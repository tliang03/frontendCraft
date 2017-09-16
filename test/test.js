var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('views', function() {
  it('should list ALL search on /one GET', function(done) {
  	chai.request(server)
	    .get('/one')
	    .end(function(err, res){
	      res.should.have.status(200);
	      done();
    });
  });

  it('should list ALL search on /second GET', function(done) {
  	chai.request(server)
	    .get('/second')
	    .end(function(err, res){
	      res.should.have.status(200);
	      done();
    });
  });
});