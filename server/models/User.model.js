// code for the 'users' table
import connectDB from "../db/db.js";

async function createTables() {
  try {
    const connection = await connectDB();

    const userTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_superuser BOOLEAN
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

    await connection.execute(userTable);
    console.log("Users table created success");

    connection.release();
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

createTables();
