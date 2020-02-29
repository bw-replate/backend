const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findByName
};

function add(user) {
  return db("users").insert(user, "id");
}

function findByName(username) {
  return db("users")
    .select("username", "phoneNumber")
    .where({ username })
    .first();
}

function findBy(filter) {
  return db("users")
    .select("username", "phoneNumber")
    .where(filter);
}

function find() {
  return db("users").select("username");
}
