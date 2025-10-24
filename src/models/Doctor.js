const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', DoctorSchema);
