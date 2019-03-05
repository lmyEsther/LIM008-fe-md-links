const axios = require('axios');

/**
 * 
 * acá deberia ir la funcion para conocer el status del link
 * @param { string }  url
 * @returns objeto con status y status text
 * 
 */

async function validarLink(url) {
  try {
    const res = await axios.get(url, {
      validateStatus: (status) => {
        return status <= 502; // Reject only if the status code is greater than or equal to 400
      }
    });
    return {
      status: res.status,
      statusText: res.statusText, 
    };
  } catch (error) {
    console.error(error);
  }
};

(async() => {
  // console.log(await validarLink('https://es.wikipedia.org/wiki/Markdown'));
  const validarLinks = (jsonLinks) => {
    jsonLinks.forEach(link => {
      await validarLink(link)
    });

    return statusCadaLink;
    // [{href, text, file, status}]
  };
})();


