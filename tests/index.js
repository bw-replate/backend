const SuiteAuth = require("./auth-router-test");
const SuiteBusiness = require("./business-router-test");
const SuiteVolunteer = require("./volunteer-router-test");

const TestReplateAPI = () =>
  describe("Replate test suites", () => {
    SuiteAuth(); // run first to setup Authorizion token for other tests.
    SuiteBusiness();
    SuiteVolunteer();
  });

module.exports = TestReplateAPI;
