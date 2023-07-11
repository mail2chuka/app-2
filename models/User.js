import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: false, unique: false },
    slug: { type: String, required: true, unique: true },
    accountBalance: { type: Number, required: false, default: 0 },
    paymentDueDate: { type: String, required: false },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
