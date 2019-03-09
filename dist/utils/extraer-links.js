"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = void 0;

var fs = require('fs');

var myMarked = require('marked');
/**
 * Esta funcion hace match con los links que se encuentren en el archivo markdown
 * los extrae y almacena en un jsonLink
 * @param { Array } arrayRoutes contenido en string de cada ruta de archivo markdown
 * @returns { Object } json de links
 * 
 */


var extractLinks = function extractLinks(arrayRoutes) {
  var jsonLinks = [];
  arrayRoutes.forEach(function (route) {
    var contentMD = fs.readFileSync(route, 'utf-8');
    var renderer = new myMarked.Renderer();

    renderer.link = function (href, __, text) {
      jsonLinks.push({
        href: href,
        text: text.substring(0, 50),
        route: route
      });
    };

    myMarked(contentMD, {
      renderer: renderer
    });
  });
  return jsonLinks;
}; // console.log(extractLinks(
//   ['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md',
//     'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']));


exports.extractLinks = extractLinks;