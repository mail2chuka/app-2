import mongoose from 'mongoose';
const paymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    paymentAmount: {},

    accountBalance: { type: Number, required: false, default: 0 },
    paymentDueDate: { type: String, required: false },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
