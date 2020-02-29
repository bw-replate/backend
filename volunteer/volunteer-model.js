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
  return db
    .select(
      "volunteer.id as id",
      "users.username as username",
      "users.phoneNumber as phoneNumber",
      "access.role as role",
      "access.description as role_description"
    )
    .from("volunteer")
    .innerJoin("users", "user_id", "users.id")
    .innerJoin("access", "access_id", "access.id");
}
