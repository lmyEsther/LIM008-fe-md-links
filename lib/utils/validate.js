// const axios = require('axios'); hay que realizar mock para testear solo esto
const fetch = require('node-fetch');

/**
 * 
 * acá deberia ir la funcion para conocer el status del link
 * @param { string }  url
 * @returns objeto con status y status text
 * 
 */

// export async function validarLink(url) {
//   try {
//     const res = await axios.get(url, {
//       validateStatus: (status) => {
//         return status <= 502; // Reject only if the status code is greater than or equal to 502
//       }
//     });
//     return {
//       status: res.status,
//       statusText: res.statusText, 
//     };
//   } catch (error) {
//     console.error(error);
//   }
// };

// (async() => {
//   console.log(await validarLink('https://es.wikipedia.org/wiki/Markdown'));
// })();

export const validarLinks = async(jsonLinks) => {
  const jsonPromises = await jsonLinks.map(link => fetch(link.href));

  return Promise.all(jsonPromises)
    .then(res => {
      const validatedJsonLinks = jsonLinks.map((currentObj, linkStatus) => {
        currentObj.status = res[linkStatus].status;
        currentObj.statusText = res[linkStatus].statusText;
        return currentObj;
      });
      return validatedJsonLinks;
    });
};

(async() => {
  console.log(await validarLinks([{ href: 'https://nodejs.org/es/',
    text: 'Node.js',
    route:
   'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' }]));
})();

