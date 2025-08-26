import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';

// get file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path : path.resolve(__dirname,'../.env')})

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD ,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}
console.log('Config being used:', config);

export default config;