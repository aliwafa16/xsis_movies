// Import the dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Movies", () => {
  describe("GET /movies", () => {
    // Test to get all Movies record
    it("Test get all data movie", (done) => {
      chai
        .request(app)
        .get("/movies")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test to get single movie record
    it("Test get movie by id", (done) => {
      const id = 16;
      chai
        .request(app)
        .get(`/movies/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test to get single movie record
    it("Test get movie by id not found", (done) => {
      const id = 5;
      chai
        .request(app)
        .get(`/movies/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /movies", () => {
    it("Add data movie", (done) => {
      chai
        .request(app)
        .post("/movies")
        .send({
          title: (Math.random() + 1).toString(36).substring(7),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere pretium leo, eu lacinia massa vehicula vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id mi tincidunt mi porta convallis. Duis eu arcu aliquam, commodo lectus a, mollis dui. Ut fermentum, tellus non auctor dictum, dui quam mattis orci, id fermentum urna urna at sem. Aliquam suscipit et arcu vitae congue. Donec molestie vestibulum neque gravida rutrum. Nulla aliquam ex vitae faucibus commodo. Ut ut elit nec orci bibendum dignissim. In placerat volutpat justo, id placerat quam imperdiet pellentesque. Nam malesuada lectus eu volutpat feugiat.",
          rating: "3.0",
          image: "",
        })
        .end((req, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Cannot post movie because title is already", (done) => {
      chai
        .request(app)
        .post("/movies")
        .send({
          title: "Pengabdi Setan",
          description: "Film horor karya joko anwar yang liris pada tahun 2017",
          rating: "8.0",
          image: "",
        })
        .end((req, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Cannot post movie because title or description or rating is empty", (done) => {
      chai
        .request(app)
        .post("/movies")
        .send({
          title: "",
          description: "",
          rating: "",
          image: "",
        })
        .end((req, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("PATCH /movies", () => {
    it("Update data movie ", (done) => {
      let id = 18;
      chai
        .request(app)
        .patch(`/movies/${id}`)
        .send({
          title: "Transformer 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere pretium leo, eu lacinia massa vehicula vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id mi tincidunt mi porta convallis. Duis eu arcu aliquam, commodo lectus a, mollis dui. Ut fermentum, tellus non auctor dictum, dui quam mattis orci, id fermentum urna urna at sem. Aliquam suscipit et arcu vitae congue. Donec molestie vestibulum neque gravida rutrum. Nulla aliquam ex vitae faucibus commodo. Ut ut elit nec orci bibendum dignissim. In placerat volutpat justo, id placerat quam imperdiet pellentesque. Nam malesuada lectus eu volutpat feugiat.",
          rating: "3.0",
          image: "",
        })
        .end((req, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Cannot update because id not found ", (done) => {
      let id = 1;
      chai
        .request(app)
        .patch(`/movies/${id}`)
        .send({
          title: "Transformer 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere pretium leo, eu lacinia massa vehicula vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id mi tincidunt mi porta convallis. Duis eu arcu aliquam, commodo lectus a, mollis dui. Ut fermentum, tellus non auctor dictum, dui quam mattis orci, id fermentum urna urna at sem. Aliquam suscipit et arcu vitae congue. Donec molestie vestibulum neque gravida rutrum. Nulla aliquam ex vitae faucibus commodo. Ut ut elit nec orci bibendum dignissim. In placerat volutpat justo, id placerat quam imperdiet pellentesque. Nam malesuada lectus eu volutpat feugiat.",
          rating: "3.0",
          image: "",
        })
        .end((req, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("DELETE /movies", () => {
    it("Delete data movie", (done) => {
      let id = 25;
      chai
        .request(app)
        .delete(`/movies/${id}`)
        .end((req, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Cannot Delete data movie because id not found", (done) => {
      let id = 22;
      chai
        .request(app)
        .delete(`/movies/${id}`)
        .end((req, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
