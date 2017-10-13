import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Normal', 'Business', 'Admin'], default: 'Normal' },
  dateJoined: { type: 'Date', default: Date.now, required: true },
  profile: {
  	firstName: { type: String, required: true},
  	lastName: { type: String, required: true},
  	picUrl: { type: String, default: '/assets/images/placeholder.png'},
  }
});

// Before saving the user, hash the password. Each middleware will call next()
// http://mongoosejs.com/docs/middleware.html for more info
userSchema.pre('save', function(next) {
	// proceed if password was modified or if a new user was created
	if (this.isModified('password') || this.isNew) {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) {
				return next(err);
			} 
			bcrypt.hash(this.password, salt, (err, hash) => {
				if (err) {
					return next(err);
				}
				this.password = hash;
				next();
			})
		})
	} else {
		return next();
	}
})


// create a method to compare the hashed user password
userSchema.methods.comparePassword = function(password, callback){
	bcrypt.compare(password, this.password, (err, isMatch) => {
		if (err) {
			return callback(err);
		}
		callback(null, isMatch);
	})
}

export default mongoose.model('User', userSchema);

