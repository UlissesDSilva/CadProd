const Forn = require('./forn')

Forn.methods(['get', 'post', 'put', 'delete'])
Forn.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Forn