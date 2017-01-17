import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: String,
  password: String
});

const User = mongoose.model('User', UserSchema);
