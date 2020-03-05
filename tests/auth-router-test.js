const request = require("supertest");
const server = require("../server/api-server");
const tokenStore = require("./keymaster").getInstance();

module.exports = () => {
  const testUsername = `user${Date.now()}test`;
  const testPassword = "testReplate";
  const testPhoneNumber = "555-432-1234";
  tokenStore.username = testUsername;

  describe("000: Authoriziation", function() {
    it("GET login should return 404", function() {
      return request(server)
        .get("/api/auth/login")
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
    it("GET register should return 404", function() {
      return request(server)
        .get("/api/auth/register")
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
    it("POST register should return 201", function() {
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
    it("POST login with invalid credentials should return 418", function() {
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
    it("POST login with proper credentials should return 200", function() {
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
};
