const axios = require('axios')
const Log = require('../models/logModel')

const {IPSTACK_APIKEY} = process.env

async function getGeolocationByIp(ip) {
    try {
        const {data} = await axios.get(`http://api.ipstack.com/${ip}?access_key=${IPSTACK_APIKEY}`)
        console.log(data);
        return data
    } catch (error) {
        console.log('error');
        return null
    }
}
const logController = async(req, res) => {
    const visitData = req.body
    const ipInfo = await getGeolocationByIp(visitData.ipAddress)
    
    visitData.country = ipInfo 
    console.log("======>", visitData);
    const newVisitor = await Log.create({... visitData})
    res.json({
        status: 'success',
        code: 200,
        data: {
            visitData: newVisitor
        }
})

}

module.exports = logController