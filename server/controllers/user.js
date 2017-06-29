import User from '../models/User';
import passport from 'passport';
import cuid from 'cuid'; // collision resistant id generator
import funkyFruitNamer from '../utils/funkyFruitNamer'; //generates a random adjective-pronoun name

import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken-refresh'; //has an extra 'refresh' method


// ===============================================================================================
// GET /api/login ### Login Page
// ===============================================================================================

exports.getLogin = (req, res) => {
  res.json(req.user);
};


// ===============================================================================================
// POST /api/login ### Sign In Page
// ===============================================================================================

exports.postLogin = (req, res) => {
  
};

// ===============================================================================================
// GET /api/register ### Sign In Page
// ===============================================================================================


// ===============================================================================================
// POST /api/register ### Register New Users
// ===============================================================================================

// const name = moniker.generator([moniker.adjective, moniker.noun], { glue: ' ' });

exports.postRegister = (req, res) => {
	
	if (!req.body.email || !req.body.password) {
		res.json({ success: false, message: 'Email and password is needed for registration.' })
	} else {
		let user = new User({ 
			username: funkyFruitNamer.getName(),
			email: req.body.email,
			password: req.body.password,
			userId: cuid(),
		});

		user.save((err) => {
			if (err) {
				return res.json({ success: false, message: err.message})
			}

			res.json({ success: true, message: 'New user is created' })
		})
	}
};


// ===============================================================================================
// POST /api/authenticate ### Authenticate Users and Create Jwt Token
// ===============================================================================================

exports.postAuthenticate = (req, res) => {
	// find the user based on unique email
	User.findOne({ email: req.body.email }, (err, user)=>{
			if (err) throw err;

			if (!user) {
				res.send({ success: false, message: 'Unable to authenticate. User not found.' })
			} else {
				// compare to hashed password ### see: /models/User.js 
				user.comparePassword(req.body.password, (err, isMatch)=>{
					if (isMatch && !err) {
						// create token if password matches
						let token = jwt.sign(user, process.env.JWT_SECRET, {
							// expiration in 
							expiresIn: 600
						});
						res.json({ success: true, token: token });
					} else {
						res.json({ success: false, message: 'Unable to authenticate. Password does not match.' })
					}
				})
			};
	});
}


// ===============================================================================================
// POST /api/refreshJwt ### Refresh Jwt Token 
// ===============================================================================================

// can only be refreshed if user already has an existing, valid, token. 
exports.postRefreshJwt = (req, res) => {

	var refreshed = jwt.refresh(req.body, 600 ,process.env.JWT_SECRET);

	res.json({ success: true, token: refreshed });



	// find user in database and create token... 
	//this runs on every page change so there might be a more efficient way to do it in the future
	// User.findOne({ userId: user.userId }, (err, user) => {
	// 	if (err) throw err;

	// 	if (!user) {
	// 		res.json({ success: false, message: 'no user found' })
	// 	} else {
	// 		let token = jwt.sign(user, process.env.JWT_SECRET, {
	// 			expiresIn: 600
	// 		})

	// 		res.json({ success: true, token: token })
	// 	}
	// })

	// let token = jwt.sign(user, process.env.JWT_SECRET, {
	// 	expiresIn: 120	
	// })
}

// TEST ROUTE
exports.getTestRoute = (req, res)=>{

	// req.user contains authenticated user -- passport.authenticate
	res.json(req.user);
}