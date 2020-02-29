exports.up = function(knex) {
  return knex.schema.createTable("access", tbl => {
    tbl.increments();
    tbl
      .string("role", 255)
      .unique()
      .notNullable();
    tbl.string("description", 1024).notNullable();
    tbl.string("permissions", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("access");
};
