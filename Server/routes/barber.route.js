const { Router } = require('express');
const barberRouter = Router();

const barberController = require('../controller/barber.controller');


barberRouter.route('/getBarber').get(barberController.getBarber);
barberRouter.route('/getBarberSchedule').get(barberController.getBarberSchedule);


module.exports = barberRouter;