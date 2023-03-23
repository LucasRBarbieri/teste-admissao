import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("operations", (table) => {
    table.increments('id').notNullable();
    table.decimal('amount').notNullable();
    table.string('cpf_client').notNullable().references('cpf').inTable('client');
    table.integer('id_package').notNullable().references('id').inTable('packages');
    table.string('status').notNullable();
    table.integer('prefered_bill');
    table.integer('used_bill').notNullable();

    table.primary(['id']);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("operations");
}

