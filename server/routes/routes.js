import express from 'express';
import path from 'path';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import userController from '../controllers/user';
import projectController from '../controllers/project';

import app from '../server';

const userRoutes = express.Router();
exports.setUserRoutes = (app)=> {
	userRoutes.post('/register', userController.postRegister);
	userRoutes.post('/authenticate', userController.postAuthenticate);
	userRoutes.post('/authenticateJwt', userController.postAuthenticateJwt);
	userRoutes.get('/getUserProfile', userController.getUserProfile);
	userRoutes.put('/editUserProfilePic', passport.authenticate('jwt', {session:false}), userController.editUserProfilePic);
	userRoutes.put('/editUserProfile', passport.authenticate('jwt', {session:false}), userController.editUserProfile);
	userRoutes.get('/user/profile/:userId')
	app.use('/api', userRoutes);
}

const projectRoutes = express.Router();
exports.setProjectRoutes = (app) => {
	projectRoutes.post('/createProject', projectController.postCreateProject);
	app.use('/api/project', projectRoutes);
}