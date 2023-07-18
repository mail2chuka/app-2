import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    paymentAmount: { type: Number, required: true },
    accountBalance: { type: Number, required: false, default: 0 },
    paymentDueDate: { type: String, required: false },
  },
  { timestamps: true }
);
const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default Payment;
