
const { Router } = require('express');
const router = Router();
const welcomeController = require('./welcomeController')

//router.get('/', )

router.get('/text', (req, res) => {
    res.json({name: 'tema'})
})

module.exports = router;