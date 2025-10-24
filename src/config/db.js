const mongoose = require('mongoose');

module.exports = async function connectDB(uri) {
  if (!uri) {
    console.warn('⚠️ MONGODB_URI not provided — skipping DB connection.');
    return;
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('✅ Connected to MongoDB Atlas');
};
