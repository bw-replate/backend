const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function add(business) {
  return db("business").insert(business, "id");
}

function findById(id) {
  return db("business")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("business").where(filter);
}

function find() {
  return db("business");
}
