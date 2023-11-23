const Entry = require('../models/entry')

async function index(req, res){
    try {
        const entries = await Entry.getAll()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({ "error": error.message})
    }
}

async function create(req, res){
    try {
        const data = req.body
        const d = new Date().toDateString()
        const t = parseInt(new Date().getTime() / 1000)
        const newEntry = await Entry.create(data, d, t)
        res.status(201).send(newEntry)
    } catch (error) {
        res.status(400).json({ "error": error.message})
    }
}

async function show(req, res){
    try {
        const id = parseInt(req.params.id)
        const entry = await Entry.getOneById(id)
        res.status(200).json(entry)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function showCategory(req, res){
    try {
        const category = req.params.category.toLowerCase()
        const showCategory = await Entry.findByCategory(category)
        res.status(200).json(showCategory)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }

}

async function update(req, res){
    try {
        const entry_id = parseInt(req.params.id);
        const data = req.body
        const entryToUpdate = await Entry.getOneById(entry_id)
        const updatedEntry = await entryToUpdate.update(data)
        res.status(200).send(updatedEntry)
    } catch (error) {
        res.status(404).json({ "error": error.message})
    }
}

async function destroy(req, res){
    try {
        const entry_id = parseInt(req.params.id)
        const entry = await Entry.getOneById(entry_id)
        await entry.destroy()
        res.status(204).end()
    } catch (error) {
        res.status(404).json({ "error": error.message})
    }
}
module.exports = {
    create,
    index,
    show,
    showCategory,
    update,
    destroy
}