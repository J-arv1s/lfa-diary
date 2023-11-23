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
        const newEntry = await Entry.create(data)
        res.status(201).send(newEntry)
    } catch (error) {
        res.status(400).json({ "error": error.message})
    }
}

// async function destroy(req, res){
//     try {
//         const entry_id = parseInt(req.params.id)
//         const entry = await Entry.getOneById(entry_id)
//         await entry.destroy()
//         res.status(204).end()
//     } catch (error) {
//         res.status(404).json({ "error": error.message})
//     }
// }

module.exports = {
    index,
    create,
    // destroy
}