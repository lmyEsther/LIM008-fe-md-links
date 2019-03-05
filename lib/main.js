import { toAbsolute } from './utils/convertir-RutaAbsoluta.js';
import { extractRoutesMd } from './utils/extraer-md.js';
import { extractLinks } from './utils/extraer-links.js';
import { validarLinks } from './utils/validate.js';

/**
*
*Esta funcion devuelve una promesa, segun las especificaciones de acuerdo a los argumentos
*que ingrese el desarrolador
*@param { String } route
*@param { object } options
*@returns promise
*
*/

const mdLinks = async(route) => {
  const absolute = toAbsolute(route);
  const arrayRoutesMD = extractRoutesMd(absolute);
  const jsonLinks = extractLinks(arrayRoutesMD);
  const validate = await validarLinks(jsonLinks);

  return {
    total: validate.length
  };
};

(async() => {
  console.log(await mdLinks('tests\\test-imp\\archivo2.txt'));
})();