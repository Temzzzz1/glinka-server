
const { Router } = require('express');
const { post } = require('../admin/adminRoute');
const router = Router();
const postController = require('./postController')

router.get('/portfolio', postController.showPosts)

router.post('/portfolio',  postController.addPost)

module.exports = router;