module.exports = class Persona {

    constructor(nombre, apellidos, email, genero){
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.genero = genero
    }

    toString() {
        return "Nombre: " + this.nombre + ", apellidos: " + this.apellidos + ", email: " + this.email + ", genero: " + this.genero
    }

}

/* let persona = new Persona("Jose Luis", "Gomez Lopez", "jlgomezlopez@yahoo.es", "mujer")

console.log(persona.toString()) */