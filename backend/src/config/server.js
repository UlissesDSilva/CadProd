const express = require('express')
const bodyParse = require('body-parser')
const allowCors = require('./cors')
const server = express()

const port = 3003

server.use(bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json())
server.use(allowCors)

server.listen(port, () => console.log(`BACKEND is running on port ${port}`))

module.exports = server