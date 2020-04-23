var expect = require('chai').expect;
var request = require('request');

describe('App test', function() {
    describe('Hello', function() {
        it('Test', function(done){
            request('http://localhost:8080', function(error, response , body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
        
        it('check response', function(done) {
            request('http://localhost:8080' , function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        
        it('not found', function(done) {
            request('http://localhost:8080/login' , function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});
