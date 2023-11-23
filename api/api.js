const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const entryRouter = require('./routers/entryRouter')

const api = express()

api.use(express.json())
api.use(logger('dev'))
api.use(cors())

api.use("/entries", entryRouter)

api.get("/", (req, res) => {
    res.json({
        name: "LaFosse Diaries",
        description: "Minds on Paper",
        endpoints: [
            'GET /entries', // done jarv
            'GET /entries/:id', // in progress gajani
            'GET /entries/:date_created',
            'GET /entries/:category',
            'POST /entries', // done jarv
            'PATCH /entries/:id',
            'DELETE /entries/:id' // inprog jarv
        ]
    })
})


module.exports = api