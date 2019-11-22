var menu = require('simple-menu');
var readline = require('readline-sync');
 
menu.reset();
 
menu.addText('Main Menu');
menu.addBreak('-', 60);
 
menu.addOption('Listar todos los datos', function() {
  console.log('Listar todos los datos');
});

menu.addOption('Listar todos los paises', function() {
    console.log('Listar todos los paises');
    var name = readline.question("Introduzca un pais: ");
    console.log("Tu país es " + name);
  });
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');
