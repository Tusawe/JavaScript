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

    static obtenerPersonasPorGenero(coleccion, genero) {

        let contador = 0
        for (let i = 0; i < coleccion.length; i++) {

            if (coleccion[i].genero === genero) {

                contador++

            }

        }

        return contador

    }

    static obtenerPersonaEmpiezaPor (coleccion, letra) {

        const coleccionEmpieza = []
        
        for (let i = 0; i < coleccion.length; i++) {

            if (coleccion[i].nombre.toLowerCase().startsWith(letra.toLowerCase())) {

                coleccionEmpieza.push(coleccion[i])

            }

        }

        return coleccionEmpieza

    }

    static obtenerPersonaEmailAcaba (coleccion, dominio) {

        const coleccionAcaba = []
        
        for (let i = 0; i < coleccion.length; i++) {

            if (coleccion[i].nombre.toLowerCase().endsWith(dominio.toLowerCase())) {

                coleccionAcaba.push(coleccion[i])

            }

        }

        return coleccionAcaba.length

    }

    static obtenerNumeroDePersonasPorDominio(coleccion, dominio) {

        return coleccion.filter(persona => persona.email.endsWith(dominio)).length

    }

}

/* let persona = new Persona("Jose Luis", "Gomez Lopez", "jlgomezlopez@yahoo.es", "mujer")

console.log(persona.toString()) */