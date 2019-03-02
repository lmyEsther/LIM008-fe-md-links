const path = require('path');

/**
 * Esta funcion deberia confirmar que la ruta ingresada por la desarrolladora tiene el status de absoluta
 * 
 * @param { String } ruta
 * @returns booleano true o false
 *  
 */

// const isAbsoluteTheRoot = (ruta) => {
//     const isAbsolute = path.isAbsolute(ruta);
//     return isAbsolute;
// }

/**
 * Convierte la ruta relativa a absoluta
 * @param { string } ruta 
 * @returns string de la ruta absoluta
 * 
 * 
 */
export const toAbsolute = (ruta) => {
  if (path.isAbsolute(ruta) === false) {
    const rutaAbsoluta = path.resolve(ruta);
    return rutaAbsoluta;
  } else {
    return ruta;
  }
};