var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('views', function() {
  it('should list ALL search on /hello GET', function(done) {
  	chai.request(server)
	    .get('/hello')
	    .end(function(err, res){
	      res.should.have.status(200);
	      done();
    });
  });

  it('should list ALL search on /goodbye GET', function(done) {
  	chai.request(server)
	    .get('/goodbye')
	    .end(function(err, res){
	      res.should.have.status(200);
	      done();
    });
  });
});