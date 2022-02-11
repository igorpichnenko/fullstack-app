import mongoose from 'mongoose';

const connection = 'mongodb://mongo:27017/mongo-post';

export const connectDb = () => {
  return mongoose.connect(connection);
};
