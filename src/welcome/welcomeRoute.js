
const { Router } = require('express');
const router = Router();
const welcomeController = require('./welcomeController')

router.get('/', welcomeController.showInstagramPosts)

module.exports = router;