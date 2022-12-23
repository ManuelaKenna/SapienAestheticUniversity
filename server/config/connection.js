const mongoose = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || `mongodb://localhost:27017/Sapien-Aesthetic-University`;

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;