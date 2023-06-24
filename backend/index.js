import express from 'express';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import cors from 'cors';//cors cookies

// import routes
import usersRoutes from './routes/users.js';

const app=express();

const PORT = 8000;

app.use(bodyParser.json());

// connect database
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://javascriptpassmetry:passmety123@cluster0.zngbqph.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
}

connectToDatabase();

app.use(cors())

// middleware cors
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// import routes
app.use('/', usersRoutes);

app.get('/',(req,res) => res.send(`Hello from Homepage.`));


// create server
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));