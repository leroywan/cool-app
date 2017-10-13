import User from '../models/User';
import passport from 'passport';
import cuid from 'cuid'; // collision resistant id generator

import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken-refresh'; //has an extra 'refresh' method



// ===============================================================================================
// POST /api/register ### Register New Users
// ===============================================================================================

exports.postRegister = (req, res) => {
	
	if (!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName) {
		res.json({ success: false, message: 'Email, name, and password is needed for registration.' })
	} else {
		let user = new User({ 
			email: req.body.email,
			password: req.body.password,
			userId: cuid(),
			profile: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
			}
		});

		user.save((err) => {
			if (err) {
				return res.json({ success: false, message: err.message})
			}

			let token = jwt.sign(user, process.env.JWT_SECRET, {
				// expiration in 
				expiresIn: 600
			});
			res.json({ success: true, message: 'New user is created', token: token })
		})
	}
};


// ===============================================================================================
// POST /api/authenticate ### Authenticate Users and Create Jwt Token
// ===============================================================================================

exports.postAuthenticate = (req, res) => {
	if (!req.body.email || !req.body.password ) {
		res.json({ success: false, message: 'Email and password required for login' })
	} else {

		// find the user based on unique email
		User.findOne({ email: req.body.email }, (err, user)=>{
				if (err) throw err;

				if (!user) {
					res.send({ success: false, message: 'Unable to authenticate. User not found.' })
				} else {
					// compare to hashed password ### see: /models/User.js 
					user.comparePassword(req.body.password, (err, isMatch)=>{
						if (isMatch && !err) {
							// create a new token if password matches
							let token = jwt.sign(user, process.env.JWT_SECRET, {
								// expiration in 
								expiresIn: 600
							});
							res.json({ success: true, message: 'Successfully authenticated user', token: token })

						} else {
							res.json({ success: false, message: 'Unable to authenticate. Password does not match.' })
						}
					})
				};
		});
	}
}


// ===============================================================================================
// POST /api/authenticateJwt ### Authenticate and refreshes JWT
// ===============================================================================================

// can only be refreshed if user already has an existing, valid, token. 
exports.postAuthenticateJwt = (req, res) => {
	if (!req.body.token) {
		res.json({ success:false, message: "No token found" })
	} else {
		jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded)=>{
			if (err) {
				res.json({success: false, message: "token not verified"})
			} else {
				// once verified, refresh the token to prevent expiring
				let refreshed = jwt.refresh(decoded, 3600, process.env.JWT_SECRET);
				res.json({success: true, message: "token verified", token: refreshed})
			}
		});

	}
	
}

// ===============================================================================================
// GET /api/getUserProfile ### Retreive profile from database
// ===============================================================================================

exports.getUserProfile = (req, res) => {

	// Check for authorization header 
	if (!req.headers.authorization) {
		res.send(401, 'No authorization header found');
	}
	// Check for query
	if (!req.query.userId) {
		res.send(400, 'No query found in header')
	}
	
	// Check if user is getting another user's profile.
	const jwtToken = req.headers.authorization;
	const jwtDecoded = jwtDecode(jwtToken);
	if (jwtDecoded._doc.userId == req.query.userId) {
		// Provide all info to current user
		User.find({ userId:req.query.userId }, (err, user) => {
			if (err) throw err;

			if (!user) {
				res.json({success:false, message:"User profile does not exist"})
			} else {
				res.json({
					success: true,
					message: "Successfully retreived own profile",
					payload: user[0]
				})
			}
		})
	} else {
		// Provide public info on other users
		User.find({ userId: req.query.userId }, (err, user) => {
			if (err) throw err;

			if (!user) {
				res.json({ success: false, message: "User profile does not exist" })
			} else {
				res.json({ 
					success:true, 
					message: "Successfully retreived user profile", 
					payload: user[0].profile
				})
			}
		})	
	}
}

// ===============================================================================================
// PUT /api/editUserProfilePic ### Edits user profile picture
// ===============================================================================================

exports.editUserProfilePic = (req, res) => {

	// Check for authorization header 
	if (!req.headers.authorization) {
		res.send(401, 'No authorization header found');
	}

	User.findOneAndUpdate(
		{ userId: req.body.userId }, 
		{$set: {'profile.picUrl': req.body.picUrl }}, 
		(err, user)=>{
			if (err) {
				res.json({ success: false, message: "Failed to update photo" });
			} 
			if (!user) {
				res.json({ success: false, message: "No user found" });
			} else {
				res.json({ 
					success: true, 
					message: "Photo successfully updated", 
					picUrl: req.body.picUrl 
				});
			}
		}
	)
}




exports.editUserProfile = (req, res) => {

	// loop through all the attributes and set the values based on keys provided
	for (let i=0; i<Object.keys(req.body.attribute).length; i++) {
		let key = Object.keys(req.body.attribute)[i];
		let value = req.body.attribute[key];

		if (value) {
			// create object to set each individual keys
			let obj = {};
			let attributeKey = "profile." + key;
			obj[attributeKey] = value;

			User.update(
				{ userId: req.body.userId }, 
				{ $set: obj },
				(err, user) => {
					if (err) throw err;
					if (!user) {
						res.json({success: false, message: 'User does not exist'})
					} else {
						// send a response once the last object is set
						if (i == Object.keys(req.body.attribute).length - 1) {
							res.json({
								success: true, 
								message: 'Successfully edited user profile.'
							})
						}
					}
				}
			)
		}
	}

}