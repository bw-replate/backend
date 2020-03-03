// const db = require("../database/dbConfig");
const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findByName,
  updateUser,
  getUserId,
  getUserDetails,
  remove
};

function add(user) {
  return db("users").insert(user, "id");
}

function remove(id) {
  return db("users")
    .del()
    .where({ id });
}

function findByName(username) {
  return db("users")
    .select("username", "phoneNumber")
    .where({ username })
    .first();
}

function getUserDetails(username) {
  return db("users")
    .where({ username })
    .first();
}

function getUserId(username) {
  return db("users")
    .select("id")
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

function updateUser(updates, username) {
  return db("users")
    .where({ username })
    .first()
    .then(details => {
      const upd = { ...details, ...updates };
      const { username, phoneNumber } = upd;
      return { username, phoneNumber };
    })
    .then(ret =>
      db("users")
        .update(ret, "username")
        .where({ username })
        .then(uname => uname[0] === ret.username && ret)
    );
}
