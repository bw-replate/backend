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

function add(business) {
  return db("business").insert(business, "id");
}

function remove(id) {
  return db("business")
    .del()
    .where({ id });
}

function findById(id) {
  return db("business")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db
    .select(
      "business.id as id",
      "business.name as name",
      "business.address as address",
      "business.phoneNumber as phoneNumber",
      "users.username as username"
    )
    .from("business")
    .innerJoin("users", "user_id", "users.id")
    .where(filter);
}

function find() {
  return db
    .select(
      "business.id as id",
      "business.name as name",
      "business.address as address",
      "business.phoneNumber as phoneNumber",
      "users.username as username"
    )
    .from("business")
    .innerJoin("users", "user_id", "users.id");
}

function updateById(updates, id) {
  return db("business")
    .update(updates)
    .where({ id });
}
