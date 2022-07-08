import mongoose from 'mongoose';
import { mongoHost } from '../config/constants';

export const connection = () => {
  mongoose.connect(`${mongoHost}`);
  return mongoose.connection;
};