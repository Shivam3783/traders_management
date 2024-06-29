const express = require('express');
const { getShipments } = require('../controllers/shipmentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getShipments);

module.exports = router;
