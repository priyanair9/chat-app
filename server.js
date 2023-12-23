const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
// Add routes for authentication, user registration, and chat

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
