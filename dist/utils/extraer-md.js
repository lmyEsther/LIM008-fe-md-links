"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractRoutesMd = void 0;

var fs = require('fs');

var path = require('path');
/**
 * Funcion que extrae las rutas de archivos md que hayan en el directorio
 * haciendo la pregunta de si la ruta ingresada es un archivo o es un directorio
 * cumpliendo con la especificación inicial del proyecto.
 * @param { String } absoluteRoute Ruta absoluta
 * @returns { Array }
 * 
 */


var extractRoutesMd = function extractRoutesMd(absolute) {
  var arrayRoutes = [];
  var root = fs.lstatSync(absolute);

  if (root.isFile()) {
    if (path.extname(absolute) === '.md') {
      arrayRoutes.push(absolute);
    }
  } else {
    var readDirectory = fs.readdirSync(absolute);
    readDirectory.forEach(function (element) {
      var directoryArray = extractRoutesMd(path.join(absolute, element));
      arrayRoutes = arrayRoutes.concat(directoryArray);
    });
  }

  ;
  return arrayRoutes;
}; // console.log(extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'));


exports.extractRoutesMd = extractRoutesMd;