import User from '../models/User';
import passport from 'passport';
import jwt from 'jsonwebtoken';


// ===============================================================================================
// GET /login ### Login Page
// ===============================================================================================

exports.getLogin = (req, res) => {
  res.send('Haya!!!');
};


// ===============================================================================================
// POST /login ### Sign In Page
// ===============================================================================================

exports.postLogin = (req, res) => {
  
};

// ===============================================================================================
// GET /register ### Sign In Page
// ===============================================================================================


// ===============================================================================================
// POST /register ### Register New Users
// ===============================================================================================

exports.postRegister = (req, res) => {
	if (!req.body.email || !req.body.password) {
		res.json({ success: false, message: 'Email and password is needed for registration.' })
	} else {
		let user = new User({ 
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
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
// POST /api/authenticate ### Authenticate Users
// ===============================================================================================

exports.postAuthenticate = (req, res) => {
	// find the user based on unique email
	User.findOne({ email: req.body.email }, (err, user)=>{
			if (err) throw err;

			if (!user) {
				res.send({ success: false, message: 'Unable to authenticate. User not found.' })
			} else {
				// compare hased password ### see: /models/User.js 
				user.comparePassword(req.body.password, (err, isMatch)=>{
					if (isMatch && !err) {
						// create token if password matches
						let token = jwt.sign(user, process.env.JWT_SECRET, {
							// expiration in 24 hours
							expiresIn: 1440 
						});
						res.json({ success: true, token: 'JWT ' + token });
					} else {
						res.send({ success: false, message: 'Unable to authenticate. Password does not match.' })
					}
				})
			};
	});
}


// TEST ROUTE
exports.getTestRoute = (req, res)=>{
	res.json(req.user);
}