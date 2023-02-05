const { Router } = require('express');
const adminRoute = Router();

const adminController = require('../controller/admin.controller');

adminRoute.get('/getAdmin/:email', adminController.getAdmin);

adminRoute.post('/addAdmin', adminController.addAdmin);

module.exports = adminRoute;
