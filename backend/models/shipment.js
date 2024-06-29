const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  status: { type: String, enum: ['booked', 'in_transit', 'delivered'], default: 'booked' },
  updates: [{ status: String, date: Date }],
}, { timestamps: true });

module.exports = mongoose.model('Shipment', ShipmentSchema);
