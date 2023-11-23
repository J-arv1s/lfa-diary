const { Router } = require('express')

const entryController = require('../controllers/entryController')
const entryRouter = Router()


// Read
entryRouter.get('/', entryController.index)
entryRouter.get('/:id', entryController.show)
entryRouter.get('/category/:category', entryController.showCategory)
// entryRouter.get('/:date_created', entryController.showDate)

// Create
entryRouter.post('/', entryController.create)

// Update
entryRouter.patch('/:id', entryController.update)

// Delete
entryRouter.delete('/:id', entryController.destroy)

module.exports = entryRouter