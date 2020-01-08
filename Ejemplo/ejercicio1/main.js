const dni = require('./dni')

const posiblesPersonas = [{ nombre : 'juan', apellidos: 'lopez lopez', edad : 45, dni : '11111111h' },
    { nombre : 'juan', apellidos: 'lopez lopez', edad : 45, dni : '11111111g' },
    { nombre : 'juani', apellidos: 'lopez garcıa', edad : 15, dni : '22222222j' },
    { nombre : 'petronio', apellidos: 'ruız ruiz', edad : 17, dni : '00000000t' },
    { nombre : 'petronio', apellidos: 'ruız ruiz', edad : 17, dni : '00000000g' }]

const personasBuscadas = posiblesPersonas.filter(persona => dni.comprobarLetra(persona.dni) && persona.edad < 18)
console.log(personasBuscadas)