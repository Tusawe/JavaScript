const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});

    if (request.url === '/')
    {

        response.write('Solicitando todos los documentos\n')
        response.end()

    } 
    else if (/\/ciudades\/(\w+)$/.test(request.url)) 
    {
        const pais = /\/ciudades\/(\w+)$/.exec(request.url)[1]
        response.write(`Solicitando ciudades de ${pais}\n`);
        response.end()

    }
    else 
    {

        response.writeHead(400, {"Content-Type": "application/json"});
        response.write(JSON.stringify({error: 'URL no valida.'})+'\n');
        response.end()

    }
    
});

server.listen(4000);
console.log("Server is listening!");