import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('bot_user_id').notNullable();
    table.string('bot_user_status').notNullable();
    table.string('full_name').notNullable();
    table.string('phone').notNullable();
    table.string('business').notNullable();
    table.date('birth_date').notNullable();
    table.date('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
