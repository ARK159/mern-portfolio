const express = require('express');
const { sendEmailController } = require('../controllers/portfolioControllers');

//routers
const router = express.Router();

router.post('/sendEmail',sendEmailController);


module.exports=router