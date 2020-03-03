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
      u && u.id
        ? volunteer
            .add({ access_id, user_id: u.id })
            .then(ok => res.status(200).json(ok))
            .catch(error => res.status(500).json(error))
        : res.status(404).json({ error: `cannot find ${username} id` });
    });
});

router.get("/:username", (req, res) => {
  // list what username is volunteering for
  volunteer
    .findByName(req.params.username)
    .then(v => {
      res.status(200).json(v);
    })
    .catch(errors => res.status(500).json(errors));
});

router.put("/:username", (req, res) => {
  // update access for username across the board
  volunteer
    .updateByName(req.body.access_id, req.params.username)
    .then(v => {
      res.status(200).json(v);
    })
    .catch(errors => res.status(500).json(errors));
});

router.put("/id/:id", (req, res) => {
  // update volunteer (not the user)
  volunteer.findById(req.params.id).then(v => {
    volunteer
      .updateById(req.body, req.params.id)
      .then(updatedV => res.status(200).json(updatedV));
  });
});

router.delete("/id/:id", (req, res) => {
  // remove volunteer (not the user)
  volunteer.findById(req.params.id).then(v => {
    volunteer
      .remove(req.params.id)
      .then(() => res.status(200).json({ removed: v }));
  });
});

module.exports = router;
