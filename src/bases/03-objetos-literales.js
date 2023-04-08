// Objetos Literales

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 90001,
    lat: 34.1648,
    lng: 15.1589,
  },
};

// console.table(otroObjeto);
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "chris";

console.log(persona);
console.log(persona2);
