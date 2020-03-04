const router = require("express").Router();
const api = require("../api/api-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../server/secrets");

router.get("/", (req, res) => {
  res.status(200).send("Replate");
});

/**
 * @api {post} /register Register a new account
 * @apiName Register
 * @apiGroup Users
 * @apiParam {String} username choose a unique username
 * @apiParam {String} password choose a password
 * @apiParam {String} phoneNumber prefer mobile so you can be reached enroute
 * @apiParamExample {json} Body
 * {
 *  "username": "stacey",
 *  "password": "replate",
 *  "phoneNumber": "555-432-1234"
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 201
 * {
 * "username": "stacey2",
 * "phoneNumber": "555-432-1234"
 * }
 * @apiErrorExample {json} Registration error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post(
  "/register",
  (req, res) =>
    (req.body.username &&
      req.body.password &&
      req.body.phoneNumber &&
      api
        .add({
          username: req.body.username,
          password: bcrypt.hashSync(req.body.password, 13),
          phoneNumber: req.body.phoneNumber
        })
        .then(newUser =>
          api.findByName(req.body.username).then(nu => res.status(201).json(nu))
        )
        .catch(({ name, message, stack }) =>
          res.status(500).json({ name, message, stack })
        )) ||
    res.status(400).json({ message: "username and password required." })
);

/**
 * @api {post} /login Login User
 * @apiName Login
 * @apiGroup Users
 * @apiParam {String} username User username
 * @apiParam {String} password User password
 * @apiParamExample {json} Body
 * {
 *    "username": "stacey",
 *    "password": "replate",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 201
 * {
 *   "message": "Welcome stacey",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InN0YWNleSIsImlhdCI6MTU4MzI3NzU5NCwiZXhwIjoxNTgzMzYzOTk0fQ.sO2rgh6hT8x_FjXBDqImhQB3XmThKklwhFGwUBt1voc"
 * }
 * @apiErrorExample {json} Login error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post(
  "/login",
  (req, res) =>
    (req.body.username &&
      req.body.username.length > 0 &&
      req.body.password &&
      api
        .getUserDetails(req.body.username)
        .then(u => {
          const uname = req.body.username;
          const upw = req.body.password;
          // console.log(upw, uname, "|", u);
          u && bcrypt.compareSync(upw, u.password)
            ? res.status(200).json({
                message: `Welcome ${uname}`,
                token: generateToken(u)
              })
            : res.status(418).json({
                message: "I'm a little teapot"
              });
        })
        .catch(({ name, code, message, stack }) =>
          res.status(500).json({ name, code, message, stack })
        )) ||
    res.status(400).json({ message: "username and password required." })
);

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
