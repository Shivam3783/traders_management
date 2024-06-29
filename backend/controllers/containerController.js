const Container = require('../models/container');

exports.createContainer = async (req, res) => {
  const { size, availableSpace, destination, departureDate, price } = req.body;

  try {
    const container = await Container.create({
      size,
      availableSpace,
      destination,
      departureDate,
      price,
      shippingCompany: req.user._id
    });

    res.status(201).json(container);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getContainers = async (req, res) => {
  const { destination, departureDate, size } = req.query;
  let query = {};

  if (destination) query.destination = destination;
  if (departureDate) query.departureDate = { $gte: new Date(departureDate) };
  if (size) query.size = size;

  try {
    const containers = await Container.find(query).populate('shippingCompany', 'name email');
    res.json(containers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
