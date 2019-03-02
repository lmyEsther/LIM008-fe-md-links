const path = require('path');

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