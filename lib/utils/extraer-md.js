const fs = require('fs');
const path = require('path');

/**
 * Funcion que extrae las rutas de archivos md que hayan en el directorio
 * haciendo la pregunta de si la ruta ingresada es un archivo o es un directorio
 * cumpliendo con la especificación inicial del proyecto.
 * @param { String } absoluteRoute Ruta absoluta
 * @returns { Array }
 * 
 */

export const extractRoutesMd = (absolute) => {
  let arrayRoutes = [];

  const root = fs.lstatSync(absolute);
  if (root.isFile()) {
    if (path.extname(absolute) === '.md') {
      arrayRoutes.push(absolute);
    }
  } else {
    const readDirectory = fs.readdirSync(absolute);
    readDirectory.forEach(element => {
      const directoryArray = extractRoutesMd(path.join(absolute, element));
      arrayRoutes = arrayRoutes.concat(directoryArray);
    });
  };
  return arrayRoutes;
};
