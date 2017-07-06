import express from 'express';
import path from 'path';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import userController from '../controllers/user';
import restaurantController from '../controllers/restaurant';

import app from '../server';

const userRoutes = express.Router();
const restaurantRoutes = express.Router();


exports.setUserRoutes = (app)=> {
	userRoutes.get('/login', passport.authenticate('jwt', {session: false}), userController.getLogin);
	userRoutes.post('/login', userController.postLogin);
	userRoutes.post('/register', userController.postRegister);
	userRoutes.post('/authenticate', userController.postAuthenticate);
	userRoutes.post('/refreshJwt', passport.authenticate('jwt', {session: false}), userController.postRefreshJwt);
	userRoutes.get('/testRoute', passport.authenticate('jwt', {session: false}), userController.getTestRoute);
	userRoutes.get('/user/profile/:userId')
	app.use('/api', userRoutes);
}

exports.setRestaurantRoutes = (app) => {
	restaurantRoutes.get('/search', restaurantController.getSearchResults);
	app.use('/api', restaurantRoutes);
}