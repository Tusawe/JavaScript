const http = require ("http")
const server = http.createServer ()
server.on ("request", ( req , res ) => {
res.statusCode = 200
res.setHeader ('Content-Type','text/plain ')
res.end ('Hello World')
})
server.listen (3000)