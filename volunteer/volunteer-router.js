const router = require("express").Router();
const volunteer = require("./volunteer-model");
const users = require("../api/api-model");

router.get("/", (req, res) => {
  // todo
  volunteer
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

router.post("/", (req, res) => {
  // create volunteer
  const { username, access_id } = req.body;
  username &&
    access_id &&
    users.getUserId(username).then(u => {
      u.id
        ? volunteer
            .add({ access_id, user_id: u.id })
            .then(ok => res.status(200).json(ok))
            .catch(error => res.status(500).json(error))
        : res.status(404).json({ error: `cannot find ${username} id` });
    });
});

router.get("/:username", (req, res) => {
  volunteer
    .findByName(req.params.username)
    .then(v => {
      res.status(200).json(v);
    })
    .catch(errors => res.status(500).json(errors));
});

router.put("/:username", (req, res) => {
  volunteer
    .updateByName(req.body.access_id, req.params.username)
    .then(v => {
      res.status(200).json(v);
    })
    .catch(errors => res.status(500).json(errors));
});

module.exports = router;
