// Funciones

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = nombre => `Hola, ${nombre}`;

const getUser = () => 
  ({
    uid : 'ABC123',
    username: 'El_Papi1502'
  })


console.log(getUser())


console.log(saludar("Goku"));
console.log(saludar2("Goku"));
console.log(saludar3("Goku"));
console.log(saludar4("Goku"));

//1. Transformar a una funcion de flecha
//2. Retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo = ( nombre ) => 
  ({
    uid : 'ABC123',
    username: nombre
  })


const usuarioActivo = getUsuarioActivo('Diego')
console.log(usuarioActivo)