const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const router = require("../api/api-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", router);
server.use(express.static("public"));

module.exports = server;
