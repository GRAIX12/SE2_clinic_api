const Appointment = require('../models/Appointment.js');
const Patient = require('../models/Patient.js');
const Doctor = require('../models/Doctor.js');

exports.list = async (req, res, next) => {
  try {
    const list = await Appointment.find()
      .populate('patientId', 'name email')
      .populate('doctorId', 'name specialty')
      .sort({ startAt: 1 });
    res.json(list);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const { patientId, doctorId, startAt, endAt, notes } = req.body;
    if (!patientId || !doctorId || !startAt || !endAt) {
      return res.status(400).json({ error: 'patientId, doctorId, startAt and endAt are required' });
    }

    const [patient, doctor] = await Promise.all([
      Patient.findById(patientId),
      Doctor.findById(doctorId)
    ]);
    if (!patient) return res.status(400).json({ error: 'Invalid patientId' });
    if (!doctor) return res.status(400).json({ error: 'Invalid doctorId' });

    const a = await Appointment.create({ patientId, doctorId, startAt, endAt, notes });
    const populated = await a.populate('patientId', 'name email').populate('doctorId', 'name specialty');
    res.status(201).json(populated);
  } catch (err) { next(err); }
};

exports.get = async (req, res, next) => {
  try {
    const a = await Appointment.findById(req.params.id)
      .populate('patientId', 'name email')
      .populate('doctorId', 'name specialty');
    if (!a) return res.status(404).json({ error: 'Appointment not found' });
    res.json(a);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    if (req.body.patientId) {
      const p = await Patient.findById(req.body.patientId);
      if (!p) return res.status(400).json({ error: 'Invalid patientId' });
    }
    if (req.body.doctorId) {
      const d = await Doctor.findById(req.body.doctorId);
      if (!d) return res.status(400).json({ error: 'Invalid doctorId' });
    }

    const a = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .populate('patientId', 'name email')
      .populate('doctorId', 'name specialty');

    if (!a) return res.status(404).json({ error: 'Appointment not found' });
    res.json(a);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const a = await Appointment.findByIdAndDelete(req.params.id);
    if (!a) return res.status(404).json({ error: 'Appointment not found' });
    res.json({ ok: true });
  } catch (err) { next(err); }
};
