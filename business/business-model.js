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
