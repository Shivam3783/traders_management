const Booking = require('../models/booking');

// @desc    Get all bookings for the logged-in user
// @route   GET /api/bookings
// @access  Private
exports.getBookings = async (req, res) => {
  try {
    const userId = req.user._id;
    const bookings = await Booking.find({ user: userId }).populate('container');

    if (!bookings) {
      return res.status(404).json({ message: 'No bookings found' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res) => {
  const { containerId } = req.body;

  try {
    const booking = new Booking({
      container: containerId,
      user: req.user._id,
      status: 'Booked',
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
