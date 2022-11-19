const taskRepository = require('../repositories/tasks.repository')

exports.get = async (req, res, next) => {
    try {
        const tasks = await taskRepository.get()
        res.status(200).send(tasks)
    } catch (err) {
        next(err)
    }
}

exports.post = async (req, res, next) => {
    const { title, userId } = req.body

    if (!title | !userId | isNaN(userId)) {
        return res
            .status(400)
            .send({ mensagem: 'Erro 400', erro: 'Requisição não formatada corretamente' })
    }

    try {
        const taskData = {
            title,
            completed: false,
            createdAt: Date.now(),
            updatedAt: null,
            userId
        }
        const newTask = await taskRepository.post(taskData)
        res.status(200).send(newTask)
    } catch (err) {
        next(err)
    }
}

exports.getById = async (req, res, next) => {
    try {
        const task = await taskRepository.get(req.params.id)
        if (task) {
            res.status(200).send(task)
        } else {
            res.status(404).end()
        }
    } catch (err) {
        next(err)
    }
}

exports.put = async (req, res, next) => {
    const { title, completed, createdAt, updatedAt, userId } = req.body
    const task = {
        title,
        completed,
        createdAt,
        updatedAt,
        userId
    }

    try {
        const hasUndefined = Object.values(task).some((value) => value === undefined)

        if (hasUndefined) {
            return res
                .status(400)
                .send({
                    mensagem: 'Erro 400',
                    erro: 'Requisição não formatada corretamente'
                })
        }

        const newTask = await taskRepository.put(task, req.params.id)
        if (newTask) {
            res.status(200).send(newTask)
        } else {
            res.status(404).end()
        }
    } catch (err) {
        next(err)
    }
}

exports.patch = async (req, res, next) => {
    const { title, completed, userId } = req.body
    const updatedAt = Date.now()
    const updatedTask = { title, completed, userId, updatedAt }

    try {
        const newTask = await taskRepository.patch(updatedTask, req.params.id)
        if (newTask) {
            res.status(200).send(newTask)
        } else {
            res.status(404).end()
        }
    } catch (err) {
        next(err)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const deletedTask = await taskRepository.delete(req.params.id)
        if (deletedTask) {
            res.status(200).send(deletedTask)
        } else {
            res.status(404).end()
        }
    } catch (err) {
        next(err)
    }
}
