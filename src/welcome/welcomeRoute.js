
const { Router } = require('express');
const router = Router();
const welcomeController = require('./welcomeController')

router.get('/', welcomeController.showInstagramPosts)

router.get('/text', (req, res) => {
    res.sendFile("hello world")
})

module.exports = router;