const comprobarFormato = dni => /^[0-9]{8}[A-Z]/.test(dni.toUpperCase())

module.exports.comprobarLetra = dni => {
    if (comprobarFormato(dni)){
        const CADENA = 'TRWAGMYFPDXBNJZSQVHLCKET'
        const letra = dni.substring(dni.length - 1)
        const dniSinLetra = dni.substring(0, dni.length - 1)
        //console.log(letra)
        //console.log(dniSinLetra)
        const posicion = dniSinLetra % 23
        //console.log(posicion)
        return CADENA.substring(posicion, posicion+1) === letra.toUpperCase()
    } else {
        return false
    }
}

//console.log(comprobarLetra('11111111h'))