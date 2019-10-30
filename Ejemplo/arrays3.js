var array = ['pato', 'ganzo', 'pollo']
var [a,b,c] = array
console.log(a, b, c)

const objeto = {
    a: 'casa',
    b: 'apartamento'
}
var {a,b} = objeto
console.log(a, b)

const url = "https://developer.mozilla.org/en-US/Web/JavaScript";
const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
const [, protocol, fullhost, fullpath] = parsedURL;
console.log(protocol);
console.log(fullhost);
console.log(fullpath);