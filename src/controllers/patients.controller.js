const Patient = require('../models/Patient.js');

exports.list = async (req, res, next) => {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 });
    res.json(patients);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const p = await Patient.create(req.body);
    res.status(201).json(p);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const p = await Patient.findById(req.params.id);
    if (!p) return res.status(404).json({ error: 'Patient not found' });
    res.json(p);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const p = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!p) return res.status(404).json({ error: 'Patient not found' });
    res.json(p);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const p = await Patient.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ error: 'Patient not found' });
    res.json({ ok: true });
  } catch (err) { next(err); }
};
