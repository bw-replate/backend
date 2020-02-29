const router = require("express").Router();

router.get("/", (req, res) => {
  // todo
  res.status(200).json({ router: "pickupRequest" });
});

module.exports = router;
