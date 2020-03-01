const router = require("express").Router();

router.get("/", (req, res) => {
  // todo
  res.status(200).json({ router: "pickupRequest" });
});

router.post("/", (req, res) => {
  // create a new picup request.
});

module.exports = router;
