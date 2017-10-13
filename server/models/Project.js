import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectId: { type: String, required: true, unique: true },
  admins: [{type: String }],
  dateCreated: { type: 'Date', default: Date.now, required: true },
  info: {
  	name: { type: String, unique: true },
  }
});

export default mongoose.model('Project', projectSchema);

