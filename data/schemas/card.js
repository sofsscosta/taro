const { Schema } = require('mongoose')

module.exports = new Schema({
    name: { type: String, required: true },
    suite: { type: String, enum: ['major', 'Wands', 'Pentacles', 'Swords', 'Cups'], required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    interpretation: { type: String, required: true }
})