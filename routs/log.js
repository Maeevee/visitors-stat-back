const express = require("express")
const logController = require('../controllers/log')
const cntrlWraper = require('../helpers/cntrlWraper')
const getDataConroller = require('../controllers/getDataConroller')

const logRouter = express.Router()
logRouter.post('/', cntrlWraper(logController))

logRouter.get('/data', cntrlWraper(getDataConroller))

module.exports = logRouter