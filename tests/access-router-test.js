const tokenStore = require("./keymaster");
const request = require("supertest");
const server = require("../server/api-server");

module.exports = () =>
  describe("005: Access", function() {
    let testToken = tokenStore.getInstance();
    testToken.access = `volunteer ${Date.now()}`;

    it("puts the token on it's skin", function() {
      expect(testToken.tokens.length > 0);
    });
    describe("POST /api/access", function() {
      it("should return an 401 when unAuthorized to create Business", done => {
        return request(server)
          .post("/api/access")
          .set("Accept", "application/json")
          .send({
            role: testToken.access,
            description: "may read/update pickup requests",
            permissions: "r,u"
          })
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("POST /api/access", function() {
      it("should return an 201 when creating a business profile", done => {
        return request(server)
          .post("/api/access")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            role: testToken.access,
            description: "may read/update pickup requests",
            permissions: "r,u"
          })
          .then(res => {
            const [access_id] = res.body;
            testToken.acc = access_id;
            expect(res.status).toBe(201);
            done();
          });
      });
    });

    describe("GET /api/access", function() {
      it("should return 401 Unauthorized, without a valid token.", function() {
        return request(server)
          .get("/api/access")
          .then(res => {
            expect(res.status).toBe(401);
          });
      });
    });

    describe("GET /api/access", function() {
      it("should return 200 OK with valid token", function() {
        return request(server)
          .get("/api/access")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/access")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });

      it("should return an array type object", function() {
        return request(server)
          .get("/api/access")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            const a = Object.getPrototypeOf(Array());
            const b = Object.getPrototypeOf(res.body);
            expect(a === b).toBe(true);
          });
      });
    });

    describe("PUT /api/access/:id", function() {
      it("should return an 401 when unAuthorized to create Business", done => {
        return request(server)
          .post("/api/access")
          .set("Accept", "application/json")
          .send({
            role: "volunteer",
            description: "may read/update pickup requests",
            permissions: "normal"
          })
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("PUT /api/access/:id", function() {
      it("should return an 201 when creating a business profile", done => {
        return request(server)
          .put(`/api/access/${testToken.acc}`)
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            permissions: "normal"
          })
          .then(res => {
            expect(res.status).toBe(200);
            done();
          });
      });
    });

    describe("DELETE /api/access/:id", function() {
      it("should return an 401 when Unauthorized delete pickupRequest", done => {
        return request(server)
          .delete(`/api/access/${testToken.acc}`)
          .expect(401, done);
      });
    });
    describe("DELETE /api/access/:id", function() {
      it("should return an 200 when Authorized Deletion of pickupRequest", done => {
        return request(server)
          .delete(`/api/access/${testToken.acc}`)
          .set("Authorization", testToken.tokens[0])
          .expect(200, done);
      });
    });
  });
