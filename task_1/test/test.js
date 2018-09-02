const chai = require("chai");
const chaiHttp = require("chai-http");

var app = require("../app");

const should = chai.should();

chai.use(chaiHttp);

describe("GET /", () => {
  it("Get success with code 200", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("status");
        res.body.status.should.equal("success");
        done();
      });
  });
});

describe("POST /data", () => {
  it("Post returns data back in result", done => {
    var testData = "testing_data";
    chai
      .request(app)
      .post("/data")
      .send({ data: testData })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("data");
        res.body.data.should.equal(testData);
        done();
      });
  });

  it("Get returns the data posted", done => {
    var testData = "testing_data";
    chai
      .request(app)
      .post("/data")
      .send({ data: testData })
      .then(() => {
        chai
          .request(app)
          .get("/data")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('data');
            res.body.data.should.equal(testData);
            done();
          });
      });
  });
});

