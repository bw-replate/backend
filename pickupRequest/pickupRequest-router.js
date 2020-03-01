const router = require("express").Router();
const pickupRequest = require("./pickupRequest-model");

router.get("/", (req, res) => {
  pickupRequest
    .find()
    .then(pur => res.status(200).json(pur))
    .catch(error => res.status(500).json({ error }));
});

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

router.put("/:id", (req, res) => {
  pickupRequest
    .updateById(req.body, req.params.id)
    .then(v => res.status(200).json(v))
    .catch(errors => res.status(500).json(errors));
});

module.exports = router;
