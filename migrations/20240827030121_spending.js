/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('expense', (table) => {
  table.increments('id');
  table.uuid('uuid').notNullable().unique();
  table.integer('main_category_id').notNullable().references('id').inTable('main_category');
  table.integer('sub_category_id').notNullable().references('id').inTable('sub_category');
  table.integer('stores_id').notNullable().references('id').inTable('stores');
  table.text('description');
  table.boolean('is_constant_expense').notNullable().defaultTo(false);
  table.enum('payment_type', ['hubby_rbc_debit', 'hubby_scotiabank_visa', 'hubby_amex']);
  table.double('amount').notNullable();
  table.boolean('is_splitwise').notNullable().defaultTo(false);
  table.date('spend_date').notNullable();
  table.jsonb('splitwise_details');
  table.jsonb('date_filters');
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('spending');
