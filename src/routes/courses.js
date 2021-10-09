const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newsController.index
router.get('/create', courseController.create);
router.post('/create_store', courseController.create_store);
router.post('/handle-form-action', courseController.handleFormAction);
router.post(
    '/handle-form-action-trash',
    courseController.handleFormActionTrash,
);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update_store);
router.patch('/:id/restore', courseController.restore_store);
router.delete('/:id', courseController.delete_soft);
router.delete('/:id/force', courseController.delete_force);
router.get('/:slug', courseController.show);

module.exports = router;
