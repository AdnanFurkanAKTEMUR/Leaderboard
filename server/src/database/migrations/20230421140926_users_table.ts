import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users",
  (table: Knex.TableBuilder) => {
    table.uuid('id').primary().notNullable().unique();
    table.string('user_name').notNullable();
    table.integer('rank').notNullable();
    table.float('money').notNullable();
    table.json('country').notNullable();
    table.timestamps(true, true);
  }
  )
}


export async function down(knex: Knex): Promise<void> {
}

