let fs = require ('fs') ;
console.log ('ANTES DE LLAMAR A READ DEL FICHERO') ;
let archivo = fs.readFileSync ('/etc/passwd','utf-8') ;
console.log (archivo) ;
console.log ('DESPUES DE LLAMAR AL READ DEL FICHERO') ;