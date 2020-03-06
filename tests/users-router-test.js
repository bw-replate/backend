const tokenStore = require("./keymaster");
const request = require("supertest");
const server = require("../server/api-server");

module.exports = () =>
  describe("001: Users", function() {
    let testToken = tokenStore.getInstance();
    it("puts the token on it's skin", function() {
      expect(testToken.tokens.length > 0);
    });
    describe("GET /api/users", function() {
      it("should return 401 Unauthorized, without a valid token.", function() {
        return request(server)
          .get("/api/users")
          .then(res => {
            expect(res.status).toBe(401);
          });
      });
    });
    describe("GET /api/users", function() {
      it("should return 200 OK with valid token", function() {
        return request(server)
          .get("/api/users")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/users")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });

      it("should return an array type object", function() {
        return request(server)
          .get("/api/users")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            const a = Object.getPrototypeOf(Array());
            const b = Object.getPrototypeOf(res.body);
            expect(a === b).toBe(true);
          });
      });
    });

    describe("PUT /api/users/:username", function() {
      it("PUT User with invalid credentials should return 401", function() {
        return request(server)
          .put(`/api/users/${testToken.username}`)
          .send({ password: "cupOfTea" })
          .expect("Content-Type", /json/)
          .then(res => {
            token = res.body.token || false;
            expect(res.status).toBe(401);
            expect(token);
          });
      });
      it("PUT User with proper credentials should return 200", function() {
        return request(server)
          .put(`/api/users/${testToken.username}`)
          .send({ password: "testPassword" })
          .set("Accept", "application/json")
          .set("Authorization", testToken.tokens[0])
          .expect("Content-Type", /json/)
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
    });

    describe("DELETE /api/users/:username", function() {
      it("should return 401 without authorized token when trying to DELETE a User", done => {
        return request(server)
          .delete(`/api/users/${testToken.username}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(401, done);
      });
    });

    describe("DELETE /api/users/:username", function() {
      it("should return 200 when Authorized to DELETE a user", done => {
        return request(server)
          .delete(`/api/users/${testToken.username}`)
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("your superpowers had no effect");
            done();
          });
      });
    });
  });
