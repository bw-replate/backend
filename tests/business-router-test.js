const tokenStore = require("./keymaster");
const request = require("supertest");
const server = require("../server/api-server");

module.exports = () =>
  describe("002: Business", function() {
    let testToken = tokenStore.getInstance();

    it("puts the token on it's skin", function() {
      expect(testToken.tokens.length > 0);
    });

    describe("POST /api/business", function() {
      it("should return an 401 when unAuthorized to create Business", done => {
        return request(server)
          .post("/api/business")
          .set("Accept", "application/json")
          .send({
            name: `McBusiness ${Date.now()}`,
            address: "5555 Burgerland place",
            phoneNumber: "555-1234",
            username: testToken.username
          })
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("POST /api/business", function() {
      it("should return an 201 when creating a business profile", done => {
        return request(server)
          .post("/api/business")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            name: `McBusiness ${Date.now()}`,
            address: "5555 Burgerland place",
            phoneNumber: "555-1234",
            username: testToken.username
          })
          .then(res => {
            const [newBiz_id] = res.body;
            testToken.biz = newBiz_id;
            expect(res.status).toBe(201);
            done();
          });
      });
    });

    describe("GET /api/business", function() {
      it("should return 401 Unauthorized, without a valid token.", function() {
        return request(server)
          .get("/api/business")
          .then(res => {
            expect(res.status).toBe(401);
          });
      });
    });

    describe("GET /api/business", function() {
      it("should return 200 OK with valid token", function() {
        return request(server)
          .get("/api/business")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/business")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });

      it("should return an array type object", function() {
        return request(server)
          .get("/api/business")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            const a = Object.getPrototypeOf(Array());
            const b = Object.getPrototypeOf(res.body);
            expect(a === b).toBe(true);
          });
      });
    });

    describe("PUT /api/business/:id", function() {
      it("should return an 401 without authorized token when updating business profile", done => {
        return request(server)
          .put(`/api/business/${testToken.biz}`)
          .set("Accept", "application/json")
          .send({
            address: "1234 Nice place"
          })
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("PUT /api/business/:id", function() {
      it("should return an 200 when updating business profile", done => {
        return request(server)
          .put(`/api/business/${testToken.biz}`)
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            address: "1234 Nice place"
          })
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });

    describe("DELETE /api/business/:id", function() {
      it("should return 401 without authorized token when trying to DELETE a business profile", done => {
        return (
          request(server)
            .delete(`/api/business/${testToken.biz}`)
            // .set("Authorization", testToken.tokens[0])
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(401, done)
        );
      });
    });

    describe("DELETE /api/business/:id", function() {
      it("should return 200 when authorized to DELETE a business profile", done => {
        return request(server)
          .delete(`/api/business/${testToken.biz}`)
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });
  });
