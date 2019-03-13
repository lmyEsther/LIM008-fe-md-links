"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _extraerMd = require("./utils/extraer-md.js");

var _extraerLinks = require("./utils/extraer-links.js");

var _validate = require("./utils/validate.js");

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


const mdLinks = async (route, options) => {
  const absolute = path.resolve(route);
  const arrayRoutesMD = (0, _extraerMd.extractRoutesMd)(absolute);
  const jsonLinks = (0, _extraerLinks.extractLinks)(arrayRoutesMD);
  const copyJson = [...jsonLinks];
  const promise = options.validate ? await (0, _validate.validarLinks)(copyJson) : jsonLinks;
  return promise;
}; // reject que la ruta no exista, que no le ingrese parametros
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


exports.mdLinks = mdLinks;