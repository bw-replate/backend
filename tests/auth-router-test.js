const request = require("supertest");
const server = require("../server/api-server");
const tokenStore = require("./keymaster").getInstance();

module.exports = () => {
  const testUsername = `user${Date.now()}test`;
  const testPassword = "testReplate";
  const testPhoneNumber = "555-432-1234";
  tokenStore.username = testUsername;

  describe("000: Authoriziation", function() {
    describe("GET /api/users", function() {
      it("should return 404 when GET /login", function() {
        return request(server)
          .get("/api/auth/login")
          .then(res => {
            expect(res.status).toBe(404);
          });
      });
      it("should return 404 when GET /register", function() {
        return request(server)
          .get("/api/auth/register")
          .then(res => {
            expect(res.status).toBe(404);
          });
      });
    });
    describe("POST /api/users", function() {
      it("register should return 201 when successful register", function() {
        return request(server)
          .post("/api/auth/register")
          .send({
            username: testUsername,
            password: testPassword,
            phoneNumber: testPhoneNumber
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(201);
      });
      it("login with invalid credentials should return 418", function() {
        return request(server)
          .post("/api/auth/login")
          .send({ username: testUsername, password: "cupOfTea" })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .then(res => {
            token = res.body.token || false;
            expect(res.status).toBe(418);
            expect(token);
          });
      });
      it("login with proper credentials should return 200", function() {
        return request(server)
          .post("/api/auth/login")
          .send({ username: testUsername, password: testPassword })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .then(res => {
            const token = res.body.token || false;
            tokenStore.tokens.push(token);
            expect(res.status).toBe(200);
            expect(tokenStore.tokens[0].length > 0).toBe(true);
          });
      });
    });
  });
};
