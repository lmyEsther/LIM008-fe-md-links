import { extractRoutesMd } from './utils/extraer-md.js';
import { extractLinks } from './utils/extraer-links.js';
import { validarLinks } from './utils/validate.js';
const path = require('path');

/**
*
*Esta funcion devuelve una promesa, segun las especificaciones de acuerdo a los argumentos
*que ingrese el desarrolador
*@param { String } route
*@param { object } options
*@returns promise
*
*/

export const mdLinks = async(route, options) => {
  const absolute = path.resolve(route);
  const arrayRoutesMD = extractRoutesMd(absolute);
  const jsonLinks = extractLinks(arrayRoutesMD);
  const copyJson = [ ...jsonLinks];

  const promise = options.validate 
    ? await validarLinks(copyJson) 
    : jsonLinks;

  return promise;
};

// reject que la ruta no exista, que no le ingrese parametros
// siguiendo feedback de Mariano de aplicar new Promise tambien
// export const mdLinks = (route, options) => {
//   return new Promise((resolve, reject) => {
//     const absolute = path.resolve(route);
//     const arrayRoutesMD = extractRoutesMd(absolute);
//     const jsonLinks = extractLinks(arrayRoutesMD);
//     const copyJson = [ ...jsonLinks];
//     if (route) {
//       if (options.validate) {
//         validarLinks(copyJson).then(res => resolve(res));
//       } else {
//         resolve(jsonLinks);
//       }
//     } else {
//       reject('no hay ruta');
//     }
//   });
// };