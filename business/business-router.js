const router = require("express").Router();
const business = require("./business-model");
const users = require("../api/api-model");
const ownBusiness = require("./business-owner");

/**
 * @api {get} /business Get all business profiles
 * @apiName Business
 * @apiGroup Business
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * [
 *  {
 *  "id": 1,
 *  "name": "Stay fresh market",
 *  "address": "227 Spring lane",
 *  "phoneNumber": "555-4332",
 *  "username": "stacey"
 *  },
 *  {
 *  "id": 6,
 *  "name": "Stay fresh market 2",
 *  "address": "227 Spring lane",
 *  "phoneNumber": "555-1234",
 *  "username": "stacey"
 *  }
 * ]
 * @apiErrorExample {json} Registration error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get("/", (req, res) => {
  // returns a list of businesses and the username associated with it
  business
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

/**
 * @api {post} /business Create a new business profile
 * @apiName CreateBusiness
 * @apiGroup Business
 * @apiParam {String} name Business name
 * @apiParam {String} address Business address
 * @apiParam {String} phoneNumber Business phone number
 * @apiParam {String} username Business owner username
 * @apiParamExample {json} Body
 * {
 *  "name":"Stay fresh market",
 *  "address":"227 Spring lane",
 *  "phoneNumber":"555-1234",
 *  "username":"stacey"
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
  // create a new business profile
  const { name, address, phoneNumber, username } = req.body;
  name && address && phoneNumber && username
    ? users.getUserId(username).then(({ id: user_id }) =>
        business
          .add({ name, address, phoneNumber, user_id })
          .then(result => res.status(200).send(result))
          .catch(error => res.status(500).send(error))
      )
    : res
        .status(418)
        .send({ error: "{name, address, phoneNumber, username} required" });
});

/**
 * @api {get} /business/:id Get a single business profile
 * @apiName GetBusiness
 * @apiGroup Business
 * @apiParam {integer} id id of the Business profile
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * {
 * "id": 1,
 * "name": "Stay fresh market",
 * "address": "227 Spring lane",
 * "phoneNumber": "555-4332",
 * "user_id": 2
 * }
 * @apiErrorExample {json} Request error
 * HTTP/1.1 500 Internal Server Error
 */

router.get("/:id", (req, res) => {
  business.findById(req.params.id).then(result => res.status(200).json(result));
});

/**
 * @api {put} /business/:id Update a single business profile
 * @apiName UpdateBusiness
 * @apiGroup Business
 * @apiParam {integer} id id of the Business profile-to-be-updated
 * @apiParamExample {json} Body
 * {
 * "address": "1111 Pleasant Ave",
 * "phoneNumber": "555-1212",
 * "user_id": 2
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * 1
 * @apiErrorExample {json} Update error
 * HTTP/1.1 500 Internal Server Error
 */

router.put("/:id", (req, res) => {
  business.findById(req.params.id).then(biz => {
    ownBusiness(req.headers.authorization, biz)
      ? business
          .updateById(req.body, req.params.id)
          .then(v => res.status(200).json(v))
          .catch(errors => res.status(500).json(errors))
      : res.status(403).json({
          error: "Mind your own business; This one is owned by someone else."
        });
  });
});
/**
 * @api {delete} /business/:id Delete a single business profile
 * @apiName DeleteBusiness
 * @apiGroup Business
 * @apiParam {integer} id id of the Business profile to-be-deleted
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * {
 *  "removed": {
 *  "id": 6,
 *  "name": "Stay fresh market 2",
 *  "address": "227 Spring lane",
 *  "phoneNumber": "555-1234",
 *  "user_id": 2
 *  }
 * }
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */

router.delete("/:id", (req, res) => {
  business.findById(req.params.id).then(biz => {
    business
      .remove(req.params.id)
      .then(() => res.status(200).json({ removed: biz }));
  });
});

module.exports = router;
