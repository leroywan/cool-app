import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantId: { type: String, required: true, unique: true },
  generalInfo: {
  	displayName: { type: String, required: true },
  	city: { type: String, required: true },
  },
  dateRegistered: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Restaurant', restaurantSchema);

