const usersModel = require("../api/api-model");
const router = require("express").Router();
const isCurrentUser = require("./is-current-user");

/**
 * @api {get} /users List all Usernames
 * @apiName GetUsers
 * @apiGroup Users
 */
router.get("/", (req, res) => {
  usersModel
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

router.put("/:username", (req, res) => {
  // update user
  // console.log("put");
  usersModel
    .updateUser(req.body, req.params.username)
    .then(updated => res.status(200).json(updated))
    .catch(({ name, code, message, stack }) =>
      res.status(500).json({ name, code, message, stack })
    );
});

router.get("/:username", (req, res) => {
  usersModel
    .findByName(req.params.username)
    .then(usr => {
      usr
        ? res.status(200).json(usr)
        : res.status(404).json({ error: `cannot find ${req.params.username}` });
    })
    .catch(error => res.status(500).send(error));
});

router.delete("/:id", (req, res) => {
  if (isCurrentUser(req.headers.authorization, req.params.id)) {
    res.status(200).json({ message: "please don't delete yourself" });
  } else {
    // TODO : superuser specification
    res.status(200).json({ message: "your superpowers had no effect" });
  }
});

module.exports = router;
