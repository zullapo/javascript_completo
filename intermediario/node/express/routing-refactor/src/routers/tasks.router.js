const express = require('express')

const router = express.Router()

const tasksController = require('../controllers/tasks.controller')

router.get('/', tasksController.get)

router.post('/', tasksController.post)

router
    .route('/:id')
    .get(tasksController.getById)
    .put(tasksController.put)
    .patch(tasksController.patch)
    .delete(tasksController.delete)

module.exports = router
