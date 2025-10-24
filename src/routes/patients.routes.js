const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patients.controller');

module.exports = router;

router.get('/', patients.controller.getAllPatients);
router.get('/:id', patients.controller.getPatientById);
router.post('/', patients.controller.createPatient);
router.put('/:id', patients.controller.updatePatient);
router.delete('/:id', patients.controller.deletePatient);