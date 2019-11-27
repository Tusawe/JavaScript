const menu = require('simple-menu');
const readline = require('readline-sync');
const client = require('./src/db/conexion');
const findDocuments = require('./db/findAll')
 
menu.reset();
 
menu.addText('Main Menu');
menu.addBreak('-', 60);
 
menu.addOption('Listar todos los datos', function() {
  console.log('Listar todos los datos');
  findDocuments(db, (err, docs) => {
    if(err) console.log(err)
    else console.log(docs)
  })
});

menu.addOption('Listar todos los paises', function() {
    console.log('Listar todos los paises');
    var name = readline.question("Introduzca un pais: ");
    console.log("Tu país es " + name);
  });
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');
