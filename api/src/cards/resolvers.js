const { models: { Card } } = require('data')

const getCard = async id => await Card.findById(id);

const getCards = async () => {
    console.log('got here')
    const cards = await Card.find({});
    console.log(cards)
    return cards
}

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