// Desestructuración Arreglos

const personajes = ['Goku', 'Trunks', 'Vegeta']

const [ , p2 ] = personajes

console.log(p2)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

const otroNombre = ( valor ) => {
    return [valor, () => {console.log('Hola Mundo')}]
}

const [nombre, setNombre] = otroNombre('Diego')
console.log(nombre)
setNombre()