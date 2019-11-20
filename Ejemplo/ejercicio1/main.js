const dni = require('./dni')

const posiblesPersonas = [{ nombre : 'juan', apellidos: 'lopez lopez', edad : 45, dni : '11111111h' },
    { nombre : 'juan', apellidos: 'lopez lopez', edad : 45, dni : '11111111g' },
    { nombre : 'juani', apellidos: 'lopez garcıa', edad : 15, dni : '22222222j' },
    { nombre : 'juani', apellidos: 'lopez garcıa', edad : 15, dni : '22222222a' },
    { nombre : 'carmelo', apellidos: 'menendez garcıa', edad : 25, dni : '33333333a' },
    { nombre : 'carmelo', apellidos: 'menendez garcıa', edad : 25, dni : '33333333p' },
    { nombre : 'carmen', apellidos: 'menendez lopez', edad : 12, dni : '44444444p' },
    { nombre : 'carmen', apellidos: 'menendez lopez', edad : 12, dni : '44444444a' },
    { nombre : 'felipa', apellidos: 'mendez nunez', edad : 22, dni : '55555555k' },
    { nombre : 'felipa', apellidos: 'mendez nunez', edad : 22, dni : '55555555i' },
    { nombre : 'felipe', apellidos: 'mendez bueno', edad : 22, dni : '66666666i' },
    { nombre : 'felipe', apellidos: 'mendez bueno', edad : 22, dni : '66666666q' },
    { nombre : 'armando', apellidos: 'malo bueno', edad : 11, dni : '77777777q' },
    { nombre : 'armando', apellidos: 'malo bueno', edad : 11, dni : '77777777b' },
    { nombre : 'ariel', apellidos: 'malo contreras', edad : 21, dni : '88888888y' },
    { nombre : 'ariel', apellidos: 'malo contreras', edad : 21, dni : '88888888b' },
    { nombre : 'petronio', apellidos: 'ruız contreras', edad : 27, dni : '99999999b' },
    { nombre : 'petronio', apellidos: 'ruız contreras', edad : 27, dni : '99999999r' },
    { nombre : 'petronio', apellidos: 'ruız ruiz', edad : 17, dni : '00000000t' },
    { nombre : 'petronio', apellidos: 'ruız ruiz', edad : 17, dni : '00000000g' }]

const personasBuscadas = posiblesPersonas.filter(persona => dni.comprobarLetra(persona.dni) && persona.edad < 18)
console.log(personasBuscadas)