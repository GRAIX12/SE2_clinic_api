// src/app.js
const express = require('express');
const cors = require('cors');

const patientsRoutes = require('./routes/patients.routes');
const doctorsRoutes = require('./routes/doctors.routes');
const appointmentsRoutes = require('./routes/appointments.routes');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/patients', patientsRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/appointments', appointmentsRoutes);

// health
app.get('/', (req, res) => res.json({ ok: true, msg: 'Clinic API (Mongoose)' }));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
