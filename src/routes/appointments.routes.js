const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appointments.controller.js');

module.exports = router;

router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.post('/', appointmentController.createAppointment);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

