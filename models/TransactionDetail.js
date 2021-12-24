import mongoose from "mongoose";

const TransactionDetail = mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  subtotal_price: {
    type: Number,
    required: true,
  },
  field: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "field",
  },
});

export default mongoose.model("transaction_detail", TransactionDetail);
