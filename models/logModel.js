const{Schema, model, version} = require('mongoose')
const logDBSchema = Schema(
    {
        timeStamp: {type: Number},
        ipAddress: {type: String},
        country: Schema.Types.Mixed
    },
    {
        versionKey: false, 
        timestamps: true
    }
)

const Log = model('log', logDBSchema)

module.exports = Log