import knex, { Knex } from "knex";
const configuration = require("../knexfile");

let connection: Knex;

if (process.env.NODE_ENV === "test") {
  connection = knex(configuration.test);
} else {
  connection = knex(configuration.development);
}

export { connection };
