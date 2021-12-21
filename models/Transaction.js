import mongoose, { SchemaTypes } from "mongoose";

const Transaction = mongoose.Schema({
  rent_date: {
    type: Date,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
});

export default mongoose.model("transaction", Transaction);
