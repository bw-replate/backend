// const db = require("../database/dbConfig");
const db = require("../database/connection.js");
const users = require("../api/api-model");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByName,
  updateById,
  updateByName,
  remove,
  addThenReturn
};

function add(newVolunteer) {
  return db("volunteer").insert(newVolunteer, "user_id");
}

function addThenReturn(newVolunteer, returnField) {
  return db("volunteer").insert(newVolunteer, returnField);
}

function remove(id) {
  return db("volunteer")
    .del()
    .where({ id });
}

function updateByName(access_id, username) {
  // update every volunteer for username
  return users.getUserId(username).then(({ id: user_id }) =>
    db("volunteer")
      .update({ access_id })
      .where({ user_id })
  );
}

function updateById(updates, volunteer_id) {
  // console.log(updates);
  return db("volunteer")
    .update(updates)
    .where({ id: volunteer_id });
}

function findByName(username) {
  return users.getUserId(username).then(({ id: user_id }) => {
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
      .innerJoin("access", "access_id", "access.id")
      .where({ user_id });
  });
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
