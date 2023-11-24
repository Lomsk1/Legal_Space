import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "legalSpace",
  database: "LegalSpace",
  password: "legalspace123",
  port: 5432,
});

export default pool;

// pool.query('SELECT * FROM users', (err, result) => {
//   console.log(result);
//   pool.end(); // Close the pool when done
// });
