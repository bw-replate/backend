const tokenStore = require("./keymaster");

module.exports = () =>
  describe("business router", function() {
    let testToken = tokenStore.getInstance();

    it("puts the token on it's skin", function() {
      expect(testToken.tokens.length > 0);
      // return request(server)
      //   .post("/api/auth/login")
      //   .send({ username: testUsername, password: testPassword })
      //   .set("Accept", "application/json")
      //   .expect("Content-Type", /json/)
      //   .then(res => {
      //     token = res.body.token || false;
      //     token && testToken.tokens.push(token);
      //     console.log(testToken);
      //     expect(res.status).toBe(200);
      //     expect(testToken[0]);
      //   });
    });
  });
