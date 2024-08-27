/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('sub_category', (table) => {
  table.increments('id');
  table.integer('main_category_id').notNullable().references('id').inTable('main_category');
  table.string('slug').notNullable().unique();
  table.string('display_text').notNullable();
  table.timestamps(true, true);
});

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = (knex) => knex.schema.dropTable('sub_category');
