// Desestructuración
// Asignación Desestructurante  

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman' 
}

// const {nombre, edad, clave} = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const retornaPersona = ({nombre, edad, clave, rango = 'capitan'}) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:326.165,
            lng:11683.1
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona)

console.log(nombreClave, anios)
console.log(lat, lng)