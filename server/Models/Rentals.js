const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    bookedItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car', 
      required: true
    },
    // Start date and time of the booking
    startDate: {
      type: Date,
      required: true
    },
    // End date and time of the booking
    endDate: {
      type: Date,
      required: true
    },// Status of the booking (e.g., 'pending', 'confirmed', 'cancelled')
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending'
    },
    // Total price of the booking
    totalPrice: {
      type: Number,
      required: true
    }, // Timestamp for when the booking was created
    createdAt: {
      type: Date,
      default: Date.now
    }
   
  });

  const Rentals = mongoose.model('Rentals', rentalSchema);

  module.exports =  Rentals;