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
    table.jsonb('results').defaultTo({
      family: 0,
      value: 0,
      hobby_and_interests: 0,
      career: 0,
      financial_stability: 0,
      personal_growth: 0,
      sport_health: 0,
      friends_around: 0,
    });
    table.date('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test_results');
}
