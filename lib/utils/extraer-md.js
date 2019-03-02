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
  // Leer si la ruta es archivo
  const root = fs.lstatSync(absolute);

  if (root.isFile()) {
    arrayRoutes.push(absolute);
  } else {
    const leerDirectorio = fs.readdirSync(absolute);
    leerDirectorio.forEach(element => {
      const arrayDeDirectorios = extractRoutesMd(path.join(absolute, element));
      arrayRoutes = arrayRoutes.concat(arrayDeDirectorios);
    });
  };
  return filterMD(arrayRoutes);
};

const filterMD = (arrayRoutes) => {
  const arrayFileMd = arrayRoutes.filter((elem) => path.extname(elem) === '.md');
  return arrayFileMd;
};

// console.log(extractRoutesMd('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp'));