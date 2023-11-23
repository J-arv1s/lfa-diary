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
            'GET /entries',
            'GET /entries/:id'
        ]
    })
})


module.exports = api