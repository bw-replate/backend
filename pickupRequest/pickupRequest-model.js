// const db = require("../database/dbConfig");
const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  find2,
  findBy,
  findById,
  updateById,
  remove
};

function add(pickupRequest) {
  return db("pickupRequest").insert(pickupRequest, "id");
}

function remove(id) {
  return db("pickupRequest")
    .del()
    .where({ id });
}

function findById(id) {
  return db("pickupRequest")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("pickupRequest").where(filter);
}

function find() {
  return db("pickupRequest");
}

function find2() {
  // resolve buisness.name from business_id
  return db
    .select(
      "pickupRequest.id as id",
      "pickupRequest.type as type",
      "pickupRequest.amount as amount",
      "pickupRequest.preferredPickupTime as preferredPickupTime",
      "pickupRequest.volunteer_id as v_id",
      "pickupRequest.status as status",
      "business.name as business"
    )
    .from("pickupRequest")
    .innerJoin("business", "business_id", "business.id");
}

function updateById(updates, id) {
  return db("pickupRequest")
    .update(updates)
    .where({ id });
}
