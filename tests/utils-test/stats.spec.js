import { filtrarLinksUnicos } from '../../lib/utils/stats.js';

const input = [{ 
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
  route:
 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
{ href: 'https://nodejs.org/',
  text: 'Node.js',
  route:
 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
{ href: 'https://nodejs.org/',
  text: 'Node.js',
  route:
 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' },
{ href: 'https://developers.google.com/v8/',
  text: 'motor de JavaScript V8 de Chrome',
  route:
 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' }];

const output = ['https://es.wikipedia.org/wiki/Markdown', 'https://nodejs.org/', 'https://developers.google.com/v8/'];

describe('filtrarLinksUnicos', () => {
  it('Debería ser una funcion', () => {
    expect(typeof filtrarLinksUnicos).toBe('function');
  });
  it('Debería devolver un array de links unicos', () => {
    expect(filtrarLinksUnicos(input)).toEqual(output);
  });
});