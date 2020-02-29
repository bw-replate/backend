const router = require("express").Router();
const access = require("./access-model");

router.get("/", (req, res) => {
  // todo
  access
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});
module.exports = router;
