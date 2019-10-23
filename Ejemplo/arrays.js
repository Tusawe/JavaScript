const randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max))

const length = 10
const max = 100

const arrayRandom = randomArray(length,max)
console.log(arrayRandom)

const MAX = 55

const result = arrayRandom.filter(numero => numero < MAX)
console.log(result)