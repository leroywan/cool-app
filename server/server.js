// ===============================================================================================
// Module Dependencies
// ===============================================================================================

// express
import express from 'express';

// utilities 
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// data
import mongoose from 'mongoose';
import dummyData from './utils/dummyData';
import User from './models/User';

// controllers

// application routes
import appRoutes from './routes/routes';



// ===============================================================================================
// Express Configurations
// ===============================================================================================
const app = module.exports = new express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Use body parser to get POST requests
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     
    extended: true
}));


// ===============================================================================================
// Initial Configurations
// ===============================================================================================

// Load all secrets from .env file into process.env 
dotenv.config();
dotenv.load({ path: '../.env' });

// Log requests to console
app.use(morgan('dev'));

// Mongoose promises are deprecated, use native promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, (err) => {
  if (err) {
    console.error('Please make sure Mongodb is installed and running!');
    throw err;
  }

  dummyData();
});

// Initialize passport after database set up
app.use(passport.initialize());
require('./config/passport')(passport);


// ===============================================================================================
// Set Up App Routes
// ===============================================================================================

appRoutes.setUserRoutes(app);

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


// ===============================================================================================
// Start Express Server 
// ===============================================================================================

app.listen((process.env.PORT || 3000), (error) => {
  if (!error) {
    console.log('This app is running on port: '+ (process.env.PORT || 3000) +'!'); // eslint-disable-line
  }
});

export default app;
