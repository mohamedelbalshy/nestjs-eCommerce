import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    title: String,
    description: String,
    image: String,
    price: String,
  },
  {
    timestamps: true,
  },
);
