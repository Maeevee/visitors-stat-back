const express = require('express')
const cors = require('cors')
const logRouter = require('./routs/log')

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/log', logRouter)

module.exports = app