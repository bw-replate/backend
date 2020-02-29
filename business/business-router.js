const router = require("express").Router();
const business = require("./business-model");

router.get("/", (req, res) => {
  // todo
  business
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});
module.exports = router;
