const jwt = require("jsonwebtoken");

module.exports = (token, biz) => {
  // determine if current user owns biz
  const dc = jwt.decode(token, { complete: true });
  return (
    dc && dc.payload && dc.payload.subject && dc.payload.subject === biz.user_id
  );
};
