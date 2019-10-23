class Alumno {

    constructor (curso) {

        this.curso = curso

    }

    get () {

        return this.curso.toUpperCase()

    }

    set (nuevoCurso) {

        this.curso = nuevoCurso

    }

    toString () {

        return `Alumno del curso ${this.curso}`

    }

    static saludar (nombre) {

        return `Saludos de ${nombre}`

    }

}

let alumno = new Alumno('primero')
console.log(alumno)
console.log(alumno.curso)
alumno.curso = 'segundo'
console.log(alumno.curso)
alumno.set('tercero')
console.log(alumno.curso)
console.log(alumno.get())
console.log(alumno.toString())
console.log(Alumno.saludar('Juan'))