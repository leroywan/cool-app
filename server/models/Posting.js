import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postingSchema = new Schema({
  driverName: { type: "String", required: true },
  description: { type: "String", required: true },
  startingPoint: { type: "String", required: true },
  destination: { type: "String", required: true },
  carModel: { type: "String", required: true },
  seatsAvailable: { type: "Number", required: true },
  petsAllowed: { type:"Boolean", required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Posting', postingSchema);

