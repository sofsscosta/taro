const mongoose = require('mongoose')
const { card } = require('../schemas')

module.exports = mongoose.model('Card', card)