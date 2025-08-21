import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/db.js'
import cors from 'cors'


const app = express();
const port = process.env.DP_PORT ; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

connectDB();

app.listen(port , () => {
  console.log(`Server listeneing on port ${port}`)
})