// ===============================================================================================
// Module Dependencies
// ===============================================================================================

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import dummyData from './utils/dummyData';


// ===============================================================================================
// Initial Configurations
// ===============================================================================================

// Load all secrets from .env file into process.env 
dotenv.config();
dotenv.load({ path: '../.env' });


// Mongoose promises are deprecated, use native promises
mongoose.Promise = global.Promise;
// Connect to MongoLab 
mongoose.connect(process.env.MONGOLAB_URI, (err) => {
  if (err) {
    console.error('Please make sure Mongodb is installed and running!');
    throw err;
  }

  // Add dummy data
  dummyData();
});


// ===============================================================================================
// Express Configurations
// ===============================================================================================
const app = new express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));


// ===============================================================================================
// Set Up App Routes
// ===============================================================================================

app.get('/test', (req, res) => {
  let testData = [
    {
      username: 'Tom',
      food: 'Pickles'
    },
    {
      username: 'Jim',
      food: 'Rice'
    },
    {
      username: 'Bloop',
      food: 'Steak'
    }
  ]
  res.json(testData)
});

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


// ===============================================================================================
// Set Up Authentication Routes
// ===============================================================================================



// ===============================================================================================
// Set Up API Routes
// ===============================================================================================





// ===============================================================================================
// Start Express Server 
// ===============================================================================================

app.listen((process.env.PORT || 3000), (error) => {
  if (!error) {
    console.log('This app is running on port: '+ (process.env.PORT || 3000) +'!'); // eslint-disable-line
  }
});


export default app;
