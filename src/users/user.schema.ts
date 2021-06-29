import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,

  seller: {
    type: Boolean,
    default: false,
  },

  address: {
    addr1: String,
    addr2: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
});
