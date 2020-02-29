const router = require("express").Router();
const volunteer = require("./volunteer-model");

router.get("/", (req, res) => {
  // todo
  volunteer
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});
module.exports = router;
