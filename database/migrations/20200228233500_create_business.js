exports.up = function(knex) {
  return knex.schema.createTable("business", tbl => {
    tbl.increments();
    tbl
      .string("name", 255)
      .unique()
      .notNullable();
    tbl.string("address", 255).notNullable();
    tbl.string("phoneNumber", 255).notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    // .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("business");
};
