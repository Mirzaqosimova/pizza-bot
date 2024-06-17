import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('test_results', (table) => {
    table.increments('id');
    table
      .integer('user_id')
      .references('users.id')
      .onDelete('cascade')
      .notNullable()
      .index();
    table.jsonb('result_koleso').nullable();
    table.specificType('result_bn', 'jsonb[]').nullable();
    table.date('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test_results');
}
