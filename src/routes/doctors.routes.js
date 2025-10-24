const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/doctors.controller.js');

module.exports = router;

router.get('/', ctrl.getAllDoctors);
router.get('/:id', ctrl.getDoctorById);
router.post('/', ctrl.createDoctor);
router.put('/:id', ctrl.updateDoctor);
router.delete('/:id', ctrl.deleteDoctor);

