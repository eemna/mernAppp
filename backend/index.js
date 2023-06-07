import express from 'express';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';

// import routes
import usersRoutes from './routes/users.js';

const app=express();

const PORT = 5000;

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

// import routes
app.use('/', usersRoutes);

app.get('/',(req,res) => res.send(`Hello from Homepage.`));


// create server
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));