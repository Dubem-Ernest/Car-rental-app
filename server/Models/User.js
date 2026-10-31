// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phoneNumber: { type: String, required: true, unique: true },
  role: { type: String, enum: ["User", "Admin","Guest"], default: "Guest" },
  profession: { type: String, default:"Annonymous" },
  profilePic: {
    type: String,
    default: null,
  },
  password: { type: String, required: true, minlength: 6 }, // Replaces otpVerification
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
