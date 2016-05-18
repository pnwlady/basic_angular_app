const chai = require('chai');
const expect = chai.expect();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
const mongoose = require('mongoose');

var port = process.env.PORT = 4030;
process.env.MONGO_URI = 'mongodb://localhost/rabbit_test_db';
require(__dirname + '/../server/server');

describe('the POST method', () => {
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
    });
    done();
  });

  it('should build a rabbit', (done) => {
    request('localhost:' + port)
    .post('/api/rabbits')
    .send({ name: 'Randall', variety: 'lop', food: 'celery' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.name).to.eql('Randall');
      expect(res.body.variety).to.eql('lop');
      expect(res.body.food).to.eql('celery');
    });
    done();
  });
});

describe('the GET method', () => {
  it('should get all the rabbits', (done) => {
    request('localhost:' + port)
    .get('/api/rabbits')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.eql(true);
      expect(res.body.length).to.eql(0);
    });
    done();
  });
});
