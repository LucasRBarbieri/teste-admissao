import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cliente", (table) => {
    table.string('cpf').notNullable();
    table.string('name').notNullable();
    table.string('adress').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();

    table.primary(['cpf']);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("cliente");
}

