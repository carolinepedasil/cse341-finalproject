import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || 'world_explorer';
  if (!uri) throw new Error('MONGODB_URI is missing');

  await mongoose.connect(uri, { dbName });
  console.log('MongoDB connected →', dbName);
};

export default connectDB;