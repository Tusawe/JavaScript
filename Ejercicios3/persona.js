module.exports = class Persona {

    constructor(nombre, fechaNacimiento, dni){

        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.dni = dni

    }

    toString() {

        return `Persona ${this.nombre} con fecha de nacimiento ${this.fechaNacimiento} y DNI ${this.dni}`

    }

}

// const persona = new Persona('José Luis Gómez López', new Date(1997, 00, 09), '11111111H')
// console.log(persona)
// console.log(persona.toString())