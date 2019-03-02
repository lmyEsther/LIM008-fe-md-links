const fs = require('fs');
const path = require('path');
/**
 * Funcion que extrae todas las rutas que hayan en el directorio
 * haciendo la pregunta de si la ruta ingresada es un archivo o es un directorio
 * cumpliendo con la especificación inicial del proyecto.
 * @param { String } absoluteRoute Ruta absoluta
 * @returns { Array }
 * 
 */

export const extractAllRoutes = (absoluteRoute) => {
  let arrayRoutes = [];
  // Leer si la ruta es archivo
  const root = fs.lstatSync(absoluteRoute);

  if (root.isFile()) {
    arrayRoutes.push(absoluteRoute);
  } else {
    const leerDirectorio = fs.readdirSync(absoluteRoute);
    leerDirectorio.forEach(element => {
      const arrayDeDirectorios = extractAllRoutes(path.join(absoluteRoute, element));
      arrayRoutes = arrayRoutes.concat(arrayDeDirectorios);
    });
  };
  return arrayRoutes;
};

/**
 * Esta función filtra el array de rutas por archivos .md
 * 
 * @param { Array } arrayRoutes 
 * @returns ruta del archivo .md String
 * 
 */

export const filterMD = (arrayRoutes) => {
  const arrayFileMd = arrayRoutes.filter((elem) => path.extname(elem) === '.md');
  return arrayFileMd;
};