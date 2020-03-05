const SuiteAuth = require("./auth-router-test");
const SuiteUsers = require("./users-router-test");
const SuiteBusiness = require("./business-router-test");
const SuiteVolunteer = require("./volunteer-router-test");
const SuitePickupRequests = require("./pickupRequests-router-test");

const TestReplateAPI = () =>
  describe("Replate test suites", () => {
    SuiteAuth(); // run first to setup Authorizion token for other tests.
    SuiteUsers();
    SuiteBusiness();
    SuiteVolunteer();
    SuitePickupRequests();
  });

module.exports = TestReplateAPI;
