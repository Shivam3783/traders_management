const Shipment = require('../models/shipment');

exports.createShipment = async (req, res) => {
  const { bookingId } = req.body;

  try {
    const shipment = await Shipment.create({
      booking: bookingId,
      updates: [{ status: 'booked', date: new Date() }]
    });

    res.status(201).json(shipment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getShipments = async (req, res) => {
    try {
      const userId = req.user.id;
      const shipments = await Shipment.find({ user: userId }).populate({
        path: 'booking',
        populate: {
          path: 'container',
          model: 'Container'
        }
      });
  
      if (!shipments) {
        return res.status(404).json({ message: 'No shipments found' });
      }
  
      res.status(200).json(shipments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };