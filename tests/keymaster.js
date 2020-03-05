/* the keymaster singleton 
  // ... first test user login
  const keymaster = require("./keymaster").getInstance(); // IMPORT KEYMASTER
  // ... once logged in successfully,
  keymaster.tokens.push(token);  // PUSH TOKEN TO KEYMASTER

  // ... elsewhere in other test.spec
  const keymaster = require("./keymaster").getInstance(); // IMPORT KEYMASTER
  const myToken = keymaster.tokens[0]; // ACCESS the token that was stored

  */

var KeyRing = (function() {
  var instance;
  function createInstance() {
    var object = new Object({
      title: "I am the key master",
      tokens: [],
      new: true
    });
    return object;
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

module.exports = KeyRing;
