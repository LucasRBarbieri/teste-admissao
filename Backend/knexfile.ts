// Update with your config settings.

module.exports = {
  development: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./database/db.sqlite"
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
  },
  
  test: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./database/db.mock.sqlite"
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/mock'
    },
  }

};
