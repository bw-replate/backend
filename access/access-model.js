const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function add(access) {
  return db("access").insert(access, "id");
}

function findById(id) {
  return db("access")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("access").where(filter);
}

function find() {
  return db("access");
}
