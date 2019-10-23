const fs = require('fs')
const Persona = require('./Persona.js')

if (process.argv.length < 3)
{
	console.log("Debe proporcionar un parametros como minimo");
	process.exit();
}

let argumento = process.argv.slice(2)[0]

fs.readFile(argumento, 'utf-8', (err, data) => {

    if(err){

        console.log('error: ', err)

    } else { 

        //console.log(data.toString())
        console.log("Datos correctos.")
        let allRows = data.split(/\r?\n|\r/);
        let persona
        let personas = []
        for (let singleRow = 0; singleRow < allRows.length -1; singleRow++) {
            let rowCells = allRows[singleRow].split(',');
            persona = new Persona(rowCells[0], rowCells[1], rowCells[2], rowCells[3])
            personas.push(persona)
           // console.log(persona.toString())
        }

        // let genero = 'Male'
        // let letra = 'A'
        // console.log(`Nº persons con genero ${genero} es ${Persona.obtenerPersonasPorGenero(personas,genero)}`)
        // let personasNombre = Persona.obtenerPersonaEmpiezaPor(personas,letra)
        // for (let i = 0; i < personasNombre.length; i++) {

        //     console.log(personasNombre[i].nombre)

        // }
        // console.log()
        

        // let persona = Persona()

        console.log(Persona.obtenerNumeroDePersonasPorDominio(personas, ".com"))

    }

})


