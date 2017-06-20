import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Normal', 'Business', 'Admin'], default: 'Normal' },
  dateJoined: { type: 'Date', default: Date.now, required: true },
});

userSchema.pre('save', function(next) {
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

