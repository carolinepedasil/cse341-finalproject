import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    region: String,
    capital: String,
    language: String,
    currency: String
  },
  { timestamps: true }
);

export default mongoose.model('Country', countrySchema);