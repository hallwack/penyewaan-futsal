import mongoose from "mongoose";

const Transaction = mongoose.Schema({
  booking_date: {
    type: Date,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  transaction_detail: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "transaction_detail",
    },
  ],
  admin: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "admin",
  },
});

export default mongoose.model("transaction", Transaction);
