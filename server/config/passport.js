import passportJwt from 'passport-jwt';

import User from '../models/User';


// Read the JWT from http authorization header ### more at: https://www.npmjs.com/package/passport-jwt
module.exports = (passport) => {
	let opts = {};
	opts.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeader(); 
	opts.secretOrKey = process.env.JWT_SECRET;
	passport.use(new passportJwt.Strategy(opts, (jwtPayload, done)=>{
		User.findById(jwtPayload._doc._id, (err, user)=>{
			if (err) { return done(err, false) };
			if (user) { 
				done(null, user) ;
			} else {
				done(null, false);
			}
		});
	}));

};