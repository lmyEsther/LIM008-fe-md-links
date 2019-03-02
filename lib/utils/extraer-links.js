const fs = require('fs');
const myMarked = require('marked');

/**
 * Esta funcion hace match con los links que se encuentren en el archivo markdown
 * los extrae y almacena en un jsonLink
 * @param { Array } arrayRoutes contenido en string de cada ruta de archivo markdown
 * @returns { Object } json de links
 * 
 */

export const extractLinks = (arrayRoutes) => {
  let jsonLinks = [];

  arrayRoutes.forEach((route) => {
    const contentMD = fs.readFileSync(route, 'utf-8');
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => { // quiero colocarle solo los parametros que utilizare pero text sale null
      jsonLinks.push({ href, text: text.substring(0, 50), route });
    };
    myMarked(contentMD, { renderer });
  });
  return jsonLinks;
};

// console.log(extractLinks(
//   ['C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md',
//     'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']));

