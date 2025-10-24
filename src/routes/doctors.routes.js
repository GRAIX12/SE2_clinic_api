const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/doctors.controller.js');

module.exports = router;

router.get('/', doctors.controller.getAllDoctors);
router.get('/:id', doctors.controller.getDoctorById);
router.post('/', doctors.controller.createDoctor);
router.put('/:id', doctors.controller.updateDoctor);
router.delete('/:id', doctors.controller.deleteDoctor);

