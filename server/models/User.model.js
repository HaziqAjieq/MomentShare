// code for the 'users' table
import databaseQuery from "../db/db.js";

const connection = await databaseQuery();
class User {

  constructor(id, username,email, password, is_superuser = false) {
    this.id = id,
    this.username = username,
    this.email = email,
    this.password = password,
    this.is_superuser = false
  }

  static async createTable() {
    const userTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        is_superuser BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    try{
      await connection.execute(userTableQuery);
      console.log('TAble created success')
    } catch(err){
      console.error('error creating table' , err);
    }
  }
}


export default User;