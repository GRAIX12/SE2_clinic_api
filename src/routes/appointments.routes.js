const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appointments.controller.js');

module.exports = router;

router.get('/', appointments.controller.getAllAppointments);
router.get('/:id', appointments.controller.getAppointmentById);
router.post('/', appointments.controller.createAppointment);
router.put('/:id', appointments.controller.updateAppointment);
router.delete('/:id', appointments.controller.deleteAppointment);

