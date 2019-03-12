import { extractLinks } from '../../lib/utils/extraer-links.js';

describe('extractLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof extractLinks).toBe('function');
  });
  
  it('Debería retornar un arreglo de objetos con cada link encontrado', () => {
    expect(extractLinks(
      ['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md',
        'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md'])).toEqual([{ href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
      route:
         'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
    { href: 'https://nodejs.org/',
      text: 'Node.js',
      route:
         'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
    { href: 'https://nodejs.org/es/',
      text: 'Node.js',
      route:
         'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' },
    { href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      route:
         'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' }]);
  });
});