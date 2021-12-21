import mongoose, { SchemaTypes } from "mongoose";

const TransactionDetail = mongoose.Schema({
  booking_date: {
    type: Date,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  subtotal_price: {
    type: Number,
    required: true,
  },
  field: {
    type: SchemaTypes.ObjectId,
    ref: "field",
  },
});

export default mongoose.model("transaction_detail", TransactionDetail);
