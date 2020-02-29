const authenticate = require("../auth/authenticate-middleware.js");

const authRouter = require("../auth/auth-router.js");
const accessRouter = require("../access/access-router");
const volunteerRouter = require("../volunteer/volunteer-router");
const businessRouter = require("../business/business-router");
const pickupRequestRouter = require("../pickupRequest/pickupRequest-router");
const usersRouter = require("../users/users-router");

const router = require("express").Router();

router.use("/auth", authRouter);

router.use("/access", authenticate, accessRouter);
router.use("/pickupRequest", authenticate, pickupRequestRouter);
router.use("/volunteer", authenticate, volunteerRouter);
router.use("/business", authenticate, businessRouter);
router.use("/users", authenticate, usersRouter);

module.exports = router;
