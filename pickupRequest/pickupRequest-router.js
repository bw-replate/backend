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
  const { type: purType, amount, preferredPickupTime, business_id } = req.body;
  purType && amount && preferredPickupTime && business_id
    ? pickupRequest
        .add({ type: purType, amount, preferredPickupTime, business_id })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
    : res
        .status(418)
        .send({ error: "{name, address, phoneNumber, username} required" });
});

module.exports = router;
