const mongoose = require('mongoose')
const { card } = require('../Schemas')

module.exports = mongoose.model('Card', card)