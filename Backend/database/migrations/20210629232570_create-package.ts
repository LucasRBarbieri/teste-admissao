import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("packages", (table) => {
    table.increments('id').notNullable();
    table.dateTime('created_at').notNullable();
    table.dateTime('closed_at');
    table.decimal('bills_amount').notNullable();
    table.string('status').notNullable();
    table.integer('used_bill').notNullable();

    table.primary(['id']);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("packages");
}

