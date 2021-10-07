const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "980400440",
  database: "dbtienda",
  port: "5432",
});

module.exports={
    pool
}
    