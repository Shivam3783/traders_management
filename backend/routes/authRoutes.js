const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
// router.get('/profile', protect, getUserProfile);
router.get('/profile', getUserProfile);


module.exports = router;
