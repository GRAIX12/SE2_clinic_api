const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appointments.controller.js');

module.exports = router;

router.get('/', ctrl.getAllAppointments);
router.get('/:id', ctrl.getAppointmentById);
router.post('/', ctrl.createAppointment);
router.put('/:id', ctrl.updateAppointment);
router.delete('/:id', ctrl.deleteAppointment);

