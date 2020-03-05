const tokenStore = require("./keymaster");
const request = require("supertest");
const server = require("../server/api-server");

module.exports = () =>
  describe("004: PickupRequests", function() {
    let testToken = tokenStore.getInstance();

    it("puts the token on it's skin", function() {
      expect(testToken.tokens.length > 0);
    });

    describe("POST /api/pickupRequest", function() {
      it("should return an 201 when creating a new pickupRequest", done => {
        return request(server)
          .post("/api/pickupRequest")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .send({
            type: `mixed bag; sell by ${Date.now()}`,
            amount: "12",
            preferredPickupTime: Date.now(),
            business_id: 1
          })
          .expect("Content-Type", /json/)
          .expect(201, done);
      });
    });

    describe("GET /api/pickupRequest", function() {
      it("should return 401 Unauthorized, without a valid token.", function() {
        return request(server)
          .get("/api/pickupRequest")
          .then(res => {
            expect(res.status).toBe(401);
          });
      });
    });

    describe("GET /api/pickupRequest", function() {
      it("should return 200 OK with valid token", function() {
        return request(server)
          .get("/api/pickupRequest")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/pickupRequest")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });

      it("should return an array type object", function() {
        return request(server)
          .get("/api/pickupRequest")
          .set("Authorization", testToken.tokens[0])
          .set("Accept", "application/json")
          .then(res => {
            const a = Object.getPrototypeOf(Array());
            const b = Object.getPrototypeOf(res.body);
            expect(a === b).toBe(true);
          });
      });
    });
  });
