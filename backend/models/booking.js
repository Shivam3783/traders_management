const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  container: { type: mongoose.Schema.Types.ObjectId, ref: 'Container', required: true },
  exporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['booked', 'in_transit', 'delivered'], default: 'booked' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
