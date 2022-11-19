const mongoose = require('mongoose')

const connect = (uri, cb = undefined) => mongoose.connect(uri, cb)

module.exports = connect
