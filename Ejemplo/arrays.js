const randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max))

const length = 10
const max = 100

const arrayRandom = randomArray(length,max)
console.log(arrayRandom)

const MAX = 85

const mayor = arrayRandom.some(elemento => elemento > MAX)

if (mayor) {

    console.log(`Se supera el valor ${MAX}: ${mayor}`)
    const mayores = arrayRandom.filter(numero => numero > MAX)
    console.log(mayores)
    const suma = mayores.reduce((acumulador, valorActual) => {return acumulador + valorActual}, 0)
    console.log(`Valor de la suma de los mayores es ${suma}`)

} else {

    console.log(`Se supera el valor ${MAX}: ${mayor}`)

}