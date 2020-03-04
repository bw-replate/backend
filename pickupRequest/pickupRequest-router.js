const router = require("express").Router();
const pickupRequest = require("./pickupRequest-model");

/**
 * @api {get} /pickupRequest Get a list of Pickup Requests
 * @apiName GetPickupRequests
 * @apiGroup pickupRequests
 * @apiSuccessExample {json} Success
 * [
 *  {
 *    "id": 2,
 *    "type": "cheeses",
 *    "amount": "1 lb",
 *    "preferredPickupTime": "2020-03-01T20:19:02.371Z",
 *    "business_id": 1,
 *    "status": "pending",
 *    "volunteer_id": null
 *  },
 *  {
 *    "id": 3,
 *    "type": "hearts of romaine lettuce",
 *    "amount": "36",
 *    "preferredPickupTime": "2020-03-05T03:35:10.344Z",
 *    "business_id": 1,
 *    "status": "pending",
 *    "volunteer_id": null
 *  }
 * ]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get("/", (req, res) => {
  pickupRequest
    .find()
    .then(pur => res.status(200).json(pur))
    .catch(error => res.status(500).json({ error }));
});

/**
 * @api {post} /pickupRequest create a new Pickup Requests
 * @apiName CreatePickupRequest
 * @apiGroup pickupRequests
 * @apiParamExample {json} Body
 * {
 *  "type": "hearts of romaine lettuce",
 *  "amount": "36",
 *  "preferredPickupTime": "2020-03-04T15:19:02.371Z",
 *  "business_id": 1
 * }
 * @apiSuccessExample {json} Success
 * [
 *  3
 * ]
 */

router.post("/", (req, res) => {
  // create a new pickup request.
  const { type: purType, amount, business_id } = req.body;
  purType && amount && business_id
    ? pickupRequest
        .add({ type: purType, amount, business_id })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
    : res
        .status(418)
        .send({ error: "{name, address, phoneNumber, username} required" });
});

/**
 * @api {get} /pickupRequest/:id Get a single Pickup Request
 * @apiName GetPickupRequest
 * @apiGroup pickupRequests
 * @apiParam {integer} id id of Pickup Request
 * @apiSuccessExample {json} Success
 * {
 *  "id": 2,
 *  "type": "cheeses",
 *  "amount": "1 lb",
 *  "preferredPickupTime": "2020-03-04T20:19:02.371Z",
 *  "business_id": 1,
 *  "status": "waiting for volunteer",
 *  "volunteer_id": 1
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get("/:id", (req, res) => {
  pickupRequest
    .findById(req.params.id)
    .then(pur => {
      res.status(200).json(pur); // return pickup requrest
    })
    .catch(error =>
      res.status(404).json({
        error: `cannot find that request with id ${req.params.id}`,
        msg: error
      })
    );
});

/**
 * @api {put} /pickupRequest/:id Update a single Pickup Request
 * @apiName UpdatePickupRequest
 * @apiGroup pickupRequests
 * @apiParam {integer} id id of Pickup Request to-be-updated
 * @apiParamExample {json} Body
 * {
 *  "amount": "42",
 *  "status": "waiting for volunteer",
 *  "volunteer_id": 1,
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * 1
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.put("/:id", (req, res) => {
  pickupRequest
    .updateById(req.body, req.params.id)
    .then(v => res.status(200).json(v))
    .catch(errors => res.status(500).json(errors));
});

/**
 * @api {delete} /pickupRequest/:id Delete a single Pickup Request
 * @apiName DeletePickupRequest
 * @apiGroup pickupRequests
 * @apiParam {Integer} id id of pickupRequest to DELETE.
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200
 * {
 *  "removed": {
 *    "id": 3,
 *    "type": "hearts of romaine lettuce",
 *    "amount": "42",
 *    "preferredPickupTime": "2020-03-05T03:35:10.344Z",
 *    "business_id": 1,
 *    "status": "pending",
 *    "volunteer_id": null
 *    }
 * }
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */

router.delete("/:id", (req, res) => {
  pickupRequest.findById(req.params.id).then(pur => {
    pickupRequest
      .remove(req.params.id)
      .then(() => res.status(200).json({ removed: pur }));
    // res.status(200).json(pur); // return pickup requrest
  });
});
module.exports = router;
