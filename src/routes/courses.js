const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newsController.index
router.get('/create', courseController.create);
router.post('/create_store', courseController.create_store);
router.get('/:slug', courseController.show);

module.exports = router;
