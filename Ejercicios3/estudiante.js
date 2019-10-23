const Persona = require('./persona')

class Estudiante extends Persona{

    constructor(nombre, fechaNacimiento, dni, curso){

        super(nombre, fechaNacimiento, dni)
        this.curso = curso

    }

    toString() {

        return `${super.toString()}, y del curso ${this.curso}`

    }

    static getOlderStudent(coleccionEstudiantes){

        let olderStudent = {}
        let fechaMs = coleccionEstudiantes[0].fechaNacimiento.getTime()

        for (let i = 0; i < coleccionEstudiantes.length; i++) {
            if (coleccionEstudiantes[i].fechaNacimiento.getTime() <= fechaMs) {
                fechaMs = coleccionEstudiantes[i].fechaNacimiento.getTime()
                olderStudent = coleccionEstudiantes[i]
            }

        }

        return olderStudent

    }

}

const estudiante1 = new Estudiante('José Luis Gómez López', new Date(1997, 00, 09), '11111111H', 'segundo')
const estudiante2 = new Estudiante('Paco Gómez López', new Date(1997, 09, 10), '11111111H', 'segundo')
const estudiante3 = new Estudiante('Manuel Luis Gómez López', new Date(1997, 05, 14), '11111111H', 'segundo')
const estudiante4 = new Estudiante('Jacinto Gómez López', new Date(1997, 03, 30), '11111111H', 'segundo')
const estudiante5 = new Estudiante('Antonio Gómez López', new Date(1997, 10, 01), '11111111H', 'segundo')

const estudiantes = []
estudiantes.push(estudiante1)
estudiantes.push(estudiante2)
estudiantes.push(estudiante3)
estudiantes.push(estudiante4)
estudiantes.push(estudiante5)

// console.log(estudiantes)

console.log(Estudiante.getOlderStudent(estudiantes))

// console.log(estudiante)
// console.log(estudiante.toString())