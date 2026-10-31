const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
      trim: true, // Removes whitespaces
    },
    carType: {
      type: String,
      required: true,
      trim: true, // Removes whitespaces
    },
    carDescription : {
      type: String,
      required: true,
      trim: true, // Removes whitespaces
    },
    displayImage: {
      type: String,
    },
    multipleImages: [{ type: String }],
    numberOfSeats: {
      type: Number,
      validate: {
        validator: function (value) {
          return value > 0 && value <= 20;
        },
        message: "car seats must be between 1 and 20.",
      },
      required: [true, "A number value is required!"],
    },
    carSteering: {
      type: String,
      required: true,
      trim: true, // Removes whitespaces
    },
    gasolineCapacity: {
      type: String,
      required: true,
      trim: true, // Removes whitespaces
    },
    recentPrice: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
    },
    rented: {
      type: Boolean,
      default: false,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: null
      },
      coordinates: {
        type: [Number],
        default: null
      },
    },

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        // autopopulate: true
      },
    ],
  },
  { timestamps: true, versionKey: "__v" }
);


carSchema.index({coordinates: "2dspheres"})

// carSchema.pre("save", function (next) {
//   if (!this.rented) {
//     this.position = undefined;
//   }
//   next();
// });



const Car = mongoose.model("Car", carSchema);

module.exports = Car;
