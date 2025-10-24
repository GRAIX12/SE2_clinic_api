require('dotenv').config();
const connectDB = require('./config/db.js');
const Patient = require('./models/Patient.js');
const Doctor = require('./models/Doctor.js');
const Appointment = require('./models/Appointment.js');

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    await Appointment.deleteMany({});
    await Patient.deleteMany({});
    await Doctor.deleteMany({});

    const p1 = await Patient.create({ name: 'Alice Santos', birthDate: '1990-02-12', email: 'alice@example.com', phone: '+639171234567' });
    const p2 = await Patient.create({ name: 'Juan Dela Cruz', birthDate: '1986-08-05', email: 'juan@example.com', phone: '+639188877766' });

    const d1 = await Doctor.create({ name: 'Dr. Maria Reyes', specialty: 'Cardiology' });
    const d2 = await Doctor.create({ name: 'Dr. John Tan', specialty: 'General Practice' });

    await Appointment.create({ patientId: p1._id, doctorId: d2._id, startAt: new Date(Date.now() + 3600 * 1000), endAt: new Date(Date.now() + 7200 * 1000), notes: 'Regular check-up' });
    await Appointment.create({ patientId: p2._id, doctorId: d1._id, startAt: new Date(Date.now() + 24 * 3600 * 1000), endAt: new Date(Date.now() + 24 * 3600 * 1000 + 3600 * 1000), notes: 'Chest pain consult' });

    console.log('✅ Seeding completed');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
