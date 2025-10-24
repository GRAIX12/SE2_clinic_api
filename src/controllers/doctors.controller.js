const Doctor = require('../models/Doctor.js');

exports.list = async (req, res, next) => {
  try {
    const docs = await Doctor.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const d = await Doctor.create(req.body);
    res.status(201).json(d);
  } catch (err) { next(err); }
};

exports.get = async (req, res, next) => {
  try {
    const d = await Doctor.findById(req.params.id);
    if (!d) return res.status(404).json({ error: 'Doctor not found' });
    res.json(d);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const d = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!d) return res.status(404).json({ error: 'Doctor not found' });
    res.json(d);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const d = await Doctor.findByIdAndDelete(req.params.id);
    if (!d) return res.status(404).json({ error: 'Doctor not found' });
    res.json({ ok: true });
  } catch (err) { next(err); }
};
