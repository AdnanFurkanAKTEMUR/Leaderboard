import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("examples",
  (table: Knex.TableBuilder) => {
    table.uuid('id').primary().notNullable().unique();
    table.string('exampleTitle').nullable();
    table.string("exampleDesc").nullable();
    table.timestamps(true, true);
  }
  )
}


export async function down(knex: Knex): Promise<void> {
}

