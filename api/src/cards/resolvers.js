const { Types: { ObjectId } } = require('mongoose')
const { models: { Card } } = require('../../data')
const { arrayRandomizer } = require('../utils/randomizer')

const getCard = async (id) => Card.findOne({ _id: ObjectId(id) })

const getCards = async () => {
  const cards = await Card.find()
  return arrayRandomizer(cards)
}

const createCard = async (name, suite, image, description, interpretation) => {
  const card = new Card({
    name,
    suite,
    image,
    description,
    interpretation
  })
  return card.save()
}

const createCards = async (inputArray) => {
  inputArray.map((arg) => {
    const card = new Card({
      name: arg.name,
      suite: arg.suite,
      image: arg.image,
      description: arg.description,
      interpretation: arg.interpretation
    })
    return JSON.stringify(card)
  })
  await Card.insertMany(inputArray)
  return Card.find({})
}

module.exports = { getCard, getCards, createCard, createCards }
