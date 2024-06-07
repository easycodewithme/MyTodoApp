require('dotenv').config();  // Load environment variables from .env file
const mongoose = require('mongoose');

// get the database URI from environment variables
const dbURI = process.env.MONGODB_URI;
console.log('MongoDB URI:', dbURI);  // Debugging line to check the value

// connect to the database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  appName: 'pulse'
});

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

// up and running then print the message
db.once('open', function() {
  console.log('Connected to Database');
});

// exporting the database
module.exports = db;
