const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewPost: String,
  rating: {
    type:Number,
    validate: {
      validator: (value) => value >= 1 && value <= 5,
      message: "Reviews must be between 1 and 5.",
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;
