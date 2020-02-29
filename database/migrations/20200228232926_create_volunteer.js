exports.up = function(knex) {
  return knex.schema.createTable("volunteer", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    // .onDelete("CASCADE");
    tbl
      .integer("access_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("access");
    // .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("volunteer");
};
