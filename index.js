const express = require('express')
const data = require('./Team data/team gear')

const api = express()

const HOST = 'localhost'
const PORT = 5000

api.get('/', (req,res) => {
    res.status(200).json(data)
})

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`))