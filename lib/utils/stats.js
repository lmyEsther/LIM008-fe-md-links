// en este archivo deberia ir funciones que calcule los links unicos

/**
 * 
 * @param { object } jsonLinks 
 * 
 * @returns { array } array de links unicos
 * 
 * 
 */

export const filtrarLinksUnicos = (jsonLinks) => {
  const arrayUrl = jsonLinks.reduce((acum, ele) => {
    acum.push(ele.href);
    return acum;
  }, []);
  const uniqueLinks = arrayUrl.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });

  return uniqueLinks;
};

// console.log(filtrarLinksUnicos([{ href: 'https://es.wikipedia.org/wiki/Markdown',
//   text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
//   route:
//    'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
// { href: 'https://nodejs.org/',
//   text: 'Node.js',
//   route:
//    'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
// { href: 'https://nodejs.org/',
//   text: 'Node.js',
//   route:
//    'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' },
// { href: 'https://developers.google.com/v8/',
//   text: 'motor de JavaScript V8 de Chrome',
//   route:
//    'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' }]));