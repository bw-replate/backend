const usersModel = require("../api/api-model");
const router = require("express").Router();

router.get("/", (req, res) => {
  usersModel
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

router.put("/:username", (req, res) => {
  // update user
  console.log("put");
  usersModel
    .updateUser(req.body, req.params.username)
    .then(updated => res.status(200).json(updated))
    .catch(({ name, code, message, stack }) =>
      res.status(500).json({ name, code, message, stack })
    );
});

router.get("/:username", (req, res) => {
  const uname = req.params.username;
  usersModel
    .findByName(uname)
    .then(usr => {
      usr
        ? res.status(200).json(usr)
        : res.status(404).json({ error: `cannot find ${uname}` });
    })
    .catch(error => res.status(500).send(error));
});

module.exports = router;
