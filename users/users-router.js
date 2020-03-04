const usersModel = require("../api/api-model");
const router = require("express").Router();
const isCurrentUser = require("./is-current-user");

/**
 * @api {get} /users Get Users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * [
 *  {
 *    "username": "toni"
 *  },
 *  {
 *    "username": "fuston05@yahoo.com"
 *  },
 *  {
 *    "username": "fuston05"
 *  },
 *  {
 *    "username": "stacey"
 *  },
 *  {
 *    "username": "bill"
 *  },
 *  {
 *    "username": "Lambda"
 *  },
 *  {
 *    "username": "asdsd"
 *  },
 *  {
 *    "username": "kjbkjb"
 *  },
 *  {
 *    "username": "xczczx"
 *  },
 *  {
 *    "username": "adam"
 *  }
 * ]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get("/", (req, res) => {
  usersModel
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

/**
 * @api {get} /users/:username Get User
 * @apiName GetUser
 * @apiGroup Users
 * @apiParam {String} username username
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * {
 *    "username": "stacey"
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

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

router.put("/:username", (req, res) => {
  usersModel
    .updateUser(req.body, req.params.username)
    .then(updated => res.status(200).json(updated))
    .catch(({ name, code, message, stack }) =>
      res.status(500).json({ name, code, message, stack })
    );
});

/**
 * @api {delete} /users/:username Del User
 * @apiName DelUserName
 * @apiGroup Users
 */
router.delete("/:id", (req, res) => {
  if (isCurrentUser(req.headers.authorization, req.params.id)) {
    res.status(200).json({ message: "please don't delete yourself" });
  } else {
    // TODO : superuser specification
    res.status(200).json({ message: "your superpowers had no effect" });
  }
});

module.exports = router;
