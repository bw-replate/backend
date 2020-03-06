// const db = require("../database/dbConfig");
const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateById,
  remove
};

function add(access) {
  return db("access").insert(access, "id");
}

function findById(id) {
  return db("access")
    .where({ id })
    .first();
}

function remove(id) {
  return db("access")
    .del()
    .where({ id });
}

function findBy(filter) {
  return db("access").where(filter);
}

function find() {
  return db("access");
}

function updateById(updates, id) {
  return db("access")
    .update(updates)
    .where({ id });
}
