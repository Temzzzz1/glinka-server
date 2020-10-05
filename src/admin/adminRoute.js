
const { Router } = require('express');
const router = Router();
const adminController = require('./adminController')

router.post('/login', adminController.loginToPanel)

module.exports = router;