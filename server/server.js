import express from 'express';
import path from 'path';

import mongoose from 'mongoose';
import dummyData from './api/dummyData';

// Mongoose promises are deprecated, use native promises
mongoose.Promise = global.Promise;

// Connect to MongoLab 
mongoose.connect('mongodb://leroywan:wflmcgfa@ds111622.mlab.com:11622/carpoolapp', (err) => {
  if (err) {
    console.error('Please make sure Mongodb is installed and running!');
    throw err;
  }

  // Add dummy data
  dummyData();
});



const app = new express();
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



app.listen((process.env.PORT || 3000), (error) => {
  if (!error) {
    console.log('This app is running on port: '+ (process.env.PORT || 3000) +'!'); // eslint-disable-line
  }
});

export default app;
