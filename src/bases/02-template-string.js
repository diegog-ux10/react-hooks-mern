// Template String

const nombre = "diego";
const apellido = "granados";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es una texto: ${getSaludo(nombre)}`);
