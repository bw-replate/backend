const router = require("express").Router();
const access = require("./access-model");

/**
 * @api {get} /access get access profiles
 * @apiName GetAccess
 * @apiGroup Access
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * @apiErrorExample {json} error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get("/", (req, res) => {
  access
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

/**
 * @api {post} /access Create access profile
 * @apiName CreateAccess
 * @apiGroup Access
 * @apiParam {String} role access role
 * @apiParam {String} description description of role
 * @apiParam {String} permissions any special permissions or restrictions
 * @apiParamExample {json} Body
 * {
 *   "role": "one eye one horn flying purple people eater",
 *   "description": "sure looked strange to me",
 *   "permissions": "none"
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 201
 * [
 *  6
 * ]
 * @apiErrorExample {json} Registration error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post("/", (req, res) => {
  const { role, description, permissions } = req.body;
  role && description && permissions
    ? access
        .add({ role, description, permissions })
        .then(result => {
          res.status(201).json(result);
        })
        .catch(error => res.status(500).send(error))
    : res
        .status(400)
        .json({ message: "{role, description, permissions} required." });
});

/**
 * @api {delete} /access/:id Delete a single access profile
 * @apiName DeleteAccess
 * @apiGroup Access
 * @apiParam {integer} id id of the access profile to-be-deleted
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * {
 *  "removed": {
 *    "id": 1234,
 *    "role": "one eye one horn flying purple people eater",
 *    "description": "sure looked strange to me",
 *    "permissions": "none"
 *    }
 * }
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
router.delete("/:id", (req, res) => {
  access.findById(req.params.id).then(acc => {
    access
      .remove(req.params.id)
      .then(() => res.status(200).json({ removed: acc }));
  });
});

/**
 * @api {put} /access/:id Update a single access profile
 * @apiName UpdateAccess
 * @apiGroup Access
 * @apiParam {Object} updates
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * @apiErrorExample {json} error
 *    HTTP/1.1 500 Internal Server Error
 */

router.put("/:id", (req, res) => {
  access.findById(req.params.id).then(acc => {
    // console.log(acc);
    access
      .updateById(req.body, req.params.id)
      .then(result => res.status(200).json(result));
  });
});

module.exports = router;
