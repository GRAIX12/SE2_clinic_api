const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/patients.controller');


module.exports = router;

router.get('/', ctrl.getAllPatients);
router.get('/:id', ctrl.getPatientById);
router.post('/', ctrl.createPatient);
router.put('/:id', ctrl.updatePatient);
router.delete('/:id', ctrl.deletePatient);