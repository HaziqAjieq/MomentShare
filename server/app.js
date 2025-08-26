import dotenv from 'dotenv'; 
dotenv.config();
import express from 'express';
import databaseQuery from './db/db.js';
import cors from 'cors'

const app = express();
const port = process.env.DP_PORT ; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
databaseQuery();

app.listen(port , () => {
  console.log(`Server listening on port ${port}`)
})