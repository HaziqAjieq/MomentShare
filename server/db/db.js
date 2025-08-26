
import mysql from 'mysql2/promise'
import config from '../config/config.js';



async function databaseQuery() {
  let connection;
  const pool = mysql.createPool(config);
  try {
    connection = await pool.getConnection();
    console.log('database connected');
  }catch (error) {
    console.error('Error executing query:', error);
}finally {
    if (connection) connection.release(); // Release the connection back to the pool
}

return
}



export default databaseQuery; // Export the function, not a function call