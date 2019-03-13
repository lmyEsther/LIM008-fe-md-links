"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = void 0;

const fs = require('fs');

const myMarked = require('marked');
/**
 * Esta funcion hace match con los links que se encuentren en el archivo markdown
 * los extrae y almacena en un jsonLink
 * @param { Array } arrayRoutes contenido en string de cada ruta de archivo markdown
 * @returns { Object } json de links
 * 
 */


const extractLinks = arrayRoutes => {
  let jsonLinks = [];
  arrayRoutes.forEach(route => {
    const contentMD = fs.readFileSync(route, 'utf-8');
    const renderer = new myMarked.Renderer();

    renderer.link = (href, __, text) => {
      jsonLinks.push({
        href,
        text: text.substring(0, 50),
        route
      });
    };

    myMarked(contentMD, {
      renderer
    });
  });
  return jsonLinks;
};

exports.extractLinks = extractLinks;