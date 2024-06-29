const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const containerRoutes = require('./routes/containerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/containers', containerRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/shipments', shipmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
