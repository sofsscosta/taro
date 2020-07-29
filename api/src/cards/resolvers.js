const { models: { Card } } = require('../../data')
const { Types: { ObjectId } } = require('mongoose')

const getCard = async id => await Card.findOne({ _id: ObjectId(id) })

const getCards = async () => await Card.find();

const createCard = async (name, suite, image, description, interpretation) => {
    const card = new Card({
        name: name,
        suite: suite,
        image: image,
        description: description,
        interpretation: interpretation
    })
    return await card.save()
}

const createCards = async inputArray => {
    inputArray.map(arg => {
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
    return await Card.find({})
}

module.exports = { getCard, getCards, createCard, createCards }