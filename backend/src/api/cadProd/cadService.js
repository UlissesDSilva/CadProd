const Cad = require('./cad')

Cad.methods(['get', 'post', 'put', 'delete'])
Cad.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Cad