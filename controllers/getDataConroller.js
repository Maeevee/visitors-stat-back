const Log = require('../models/logModel')

const getDataConroller = async(req, res) => {
    const data = await Log.find()
    res.status(200).json({message: 'successfully', data})
}

module.exports = getDataConroller