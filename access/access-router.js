const router = require("express").Router();
const access = require("./access-model");

router.get("/", (req, res) => {
  access
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

router.post("/", (req, res) => {
  const { role, description, permissions } = req.body;
  role && description && permissions
    ? access
        .add({ role, description, permissions })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => res.status(500).send(error))
    : res
        .status(400)
        .json({ message: "{role, description, permissions} required." });
});
module.exports = router;
