const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: { type: String, required: true },
    suite: { type: String, enum: ['major arcana', 'wands', 'pentacles', 'swords', 'cups'], required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    interpretation: { type: String, required: true }
})