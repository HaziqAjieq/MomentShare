import mysql from "mysql2/promise";
import config from "../config/config.js";

const pool = mysql.createPool(config);

async function databaseQuery() {
 
  try {
   const  connection = await pool.getConnection();
    console.log("database connected");

    return connection;
  } catch (error) {
    console.error("Error executing query:", error);
  } 
}

export {pool , databaseQuery}; // Export the function, not a function call
export default databaseQuery;