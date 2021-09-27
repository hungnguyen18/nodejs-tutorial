const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index

router.use('/covid', newsController.show);
router.use('/', newsController.index);
module.exports = router;
