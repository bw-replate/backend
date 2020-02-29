const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateById
};

function add(business) {
  return db("business").insert(business, "id");
}

function findById(id) {
  return db
    .select(
      "business.name as name",
      "business.address as address",
      "business.phoneNumber as phoneNumber"
    )
    .from("business")
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
