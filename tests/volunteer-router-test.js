const tokenStore = require("./keymaster");
const request = require("supertest");
const server = require("../server/api-server");

module.exports = () =>
  describe("003: Volunteer", function() {
    let testToken = tokenStore.getInstance();

    it("puts the token on it's skin", function() {
      expect(testToken.tokens.length > 0);
    });

    describe("POST /api/volunteer", function() {
      it("should return an 401 when Unauthorized to create a volunteer profile", done => {
        return request(server)
          .post("/api/volunteer")
          .set("Accept", "application/json")
          .send({
            username: testToken.username,
            access_id: 1
          })
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("POST /api/volunteer", function() {
      it("should return an 201 when creating a volunteer profile", done => {
        return request(server)
          .post("/api/volunteer")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            username: testToken.username,
            access_id: 1
          })
          .then(res => {
            testToken.vol = res.body[0];
            expect(res.status).toBe(201);
          })
          .then(done());
      });
    });

    describe("GET /api/volunteer", function() {
      it("should return 401 Unauthorized, without a valid token.", function() {
        return request(server)
          .get("/api/volunteer")
          .then(res => {
            expect(res.status).toBe(401);
          });
      });
    });

    describe("GET /api/volunteer", function() {
      it("should return 200 OK with valid token", function() {
        return request(server)
          .get("/api/volunteer")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/volunteer")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });

      it("should return an array type object", function() {
        return request(server)
          .get("/api/volunteer")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            const a = Object.getPrototypeOf(Array());
            const b = Object.getPrototypeOf(res.body);
            expect(a === b).toBe(true);
          });
      });
    });

    describe("PUT /api/volunteer/id/:id", function() {
      it("should return an 401 when Unauthorized to update volunteer profile", done => {
        return (
          request(server)
            .put(`/api/volunteer/id/${testToken.vol}`)
            // .set("Authorization", testToken.tokens[0])
            .set("Accept", "application/json")
            .send({
              access_id: 2
            })
            .then(res => {
              expect(res.status).toBe(401);
            })
            .then(done())
        );
      });
    });

    describe("PUT /api/volunteer/id/:id", function() {
      it("should return an 200 when Unauthorized to update volunteer profile", done => {
        return request(server)
          .put(`/api/volunteer/id/${testToken.vol}`)
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            access_id: 2
          })
          .then(res => {
            expect(res.status).toBe(200);
          })
          .then(done());
      });
    });

    describe("DELETE /api/volunteer/id/:id", function() {
      it("should return 401 without authorized token when trying to DELETE a volunteer profile", done => {
        return request(server)
          .delete(`/api/volunteer/id/${testToken.vol}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("DELETE /api/volunteer/id/:id", function() {
      it("should return 200 when authorized to DELETE a volunteer profile", done => {
        return request(server)
          .delete(`/api/volunteer/id/${testToken.vol}`)
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });
  });
