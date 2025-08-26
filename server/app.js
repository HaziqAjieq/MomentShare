import dotenv from 'dotenv'; 
dotenv.config();
import express from 'express';
import databaseQuery from './db/db.js';
import cors from 'cors'

const app = express();
const port = process.env.DP_PORT ; 
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/test-db', async (req , res ) => {
  try{
    await databaseQuery();
    res.json({message : 'Database connected'})
  } catch(error){
    res.status(500).json({error : 'Database connection failed'})
  }
})

app.listen(port , () => {
  console.log(`Server listening on port ${port}`)
})