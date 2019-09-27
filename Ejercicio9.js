const objeto1 = {nombre: 'luis',edad  : 45}
console.log('objeto1 ' , objeto1)
objeto1.edad = 55
console.log('objeto1 ' , objeto1)
const objeto2 = {}
let objeto3 = objeto1
console.log('objeto1 ' , objeto1)
console.log('objeto2 ' , objeto2)
console.log('objeto3 ' , objeto3)
console.log('objeto1 === objeto3 ' , objeto1 === objeto3)
objeto3 = objeto2
console.log('objeto1 === objeto3 ' , objeto1 === objeto3)