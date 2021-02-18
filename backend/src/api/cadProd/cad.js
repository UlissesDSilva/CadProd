const restful = require('node-restful')
const mongoose = restful.mongoose

const cadSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true, default: 10},
    category: {type: String, required: true},
    registeredAT: {type: Date, default: Date.now()}
})

module.exports = restful.model('Cad', cadSchema)