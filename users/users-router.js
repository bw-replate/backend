const usersModel = require("../api/api-model");
const router = require("express").Router();

router.get("/", (req, res) => {
  usersModel
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

router.get("/:username", (req, res) => {
  usersModel
    .findByName(req.params.username)
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

module.exports = router;
