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
    const leerDirectorio = fs.readdirSync(absolute);
    leerDirectorio.forEach(element => {
      const arrayDeDirectorios = extractRoutesMd(path.join(absolute, element));
      arrayRoutes = arrayRoutes.concat(arrayDeDirectorios);
    });
  };
  return arrayRoutes;
};


// console.log(extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'));