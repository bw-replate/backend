const SuiteAuth = require("./auth-router-test");
const SuiteBusiness = require("./business-router-test");

const TestSuites = () =>
  describe("sequentially running test suites", () => {
    SuiteAuth(); // run first to setup Authorizion token for other tests.
    SuiteBusiness();
  });

module.exports = TestSuites;
