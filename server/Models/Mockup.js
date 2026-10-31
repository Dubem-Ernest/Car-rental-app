// models/User.js
const mongoose = require("mongoose");

const mockupSchema = new mongoose.Schema({
  firstName: { type: String},
  displayImage: {
    type: String,
  },
  multipleImages: [
    {
        type: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mockup", mockupSchema);
