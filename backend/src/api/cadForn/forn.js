const restful = require('node-restful')
const mongoose = restful.mongoose

const fornSchema = new mongoose.Schema({
    company: {type: String, required: true},
    followUP: {type: String, default: "General"}
})

module.exports = restful.model('Forn', fornSchema)