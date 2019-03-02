import { extractAllRoutes, filterMD } from './extraer-md.js';
const fs = require('fs');

/**
 * Esta funcion hace match con los links que se encuentren en el archivo markdown
 * los extraey almacena en un array
 * utilizare el metodo de expersiones regulares
 * @param {Array} arrayRoutes contenido en string del archivo markdown
 * @returns array de links
 * 
 */

const extractLinks = (arrayRoutes) => {
  let arrayContenido = [];
  arrayRoutes.forEach((element) => {
    const leerArchivo = fs.readFileSync(element, 'utf-8');
    arrayContenido.push(leerArchivo);
  });
  return arrayContenido;
  // return [{ href, text, file }];
};
console.log(extractLinks(filterMD(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'))))

/**
 * 
 * Limita el texto del link a maximo 50 caracteres.
 * @param { string } filemd 
 * @returns { string }
 * 
 */

// const truncarText = (obj) => {
//   return text; // devuelve el text en forma de string delimitado a 50 caracteres
// };