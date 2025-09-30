import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    countryCode: { type: String, index: true },
    location: String,
    date: Date
  },
  { timestamps: true }
);

export default mongoose.model('Event', eventSchema);