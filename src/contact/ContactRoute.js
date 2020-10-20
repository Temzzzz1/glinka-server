
const { Router } = require('express');
const router = Router();
const adminController = require('./contactController')

router.post('/contact', adminController.sendMessage)

module.exports = router;