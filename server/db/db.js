import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2'
import config from './config.js';

const connectDB = async() => {
const pool = mysql.createPool(config)

pool.getConnection((err, connection) => {
  if(err) {
    console.log({error : err.message});
    return
  }

  console.log('Connected to MySQL database');
 connection.release();
});
};


export default connectDB;