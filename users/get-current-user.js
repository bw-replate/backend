const jwt = require("jsonwebtoken");

module.exports = token => {
  // determine if current user === user
  const dc = jwt.decode(token, { complete: true });
  return dc && dc.payload && dc.payload.subject
    ? dc.payload.subject
    : "UNAUTHORIZED";
};
