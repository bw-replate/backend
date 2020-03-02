const router = require("express").Router();
const business = require("./business-model");
const users = require("../api/api-model");
const ownBusiness = require("./business-owner");

router.get("/", (req, res) => {
  // returns a list of businesses and the username associated with it
  business
    .find()
    .then(lst => res.status(200).send(lst))
    .catch(error => res.status(500).send(error));
});

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

router.get("/:id", (req, res) => {
  business.findById(req.params.id).then(result => res.status(200).json(result));
});

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

router.delete("/:id", (req, res) => {
  business.findById(req.params.id).then(biz => {
    business
      .remove(req.params.id)
      .then(() => res.status(200).json({ removed: biz }));
  });
});

module.exports = router;
