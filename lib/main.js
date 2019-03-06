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

export const mdLinks = async(route, options) => {
  const absolute = toAbsolute(route);
  const arrayRoutesMD = extractRoutesMd(absolute);
  const jsonLinks = extractLinks(arrayRoutesMD);
  const copyJson = [ ...jsonLinks];
  console.log(jsonLinks);

  if (options.validate) {
    const validatedLinks = await validarLinks(copyJson);
    return validatedLinks;
  } else {
    console.log(jsonLinks);
    return jsonLinks;
  }
};