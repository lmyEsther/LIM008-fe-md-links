const http = require('http');


/**
 * 
 * aca deberia ir la funcion para validar los links y/o conocer el status de cada link en el archivo md
 * @param { array de objetos } jsonLinks 
 * @returns array de objetos
 * 
 */

const validarLinks = (jsonLinks) => {
  return statusCadaLink;
  // [{href, text, file, status}]
};

const validarLink = (url) => {
  const resp = http.get(url, (res) => {
    const { statusCode } = res;
    
    console.log(statusCode);
  }); 
};

console.log(validarLink('http://es.wikipedia.org/wiki/Markdown'));