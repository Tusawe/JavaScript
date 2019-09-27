const fs = require('fs')
const Persona = require('./Persona.js')

if (process.argv.length < 3)
{
	console.log("Debe proporcionar un parametros como minimo");
	process.exit();
}

console.log("Datos correctos.")

let argumento = process.argv.slice(2)[0]

fs.readFile(argumento, 'utf-8', (err, data) => {

    if(err){

        console.log('error: ', err)

    } else {

        //console.log(data.toString())

        let allRows = data.split(/\r?\n|\r/);
        let persona
        let personas = []
        for (let singleRow = 0; singleRow < allRows.length -1; singleRow++) {
            let rowCells = allRows[singleRow].split(',');
            persona = new Persona(rowCells[0], rowCells[1], rowCells[2], rowCells[3])
            personas.push(persona)
            console.log(persona.toString())
        }

        

        // let persona = Persona()

    }

})


