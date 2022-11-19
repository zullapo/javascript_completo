const express = require('express')

const router = express.Router()

const todoController = require('../controllers/todo.controller')

router.get('/', todoController.get)

router.post('/', todoController.post)

router
    .route('/:id')
    .get(todoController.getById)
    .put(todoController.put)
    .patch(todoController.patch)
    .delete(todoController.delete)

module.exports = router
