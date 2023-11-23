const { Router } = require('express')

const entryController = require('../controllers/entryController')
const entryRouter = Router()

entryRouter.get('/', entryController.index)
entryRouter.post('/', entryController.create)

module.exports = entryRouter