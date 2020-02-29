const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function add(volunteer) {
  return db("volunteer").insert(volunteer, "id");
}

function findById(id) {
  return db("volunteer")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("volunteer").where(filter);
}

function find() {
  return db("volunteer");
}
