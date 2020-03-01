// const db = require("../database/dbConfig");
const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateById
};

function add(pickupRequest) {
  return db("pickupRequest").insert(pickupRequest, "id");
}

function findById(id) {
  return db("pickupRequest")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("pickupRequest").where(filter);
}

function find() {
  return db("pickupRequest");
}

function updateById(updates, id) {
  return db("pickupRequest")
    .update(updates)
    .where({ id });
}
