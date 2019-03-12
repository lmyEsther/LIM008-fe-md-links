const fetch = require('node-fetch');

/**
 * 
 * acá deberia ir la funcion para conocer el status del link
 * @param { Array de objetos }  jsonLinks
 * @returns objeto con status y status text
 * 
 */

export const validarLinks = async(jsonLinks) => {
  const copyJson = [ ...jsonLinks];
  const jsonPromises = await copyJson.map(link => fetch(link.href));

  const res = await Promise.all(jsonPromises);
  const validatedJsonLinks = copyJson.map((currentObj, linkStatus) => {
    currentObj.status = res[linkStatus].status;
    currentObj.statusText = res[linkStatus].statusText;
    return currentObj;
  });
  return validatedJsonLinks;
};

// (async() => {
//   console.log(await validarLinks([{ href: 'https://nodejs.org/es/',
//     text: 'Node.js',
//     route:
//    'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' }]));
// })();

