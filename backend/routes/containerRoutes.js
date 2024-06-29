const express = require('express');
const { createContainer, getContainers } = require('../controllers/containerController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createContainer);
router.get('/', getContainers);

module.exports = router;
