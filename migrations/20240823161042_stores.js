/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('stores', (table) => {
    table.increments('id');
    table.string('slug').notNullable().unique();
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.string('country').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('stores');
};