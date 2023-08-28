import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("clients", (table) => {
    table.string('cpf').notNullable();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('birth').notNullable();
    table.string('phone').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('admin').defaultTo(false);

    table.primary(['cpf']);
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("clients");
}