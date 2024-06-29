const mongoose = require('mongoose');

const ContainerSchema = new mongoose.Schema({
  size: { type: String, required: true },
  availableSpace: { type: Number, required: true },
  destination: { type: String, required: true },
  departureDate: { type: Date, required: true },
  price: { type: Number, required: true },
  shippingCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Container', ContainerSchema);
