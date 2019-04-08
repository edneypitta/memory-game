export const getRandomIntBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const getRandomInArray = array =>
  array[getRandomIntBetween(0, array.length - 1)]
