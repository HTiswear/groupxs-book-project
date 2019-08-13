
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
var path = require('path');
let server = require('../app');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);



describe('Harry Potter Calculation Tests', () => {

    

	
	it("GET 5 book test", function (done) {
            this.timeout(10000);
            var url = '/';
            chai.request('http://localhost:3001').get(url)
				.query({book1: 1, book2: 1, book3: 1, book4: 1, book5: 1}) 
                .end((err, res) => {
                    if (err) {
                        should.not.exist(err);
                        done(err);
                    } else {
                        let result = res.text;
						let jsonObject = JSON.parse(result);
						expect(jsonObject.totalCost).to.equal(30);
                        done();
                    }
                });
        });
	
	it("GET 5 book test with multiple copies of a book", function (done) {
            this.timeout(10000);
            var url = '/';
            chai.request('http://localhost:3001').get(url)
				.query({book1: 2, book2: 2, book3: 2, book4: 1, book5: 1}) 
                .end((err, res) => {
                    if (err) {
                        should.not.exist(err);
                        done(err);
                    } else {
                        let result = res.text;
						let jsonObject = JSON.parse(result);
						expect(jsonObject.totalCost).to.equal(51.60);
                        done();
                    }
                });
        });
	
	it("GET 4 book test with multiple copies of a book", function (done) {
            this.timeout(10000);
            var url = '/';
            chai.request('http://localhost:3001').get(url)
				.query({book1: 3, book2: 1, book3: 1, book4: 1, book5: 0}) 
                .end((err, res) => {
                    if (err) {
                        should.not.exist(err);
                        done(err);
                    } else {
                        let result = res.text;
						let jsonObject = JSON.parse(result);
						expect(jsonObject.totalCost).to.equal(41.6);
                        done();
                    }
                });
        });
		
		it("GET 3 book test with multiple copies of a book", function (done) {
            this.timeout(10000);
            var url = '/';
            chai.request('http://localhost:3001').get(url)
				.query({book1: 1, book2: 0, book3: 2, book4: 1, book5: 0}) 
                .end((err, res) => {
                    if (err) {
                        should.not.exist(err);
                        done(err);
                    } else {
                        let result = res.text;
						let jsonObject = JSON.parse(result);
						expect(jsonObject.totalCost).to.equal(29.6);
                        done();
                    }
                });
        });
		
		it("GET 2 book test with multiple copies of a book", function (done) {
            this.timeout(10000);
            var url = '/';
            chai.request('http://localhost:3001').get(url)
				.query({book1: 1, book2: 0, book3: 0, book4: 0, book5: 7}) 
                .end((err, res) => {
                    if (err) {
                        should.not.exist(err);
                        done(err);
                    } else {
                        let result = res.text;
						let jsonObject = JSON.parse(result);
						expect(jsonObject.totalCost).to.equal(63.2);
                        done();
                    }
                });
        });
		
		it("No books!", function (done) {
            this.timeout(10000);
            var url = '/';
            chai.request('http://localhost:3001').get(url)
				.query({book1: 0, book2: 0, book3: 0, book4: 0, book5: 0}) 
                .end((err, res) => {
                    if (err) {
                        should.not.exist(err);
                        done(err);
                    } else {
                        let result = res.text;
						let jsonObject = JSON.parse(result);
						expect(jsonObject.totalCost).to.equal(0);
                        done();
                    }
                });
        });
	
});
