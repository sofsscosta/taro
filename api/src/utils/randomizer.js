const arrayRandomizer = (array) => {
  const randomNumbers = []
  const reorganizedArray = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const getRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * array.length)
      if (!randomNumbers.includes(randomNumber)) return randomNumbers.push(randomNumber)
      return getRandomNumber()
    }
    getRandomNumber()
    reorganizedArray.push(array[randomNumbers[i]])
  }
  return reorganizedArray
}

module.exports = { arrayRandomizer }
