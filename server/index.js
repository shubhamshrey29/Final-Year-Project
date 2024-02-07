import express from 'express';
import dotenv from 'dotenv'
import cors from  'cors';
import bodyParser from 'body-parser';


import Connection from './Database/db.js';
import DefaultData from './Database/default.js';
import Router from './routes/route.js';


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use (bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const PORT= 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

// In index.js or wherever you are calling DefaultData
app.listen(PORT, () => console.log(`Server is running Successfully on PORT ${PORT}`));


DefaultData();