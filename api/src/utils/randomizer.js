/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
const arrayRandomizer = (array) => {
  const randomNumbers = []
  const reorganizedArray = []
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
