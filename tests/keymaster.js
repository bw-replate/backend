/* 
  a singleton to store token(s) in memory while running multiple tests
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
