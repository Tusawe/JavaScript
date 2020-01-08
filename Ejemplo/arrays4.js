const personas = [
    { nombre : 'juan', edad : 23 } , 
    { nombre : 'felipe', edad : 11 } ,
    { nombre : 'juani', edad : 2 } ,
    { nombre : 'ester', edad : 23 } ,
    { nombre : 'luis', edad : 33 } , 
    { nombre : 'julian', edad : 22 } ,
    { nombre : 'carmina', edad : 3 } ,
    { nombre :'ignacio', edad : 13 } ,
    { nombre : 'pedro', edad : 38 } , 
    { nombre : 'gervasio', edad : 43 }]

// BUCLE CORRIENTE
for (let i = 0; i < personas.length; i++ ) {
    console.log(personas[i].nombre)
}

// BUCLE FOREACH
personas.forEach(persona =>
    console.log(persona.nombre))

// BUCLE FOR...IN
for (let persona in personas) {
    console.log(personas[persona].nombre)
}

// BUCLE FOR...OF
for (const persona of personas){
    console.log(persona.nombre)
}