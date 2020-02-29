exports.up = function(knex) {
  return knex.schema.createTable("pickupRequest", tbl => {
    tbl.increments();
    tbl.string("type", 255).notNullable();
    tbl.string("amount", 255).notNullable();
    tbl.datetime("preferredPickupTime").notNullable();
    tbl
      .integer("business_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("business");
    // .onDelete("CASCADE");
    tbl.string("status", 255).default("pending");
    tbl
      .integer("volunteer_id")
      .unsigned()
      .references("id")
      .inTable("volunteer");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("pickupRequest");
};
