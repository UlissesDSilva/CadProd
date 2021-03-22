const express = require('express')

module.exports = function(server){
    const router = express.Router()

    server.use('/api', router)

    const cadService = require('../api/cadProd/cadService')
    const fornService = require('../api/cadForn/fornService')

    cadService.register(router, '/registerPro')
    fornService.register(router, '/registerForn')
}