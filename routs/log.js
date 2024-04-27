const express = require("express")
const logController = require('../controllers/log')
const cntrlWraper = require('../helpers/cntrlWraper')

const logRouter = express.Router()
logRouter.post('/log', cntrlWraper(logController))

module.exports = logRouter